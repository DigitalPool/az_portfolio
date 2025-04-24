"use client";

import { useEffect, useState } from "react";
import React from 'react'

export default function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHoveringText, setIsHoveringText] = useState(false)
    const [isHoveringAnchor, setIsHoveringAnchor] = useState(false)

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY })

        const target = e.target as HTMLElement
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
            target.tagName === 'BUTTON'

        const isAnchor = target.tagName === 'A'
        const isButton = target.tagName === 'BUTTON'
        
        setIsHoveringText(isText)
        setIsHoveringAnchor(isAnchor || isButton)
    }

		document.addEventListener("mousemove", moveCursor)
		return () => document.removeEventListener("mousemove", moveCursor)
	}, [])

    const cursorSize = isHoveringText ? 300 : 32;
    const cursorBackgroundColor = isHoveringText ? "#dd524c" : "#dd524c";
    const offset = cursorSize / 2;


	return (
		<div
			className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-[width,height] duration-300 ease-in-out mix-blend-difference"
			style={{
                width: `${cursorSize}px`,
                height: `${cursorSize}px`,
                color: "black",
                backgroundColor: `${cursorBackgroundColor}`,
				// border: "2px solid white",
                transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
			}}>
		</div>
	)
}

