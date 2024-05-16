"use client"
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import { projects } from "./_content";
import LinkCursor from "@/components/link-cursor";
import { CursorVisibilityContext } from "@/context/useCursorVisibility";
import { cn } from "@/lib/utils";

export default function ProjectList() {
    const { setIsVisible, isVisible, setIsMouseDown } = React.useContext(CursorVisibilityContext);

    return (
        <article draggable={false} className="mx-auto py-4 space-y-4">
            <h3 className="text-primary/85 font-mono text-lg leading-none">
                projects
            </h3>

            <ul>
                {projects.map((project, idx) => (
                    <li key={idx} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                        <Link
                            draggable={false}
                            onMouseDown={() => setIsMouseDown(true)}
                            onMouseUp={() => setIsMouseDown(false)}
                            onMouseOut={() => setIsMouseDown(false)}
                            href={project.link}
                            className={cn("flex flex-col gap-1 group py-2", isVisible && "!cursor-none")}
                        >
                            <Badge variant="outline" className="font-medium w-fit px-1.5 group-hover:bg-accent font-serif">
                                {project.title}
                            </Badge>
                            <p className="text-muted-foreground">
                                {project.description}
                            </p>
                        </Link>
                    </li>
                ))}

                <LinkCursor />
            </ul>
        </article>
    )
}
