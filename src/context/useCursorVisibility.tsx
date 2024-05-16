"use client"
import React from 'react';

type CursorVisibilityContextProps = {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isMouseDown: boolean,
    setIsMouseDown: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CursorVisibilityContext = React.createContext<CursorVisibilityContextProps | undefined>(undefined);

export default function CursorVisibilityProvider({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isMouseDown, setIsMouseDown] = React.useState(false);

    return (
        <CursorVisibilityContext.Provider value={{ isVisible, setIsVisible, isMouseDown, setIsMouseDown }}>
            {children}
        </CursorVisibilityContext.Provider>
    );
};

// hook
export function useCursorVisibility() {
    const ctx = React.useContext(CursorVisibilityContext);
    if (!ctx) throw new Error("useCursorVisibility needs to be wrapped in CursorVisibilityProvider");
    return ctx
};

