"use client";
import { CursorVisibilityContext } from '@/context/useCursorVisibility';
import { cn } from '@/lib/utils';
import React from 'react';
import { PiArrowUpRight } from 'react-icons/pi';

export default function LinkCursor() {
    const { isVisible, setIsVisible, isMouseDown } = React.useContext(CursorVisibilityContext);
    const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const showCursor = () => setIsVisible(true);
        const hideCursor = () => setIsVisible(false);

        window.addEventListener('mousemove', updateCursorPosition);
        window.addEventListener('mouseenter', showCursor);
        window.addEventListener('mouseleave', hideCursor);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            window.removeEventListener('mouseenter', showCursor);
            window.removeEventListener('mouseleave', hideCursor);
        };
    }, []);

    return (
        <div
            className={cn("fixed pointer-events-none rounded-full bg-[#F9B15D] transition-[width,height,opacity,transform] duration-300 -translate-x-1/2 -translate-y-1/2 grid place-items-center",
                isVisible ? "scale-100 opacity-100 shadow" : "opacity-0 scale-50",
                isMouseDown ? "h-6 w-6" : "h-8 w-8"
            )}
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
        >
            <div className={cn(isMouseDown ? "absolute inset-0 w-full h-full opacity-95 rounded-full opacity-100 transition-opacity" : "opacity-0")} />
            <PiArrowUpRight className={cn("transition-[width,height] duration-300 text-black absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2", isMouseDown ? "h-3 w-3" : "h-4 w-4")} />
        </div>
    );
}
