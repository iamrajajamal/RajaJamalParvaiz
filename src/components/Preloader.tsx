import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

interface Scrap {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  shapePoints: { x: number; y: number }[];
  targetX: number;
  targetY: number;
  assembled: boolean;
  opacity: number;
  scale: number;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Colors matching the cardboard aesthetic
    const colors = [
      "#d54b3d", // craft-pink/coral
      "#b45309", // craft-orange/amber
      "#0369a1", // craft-blue
      "#166534", // craft-green
      "#fef9c3", // craft-yellow
      "#e7e2d8", // light craft paper
      "#5c4613", // dark craft pen
    ];

    // Cardboard box state variables for animation
    const box = {
      x: width / 2,
      y: height / 2 + 30,
      width: 140,
      height: 120,
      flapLeftAngle: 0, // In radians
      flapRightAngle: 0,
      scale: 1,
      yOffset: 150, // Box starts slightly lower or translates
      opacity: 1,
      shake: 0,
    };

    // Tape peeling animation state
    const tape = {
      width: 170,
      height: 24,
      peelProgress: 0, // 0 = fully on, 1 = fully peeled/gone
      peelX: 0,
      opacity: 1,
    };

    // Paper scraps
    const scrapsCount = 180;
    const scraps: Scrap[] = [];

