"use client"
import React from 'react';

export const CursorVisibilityContext = React.createContext({
    isVisible: false,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isMouseDown: false,
    setIsMouseDown: React.Dispatch<React.SetStateAction<boolean>>,
});

export default function CursorVisibilityProvider({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isMouseDown, setIsMouseDown] = React.useState(false);

    return (
        <CursorVisibilityContext.Provider value={{ isVisible, setIsVisible, isMouseDown, setIsMouseDown }}>
            {children}
        </CursorVisibilityContext.Provider>
    );
};


