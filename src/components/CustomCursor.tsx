import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

type CursorState = "default" | "draggable" | "clickable";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Keep track of current mouse coordinates
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide native cursor if possible (can be overridden selectively)
    const style = document.createElement("style");
    style.innerHTML = `
      @media (hover: hover) and (pointer: fine) {
        body, a, button, [role="button"], .cursor-pointer, .draggable {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Render loop for smooth cursor tracking (0.1s lerp)
    let animationFrameId: number;
    
    const updatePosition = () => {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      
      // 0.15 lerp factor for butter-smooth movement
      pos.current.x += dx * 0.15;
      pos.current.y += dy * 0.15;

      if (cursorRef.current) {
        // Offset cursor so pivot point is centered (scissors tip/pivot or tape center)
        const offset = cursorState === "default" ? -12 : -16;
        cursorRef.current.style.transform = `translate3d(${pos.current.x + offset}px, ${pos.current.y + offset}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    updatePosition();

    // Hover state detectors
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if inside a link, button, or clickable tab
      const isClickable = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[role='button']") || 
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer");

      // Check if inside a draggable or physics badge element
      const isDraggable = 
        target.closest(".draggable") || 
        target.closest(".physics-badge") || 
        target.classList.contains("draggable") || 
        target.closest(".portrait-card");

      if (isDraggable) {
        setCursorState("draggable");
      } else if (isClickable) {
        setCursorState("clickable");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorState, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[10000] transition-transform duration-[0.05s] ease-out will-change-transform hidden md:block"
      style={{
        transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`,
      }}
    >
      {cursorState === "default" && (
        // SCISSORS CURSOR
        <div className="relative w-8 h-8">
          {/* Scissors pivot center */}
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#5c4613] rounded-full -translate-x-1/2 -translate-y-1/2 z-30" />
          
          {/* Left Blade */}
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            className="absolute origin-[14px_9px]"
            style={{
              top: "2px",
              left: "-2px",
              transform: `rotate(${isMouseDown ? "-15deg" : "8deg"})`,
              transition: "transform 0.08s ease-out",
            }}
          >
            {/* Handle ring */}
            <circle cx="6" cy="9" r="4.5" stroke="#5c4613" strokeWidth="2.5" fill="none" />
            {/* Blade */}
            <path d="M12 9 L28 9 L15 11 Z" fill="#d1ccc0" stroke="#5c4613" strokeWidth="1.5" />
          </svg>

          {/* Right Blade */}
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            className="absolute origin-[14px_9px]"
            style={{
              top: "2px",
              left: "-2px",
              transform: `rotate(${isMouseDown ? "15deg" : "-8deg"}) scaleY(-1)`,
              transition: "transform 0.08s ease-out",
            }}
          >
            {/* Handle ring */}
            <circle cx="6" cy="9" r="4.5" stroke="#5c4613" strokeWidth="2.5" fill="none" />
            {/* Blade */}
            <path d="M12 9 L28 9 L15 11 Z" fill="#d1ccc0" stroke="#5c4613" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      {cursorState === "draggable" && (
        // MASKING TAPE CURSOR (Draggable states)
        <div
          className="w-10 h-5 bg-[#fef08a] border border-[#eab308] opacity-90 shadow-sm"
          style={{
            transform: `rotate(-15deg) scale(${isMouseDown ? 0.9 : 1.1})`,
            transition: "transform 0.1s ease-out",
            backgroundImage: "repeating-linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(234, 179, 8, 0.1) 4px, transparent 4px, transparent 8px)",
            borderRadius: "1px",
          }}
        />
      )}

      {cursorState === "clickable" && (
        // THUMBTACK / PUSH PIN CURSOR (Links & buttons)
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
          style={{
            transform: `rotate(-30deg) scale(${isMouseDown ? 0.85 : 1.0})`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* Thumbtack / Pushpin layout */}
          <path d="M12 17v5M9 8h6M12 8V2M5 8c0-3 3-5 7-5s7 2 7 5H5zM8 8c0 5 2 9 4 9s4-4 4-9H8z" fill="#f87171" stroke="#5c4613" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
}