    // Helper to generate a random torn paper polygon shape
    const createTornShape = (size: number) => {
      const points = [];
      const numPoints = 5 + Math.floor(Math.random() * 4);
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const radius = size * (0.6 + Math.random() * 0.4);
        points.push({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        });
      }
      return points;
    };

    // Setup coordinates for letters JAMAL (relative to center of screen)
    // Scale factor to make it look prominent
    const scaleFactor = Math.min(width, height) < 640 ? 1.0 : 1.3;
    const letterSpacing = 65 * scaleFactor;
    const startX = -2 * letterSpacing;
    const centerY = -40; // higher than the box center to fly up

    const targets: { x: number; y: number }[] = [];

    // Function to push a grid of points forming a line segment
    const drawLinePoints = (x1: number, y1: number, x2: number, y2: number, density = 6) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const steps = Math.max(2, Math.floor((dist / 10) * density));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        targets.push({
          x: x1 + dx * t,
          y: y1 + dy * t,
        });
      }
    };

    // Generate letters paths:
    // J
    drawLinePoints(startX - 20, centerY - 40, startX + 20, centerY - 40); // Top bar
    drawLinePoints(startX, centerY - 40, startX, centerY + 30); // Vertical stem
    drawLinePoints(startX, centerY + 30, startX - 25, centerY + 30); // Bottom curve left
    drawLinePoints(startX - 25, centerY + 30, startX - 25, centerY + 10); // Bottom curve hook up

    // A (first)
    const ax = startX + letterSpacing;
    drawLinePoints(ax - 20, centerY + 30, ax, centerY - 45); // Left leg
    drawLinePoints(ax, centerY - 45, ax + 20, centerY + 30); // Right leg
    drawLinePoints(ax - 10, centerY, ax + 10, centerY); // Cross bar

    // M
    const mx = startX + letterSpacing * 2;
    drawLinePoints(mx - 22, centerY + 30, mx - 22, centerY - 45); // Left stem
    drawLinePoints(mx - 22, centerY - 45, mx, centerY - 10); // Left diagonal
    drawLinePoints(mx, centerY - 10, mx + 22, centerY - 45); // Right diagonal
    drawLinePoints(mx + 22, centerY - 45, mx + 22, centerY + 30); // Right stem

    // A (second)
    const ax2 = startX + letterSpacing * 3;
    drawLinePoints(ax2 - 20, centerY + 30, ax2, centerY - 45); // Left leg
    drawLinePoints(ax2, centerY - 45, ax2 + 20, centerY + 30); // Right leg
    drawLinePoints(ax2 - 10, centerY, ax2 + 10, centerY); // Cross bar

    // L
    const lx = startX + letterSpacing * 4;
    drawLinePoints(lx - 15, centerY - 45, lx - 15, centerY + 30); // Vertical stem
    drawLinePoints(lx - 15, centerY + 30, lx + 20, centerY + 30); // Bottom shelf

    // Shuffle targets to map scraps randomly
    const shuffledTargets = [...targets].sort(() => Math.random() - 0.5);

    // Initialize all scraps
    for (let i = 0; i < scrapsCount; i++) {
      const size = 6 + Math.random() * 8;
      const target = shuffledTargets[i % shuffledTargets.length] || { x: 0, y: 0 };
      
      scraps.push({
        x: width / 2 + (Math.random() - 0.5) * 40,
        y: height / 2 + 10 + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 12,
        vy: -10 - Math.random() * 15, // fly upwards initially
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        color: colors[i % colors.length],
        shapePoints: createTornShape(size),
        targetX: width / 2 + target.x * scaleFactor,
        targetY: height / 2 + centerY + target.y * scaleFactor,
        assembled: false,
        opacity: 0,
        scale: 0.5,
      });
    }

    // GSAP master timeline for loading sequence
    const tl = gsap.timeline({
      onComplete: () => {
        // Delay a tiny bit before exit
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete,
        });
      },
    });

    // Animate progress value
    const progressObj = { value: 0 };
    tl.to(progressObj, {
      value: 100,
      duration: 2.8,
      ease: "power1.inOut",
      onUpdate: () => {
        setProgress(Math.floor(progressObj.value));
      },
    });

    // 1. Box enters with a bounce
    tl.fromTo(
      box,
      { yOffset: 300, scale: 0.8 },
      { yOffset: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      0
    );

    // 2. Tape peels off visually (progress 10% to 30%)
    tl.to(
      tape,
      {
        peelProgress: 1,
        duration: 0.7,
        ease: "power2.inOut",
      },
      0.3
    );

    // Fade out peeled tape
    tl.to(tape, { opacity: 0, duration: 0.2 }, 0.9);

    // Shake the box just before opening
    tl.to(
      box,
      {
        shake: 5,
        duration: 0.3,
        ease: "rough({ template: none.out, strength: 2, points: 20, taper: none, randomize: true, clamp: false })",
      },
      0.8
    );

    // 3. Box flaps open (progress 35% to 50%)
    tl.to(
      box,
      {
        flapLeftAngle: -Math.PI * 0.85,
        flapRightAngle: Math.PI * 0.85,
        shake: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      1.1
    );

    // 4. Scraps fly out (progress 45% onwards)
    // We animate their properties inside the render loop based on timeline progress
    const scrapTimeline = { flyProgress: 0 };
    tl.to(
      scrapTimeline,
      {
        flyProgress: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      1.2
    );

    // Draw functions
    const drawBox = (x: number, y: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(box.scale, box.scale);
      
      const shakeX = (Math.random() - 0.5) * box.shake;
      ctx.translate(shakeX, 0);

      const bh = box.height;
      const bw = box.width;

      // Draw shadow
      ctx.fillStyle = "rgba(40, 30, 20, 0.12)";
      ctx.beginPath();
      ctx.ellipse(0, bh / 2 + 10, bw / 2 + 10, 15, 0, 0, Math.PI * 2);
      ctx.fill();

      // Front & back box face (cardboard brown)
      ctx.fillStyle = "#c8a27a"; // primary cardboard color
      ctx.strokeStyle = "#5c4613";
      ctx.lineWidth = 3.5;

      // Outer box body
      ctx.beginPath();
      ctx.rect(-bw / 2, -bh / 2, bw, bh);
      ctx.fill();
      ctx.stroke();

      // Inside dark area (depth)
      ctx.fillStyle = "#8a6643";
      ctx.beginPath();
      ctx.rect(-bw / 2, -bh / 2, bw, 25);
      ctx.fill();
      ctx.stroke();

      // Draw flaps
      // Left flap
      ctx.save();
      ctx.translate(-bw / 2, -bh / 2);
      ctx.rotate(box.flapLeftAngle);
      ctx.fillStyle = "#d8b28a";
      ctx.beginPath();
      ctx.rect(0, -10, bw / 2, bh / 3);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Right flap
      ctx.save();
      ctx.translate(bw / 2, -bh / 2);
      ctx.rotate(box.flapRightAngle);
      ctx.fillStyle = "#d8b28a";
      ctx.beginPath();
      ctx.rect(-bw / 2, -10, bw / 2, bh / 3);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Front flaps closed lines / tape residue
      ctx.strokeStyle = "#5c4613";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, -bh / 2 + 25);
      ctx.lineTo(0, bh / 2);
      ctx.stroke();

      // Draw tape if visible
      if (tape.opacity > 0) {
        ctx.save();
        ctx.globalAlpha = tape.opacity;
        
        // Custom tape strip
        ctx.fillStyle = "rgba(220, 175, 125, 0.9)"; // brown tape
        ctx.strokeStyle = "#80582d";
        ctx.lineWidth = 1.5;

        const tw = tape.width;
        const th = tape.height;
        const tx = -tw / 2;
        const ty = -bh / 2 + 10;

        // Draw peeled tape or regular tape
        ctx.beginPath();
        if (tape.peelProgress > 0) {
          // Tear progress cuts off parts of the tape
          const visibleWidth = tw * (1 - tape.peelProgress);
          ctx.rect(tx + tw * tape.peelProgress, ty, visibleWidth, th);
          ctx.fill();
          ctx.stroke();
          
          // Draw curled/peeling piece
          if (tape.peelProgress < 1) {
            ctx.fillStyle = "rgba(180, 135, 90, 0.95)";
            ctx.beginPath();
            ctx.ellipse(
              tx + tw * tape.peelProgress,
              ty + th / 2,
              8,
              th / 2 + 4,
              -Math.PI / 6,
              0,
              Math.PI * 2
            );
            ctx.fill();
            ctx.stroke();
          }
        } else {
          ctx.rect(tx, ty, tw, th);
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      }

      ctx.restore();
    };

    // Main animation loop
    const tick = () => {
      ctx.fillStyle = "#f5f2eb"; // Background paper tan
      ctx.fillRect(0, 0, width, height);

      // Draw background paper grain effect
      ctx.fillStyle = "rgba(0,0,0,0.015)";
      for (let i = 0; i < width; i += 4) {
        if (Math.random() > 0.5) {
          ctx.fillRect(i, 0, 1.5, height);
        }
      }

      const currentProgress = progressObj.value;

      // Update and draw scraps
      scraps.forEach((scrap) => {
        if (currentProgress > 35) {
          // Make scrap visible
          if (scrap.opacity < 1) scrap.opacity += 0.1;

          // Phase 1: Explosion & flying out of the box
          if (scrapTimeline.flyProgress < 0.45) {
            scrap.x += scrap.vx;
            scrap.y += scrap.vy;
            scrap.vy += 0.55; // gravity pulling down slightly
            scrap.rotation += scrap.rotationSpeed;
            scrap.scale = Math.min(1.0, scrap.scale + 0.05);
          } else {
            // Phase 2: Magnetized assembly into target position
            const lerpFactor = (scrapTimeline.flyProgress - 0.45) / 0.55; // 0 to 1
            const easeT = Math.min(1, Math.max(0, lerpFactor));

            // Smoothly interpolate coordinate from current flight path to target position
            // Using a spring-like or cubic easing
            const targetX = scrap.targetX;
            const targetY = scrap.targetY;

            // We interpolate
            scrap.x = gsap.utils.interpolate(scrap.x, targetX, easeT * 0.12);
            scrap.y = gsap.utils.interpolate(scrap.y, targetY, easeT * 0.12);
            scrap.rotation = gsap.utils.interpolate(scrap.rotation, 0, easeT * 0.12);
            scrap.scale = gsap.utils.interpolate(scrap.scale, 1.0, easeT * 0.12);
          }

          // Draw scrap particle
          ctx.save();
          ctx.translate(scrap.x, scrap.y);
          ctx.rotate(scrap.rotation);
          ctx.scale(scrap.scale, scrap.scale);
          ctx.globalAlpha = scrap.opacity;

          ctx.fillStyle = scrap.color;
          ctx.strokeStyle = "rgba(0, 0, 0, 0.15)";
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.moveTo(scrap.shapePoints[0].x, scrap.shapePoints[0].y);
          for (let p = 1; p < scrap.shapePoints.length; p++) {
            ctx.lineTo(scrap.shapePoints[p].x, scrap.shapePoints[p].y);
          }
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          ctx.restore();
        }
      });

      // Draw cardboard box
      const boxY = height / 2 + box.yOffset;
      if (currentProgress < 95) {
        // Fade box out at the end
        if (currentProgress > 80) {
          ctx.save();
          ctx.globalAlpha = (100 - currentProgress) / 20;
          drawBox(width / 2, boxY);
          ctx.restore();
        } else {
          drawBox(width / 2, boxY);
        }
      }

      // Draw progress tape at the bottom
      drawProgressTape(ctx, width, height, progressObj.value);

      animationFrameId = requestAnimationFrame(tick);
    };

    // Draw progress bar styled as a torn strip of tape
    const drawProgressTape = (
      c: CanvasRenderingContext2D,
      w: number,
      h: number,
      val: number
    ) => {
      c.save();
      
      const barW = 280;
      const barH = 26;
      const x = w / 2 - barW / 2;
      const y = h - 100;

      // Draw shadow for progress track
      c.fillStyle = "rgba(40, 30, 20, 0.08)";
      c.fillRect(x + 2, y + 2, barW, barH);

      // Track outline (rough craft look)
      c.fillStyle = "#e2ded4";
      c.strokeStyle = "#5c4613";
      c.lineWidth = 2;
      c.beginPath();
      c.rect(x, y, barW, barH);
      c.fill();
      c.stroke();

      // Fill bar as yellow masking tape
      if (val > 0) {
        c.save();
        // Mask to keep fill inside track
        c.beginPath();
        c.rect(x, y, barW, barH);
        c.clip();

        const fillW = barW * (val / 100);
        c.fillStyle = "#fde047"; // Yellow tape color
        c.strokeStyle = "#cca625";
        c.lineWidth = 1.5;

        // Draw torn tape strip
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x + fillW, y);
        
        // Torn edge at the end
        if (val < 100) {
          const segments = 6;
          const segmentH = barH / segments;
          for (let i = 0; i <= segments; i++) {
            const tearX = x + fillW - (i % 2 === 0 ? 3 : -3) * Math.random();
            c.lineTo(tearX, y + i * segmentH);
          }
        } else {
          c.lineTo(x + fillW, y + barH);
        }

        c.lineTo(x, y + barH);
        c.closePath();
        c.fill();
        c.stroke();

        // Write marker percentage inside progress
        c.restore();
      }

      // Percentage label text in sketch font style
      c.fillStyle = "#5c4613";
      c.font = "bold 13px Courier New, monospace";
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText(`DOSSIER OPENING: ${Math.floor(val)}%`, w / 2, y + barH / 2);

      c.restore();
    };

    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] w-screen h-screen bg-[#f5f2eb] overflow-hidden flex items-center justify-center pointer-events-auto"
      style={{ touchAction: "none" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
