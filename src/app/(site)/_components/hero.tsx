import Github from "@/components/github";
import LinkedIn from "@/components/linked-in";
import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

export default function Hero() {
    return (
        <div className="relative">
            <h1 className="text-xl font-bold -tracking-[0.5px] lg:text-2xl flex items-center gap-1.5 font-serif">manbug</h1>
            <span className="text-pretty mt-1.5 text-muted-foreground sm:text-base tracking-wide">i bring ideas to life through elegant, responsive web solutions; one pixel at a time.</span>
            <div className="space-x-1 mt-1">
                <LinkedIn />
                <Github />
                <ModeToggle />
            </div>
        </div>
    )
}
