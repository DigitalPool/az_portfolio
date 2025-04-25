"use client";

import { useEffect, useState } from "react";
import React from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return;

    // Don't initialize cursor logic if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isText = 
          target.tagName === 'P' || 
          target.tagName === 'H1' || 
          target.tagName === 'H2' || 
          target.tagName === 'H3' || 
          target.tagName === 'H4' || 
          target.tagName === 'H5' || 
          target.tagName === 'H6' || 
          target.tagName === 'SPAN' || 
          target.tagName === 'A' ||
          target.tagName === 'DIV' ||
          target.tagName === 'BUTTON';

      setIsHoveringText(isText);
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  // Don't render cursor if touch device or during SSR
  if (isTouchDevice || typeof window === 'undefined') {
    return null;
  }

  const cursorSize = isHoveringText ? 300 : 32;
  const cursorBackgroundColor = isHoveringText ? "#dd524c" : "#dd524c";

  return (
    <div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-[width,height] duration-300 ease-in-out mix-blend-difference"
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        color: "black",
        backgroundColor: `${cursorBackgroundColor}`,
        transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
      }}>
    </div>
  );
}