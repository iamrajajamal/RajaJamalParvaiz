import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MatterPhysicsOptions {
  itemSelector: string;
  springBackDelay?: number; // default 3000ms
  springStiffness?: number; // default 0.003
  gravity?: number; // default 0
  anchors?: { x: number; y: number; angle: number }[]; // optional dynamic anchors (absolute inside container)
  disableCollision?: boolean; // ignore collisions between items themselves to prevent jitter
}

export function useMatterPhysics(
  containerRef: React.RefObject<HTMLDivElement | null>,
  options: MatterPhysicsOptions
) {
  const [isMobileState, setIsMobileState] = useState(false);
  const isMobile = useRef(false);
  const optionsRef = useRef(options);

  // Detect mobile/desktop transitions
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile !== isMobileState) {
        setIsMobileState(mobile);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileState]);

  // Keep options ref fresh
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  // Procedural Paper Crinkle sound using Web Audio API
  const playCrinkleSound = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    try {
      const ctx = new AudioContext();
      const duration = 0.12; // short 120ms sound
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Procedural noise with simulated rustle spikes
      for (let i = 0; i < bufferSize; i++) {
        const noise = Math.random() * 2 - 1;
        const crackle = Math.random() > 0.96 ? (Math.random() * 2 - 1) * 0.9 : 0;
        data[i] = noise * 0.12 + crackle;
      }

      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;

      // Filter settings to match paper friction (high frequencies)
      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 2200;

      const bandFilter = ctx.createBiquadFilter();
      bandFilter.type = "bandpass";
      bandFilter.frequency.value = 4500;
      bandFilter.Q.value = 1.2;

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.04, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration - 0.01);

      noiseNode.connect(filter);
      filter.connect(bandFilter);
      bandFilter.connect(gainNode);
      gainNode.connect(ctx.destination);

      noiseNode.start();
    } catch (err) {
      // Audio context might be blocked or not supported
    }
  };

  useEffect(() => {
    let active = true;
    let cleanupFn: (() => void) | undefined;

    // Use a 200ms timeout to let browser layout stabilize and prevent cramped positioning
    const timer = setTimeout(() => {
      if (!active || !containerRef.current) return;

      const mobile = window.innerWidth < 768;
      isMobile.current = mobile;

      const container = containerRef.current;
      const items = container.querySelectorAll(options.itemSelector) as NodeListOf<HTMLElement>;
      if (items.length === 0) return;

      if (mobile) {
        // --- MOBILE TOUCH GESTURE FALLBACK (Matter.js disabled) ---
        const activeTouches = new Map<HTMLElement, { startX: number; startY: number; currentX: number; currentY: number; rot: number }>();
        const itemCleanupListeners: { el: HTMLElement; name: string; handler: any }[] = [];

        items.forEach((item) => {
          const originalTransform = item.style.transform;
          let timeoutId: number;

          const onTouchStart = (e: TouchEvent) => {
            if (e.touches.length !== 1) return;
            const touch = e.touches[0];
            
            activeTouches.set(item, {
              startX: touch.clientX,
              startY: touch.clientY,
              currentX: 0,
              currentY: 0,
              rot: 0
            });
            
            window.clearTimeout(timeoutId);
            item.style.transition = "none";
            item.style.zIndex = "100";
          };

          const onTouchMove = (e: TouchEvent) => {
            const touchState = activeTouches.get(item);
            if (!touchState) return;
            
            const touch = e.touches[0];
            const dx = touch.clientX - touchState.startX;
            const dy = touch.clientY - touchState.startY;
            
            touchState.currentX = dx;
            touchState.currentY = dy;
            touchState.rot = dx * 0.15;

            item.style.transform = `translate3d(${dx}px, ${dy}px, 0px) rotate(${touchState.rot}deg)`;
          };

          const onTouchEnd = () => {
            const touchState = activeTouches.get(item);
            if (!touchState) return;

            activeTouches.delete(item);

            item.style.transition = "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            playCrinkleSound();

            timeoutId = window.setTimeout(() => {
              item.style.transform = originalTransform;
              item.style.zIndex = "";
            }, 3000);
          };

          item.addEventListener("touchstart", onTouchStart, { passive: true });
          item.addEventListener("touchmove", onTouchMove, { passive: true });
          item.addEventListener("touchend", onTouchEnd);

          itemCleanupListeners.push(
            { el: item, name: "touchstart", handler: onTouchStart },
            { el: item, name: "touchmove", handler: onTouchMove },
            { el: item, name: "touchend", handler: onTouchEnd }
          );
        });

        cleanupFn = () => {
          itemCleanupListeners.forEach(({ el, name, handler }) => {
            el.removeEventListener(name, handler);
          });
          items.forEach((item) => {
            item.style.transition = "";
            item.style.zIndex = "";
          });
        };
      } else {
        // --- DESKTOP MATTER.JS PHYSICS ---
        const delay = optionsRef.current.springBackDelay ?? 3000;
        const stiffness = optionsRef.current.springStiffness ?? 0.003;
        const gravityY = optionsRef.current.gravity ?? 0;

        // Create Matter engine
        const engine = Matter.Engine.create();
        const world = engine.world;
        world.gravity.y = gravityY;
        const rect = container.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Create container boundaries
        const thickness = 60;
        const ground = Matter.Bodies.rectangle(width / 2, height + thickness / 2, width * 2, thickness, { isStatic: true });
        const ceiling = Matter.Bodies.rectangle(width / 2, -thickness / 2, width * 2, thickness, { isStatic: true });
        const leftWall = Matter.Bodies.rectangle(-thickness / 2, height / 2, thickness, height * 2, { isStatic: true });
        const rightWall = Matter.Bodies.rectangle(width + thickness / 2, height / 2, thickness, height * 2, { isStatic: true });

        Matter.World.add(world, [ground, ceiling, leftWall, rightWall]);

        // Create physics bodies for each DOM element
        const bodyMap = new Map<Matter.Body, {
          el: HTMLElement;
          index: number;
          anchorX: number;
          anchorY: number;
          anchorAngle: number;
          lastInteractionTime: number;
        }>();

        // Make container relative so we can absolute-position items
        const originalContainerPosition = container.style.position;
        container.style.position = "relative";

        const originalStyles = new Map<HTMLElement, {
          position: string;
          margin: string;
          top: string;
          left: string;
          width: string;
          height: string;
          transformOrigin: string;
          transform: string;
        }>();

        // Read Phase: Get all dimensions and layout details before mutating any styles
        const measuredItems = Array.from(items).map((item, index) => {
          const itemRect = item.getBoundingClientRect();
          const parentRect = container.getBoundingClientRect();

          const x = itemRect.left - parentRect.left + itemRect.width / 2;
          const y = itemRect.top - parentRect.top + itemRect.height / 2;

          // Extract current rotation angle if any
          const transform = window.getComputedStyle(item).transform;
          let angle = 0;
          if (transform && transform !== "none") {
            const values = transform.split("(")[1].split(")")[0].split(",");
            const a = parseFloat(values[0]);
            const b = parseFloat(values[1]);
            angle = Math.atan2(b, a);
          }

          // Save original styles
          const orig = {
            position: item.style.position,
            margin: item.style.margin,
            top: item.style.top,
            left: item.style.left,
            width: item.style.width,
            height: item.style.height,
            transformOrigin: item.style.transformOrigin,
            transform: item.style.transform,
          };

          return {
            item,
            index,
            x,
            y,
            width: itemRect.width,
            height: itemRect.height,
            angle,
            origStyles: orig,
          };
        });

        // Write Phase: Apply absolute styling, create bodies, and map references
        measuredItems.forEach(({ item, index, x, y, width: itemW, height: itemH, angle, origStyles }) => {
          // Add draggable indicator class so custom cursor knows to morph to tape
          item.classList.add("draggable");

          // Create body matching dimensions
          const body = Matter.Bodies.rectangle(x, y, itemW, itemH, {
            restitution: 0.5,
            friction: 0.1,
            frictionAir: 0.05,
            angle: angle,
            collisionFilter: optionsRef.current.disableCollision
              ? { group: -1 }
              : undefined,
          });

          // Increase inertia so it doesn't spin wildly when dragged from a corner
          Matter.Body.setInertia(body, body.inertia * 8);

          Matter.World.add(world, body);

          // Check for predefined initial anchors
          let ax = x;
          let ay = y;
          let aa = angle;
          if (optionsRef.current.anchors && optionsRef.current.anchors[index]) {
            ax = optionsRef.current.anchors[index].x;
            ay = optionsRef.current.anchors[index].y;
            aa = optionsRef.current.anchors[index].angle;
          }

          bodyMap.set(body, {
            el: item,
            index: index,
            anchorX: ax,
            anchorY: ay,
            anchorAngle: aa,
            lastInteractionTime: 0,
          });

          originalStyles.set(item, origStyles);

          // Prepare DOM element styles for absolute positioning
          item.style.position = "absolute";
          item.style.margin = "0";
          item.style.top = "0";
          item.style.left = "0";
          item.style.width = `${itemW}px`;
          item.style.height = `${itemH}px`;
          item.style.transformOrigin = "center center";
        });

        // After setting all absolute styles, force ScrollTrigger to refresh
        // since elements changing to absolute might collapse/shift container heights
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 50);

        // Add mouse constraint to drag items
        const mouse = Matter.Mouse.create(container);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.1,
            render: { visible: false },
          },
        });

        Matter.World.add(world, mouseConstraint);

        // Track interaction timestamps to know when to spring back
        const startDragHandler = (event: any) => {
          const body = event.body;
          if (body && bodyMap.has(body)) {
            const info = bodyMap.get(body)!;
            info.lastInteractionTime = Date.now();
            playCrinkleSound();
          }
        };

        const dragHandler = (event: any) => {
          const body = event.body;
          if (body && bodyMap.has(body)) {
            const info = bodyMap.get(body)!;
            info.lastInteractionTime = Date.now();
          }
        };

        const collisionStartHandler = (event: any) => {
          event.pairs.forEach((pair: any) => {
            const speed = Math.max(pair.bodyA.speed, pair.bodyB.speed);
            if (speed > 1.2) {
              playCrinkleSound();
            }
          });
        };

        Matter.Events.on(mouseConstraint, "startdrag", startDragHandler);
        Matter.Events.on(mouseConstraint, "drag", dragHandler);
        Matter.Events.on(engine, "collisionStart", collisionStartHandler);

        // Render / Update loop
        let animationFrameId: number;

        const update = () => {
          // Step engine
          Matter.Engine.update(engine, 16.666);

          const now = Date.now();
          const currentAnchors = optionsRef.current.anchors;

          bodyMap.forEach((info, body) => {
            const isDragged = mouseConstraint.body === body;
            
            if (isDragged) {
              info.lastInteractionTime = now;
            }

            // Dynamically update anchors if external list changes
            if (currentAnchors && currentAnchors[info.index]) {
              info.anchorX = currentAnchors[info.index].x;
              info.anchorY = currentAnchors[info.index].y;
              info.anchorAngle = currentAnchors[info.index].angle;
            }

            // Clamp the card's tilt angle relative to its anchor angle to prevent flipping upside down
            const maxTilt = 0.25; // ~14.3 degrees
            let diffAngle = body.angle - info.anchorAngle;
            // Normalize diffAngle to -PI to PI
            diffAngle = Math.atan2(Math.sin(diffAngle), Math.cos(diffAngle));

            if (diffAngle > maxTilt) {
              Matter.Body.setAngle(body, info.anchorAngle + maxTilt);
              Matter.Body.setAngularVelocity(body, 0);
            } else if (diffAngle < -maxTilt) {
              Matter.Body.setAngle(body, info.anchorAngle - maxTilt);
              Matter.Body.setAngularVelocity(body, 0);
            }

            // Check if 3 seconds of idleness have elapsed
            if (!isDragged && now - info.lastInteractionTime > delay) {
              // Pull towards home anchor
              const dx = info.anchorX - body.position.x;
              const dy = info.anchorY - body.position.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance > 1) {
                Matter.Body.applyForce(body, body.position, {
                  x: dx * stiffness,
                  y: dy * stiffness,
                });
                Matter.Body.setVelocity(body, {
                  x: body.velocity.x * 0.92,
                  y: body.velocity.y * 0.92,
                });
              }

              const diffAngle = info.anchorAngle - body.angle;
              if (Math.abs(diffAngle) > 0.01) {
                Matter.Body.setAngularVelocity(body, body.angularVelocity * 0.92 + diffAngle * 0.02);
              }
            }

            // Apply physical positions to DOM elements
            const xOffset = body.position.x - info.el.offsetWidth / 2;
            const yOffset = body.position.y - info.el.offsetHeight / 2;
            info.el.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0px) rotate(${body.angle}rad)`;
          });

          animationFrameId = requestAnimationFrame(update);
        };

        update();

        cleanupFn = () => {
          cancelAnimationFrame(animationFrameId);
          Matter.Events.off(mouseConstraint, "startdrag", startDragHandler);
          Matter.Events.off(mouseConstraint, "drag", dragHandler);
          Matter.Events.off(engine, "collisionStart", collisionStartHandler);
          Matter.World.clear(world, false);
          Matter.Engine.clear(engine);

          // Restore original styles
          bodyMap.forEach((info) => {
            const item = info.el;
            item.classList.remove("draggable");
            const orig = originalStyles.get(item);
            if (orig) {
              item.style.position = orig.position;
              item.style.margin = orig.margin;
              item.style.top = orig.top;
              item.style.left = orig.left;
              item.style.width = orig.width;
              item.style.height = orig.height;
              item.style.transformOrigin = orig.transformOrigin;
              item.style.transform = orig.transform;
            }
          });
          container.style.position = originalContainerPosition;
        };
      }
    }, 200);

    return () => {
      active = false;
      clearTimeout(timer);
      if (cleanupFn) cleanupFn();
    };
  }, [containerRef, options.itemSelector, isMobileState]);
}
