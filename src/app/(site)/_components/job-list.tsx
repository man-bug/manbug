import React from "react";
import { jobs } from "./_content";
import Link from "next/link";
import { CalendarIcon } from "@radix-ui/react-icons";

export default function JobList() {
    return (
        <article className="mx-auto py-4 space-y-4">
            <h3 className="text-primary/85 font-mono text-lg leading-none">
                experience
            </h3>

            <div className="space-y-3">
                {jobs.map((job, idx) => (
                    <Link href={job.link} key={idx} className="space-y-1 block group py-1">
                        <div className="flex flex-col">
                            <h3 className="font-medium tracking-tight leading-none group-hover:underline underline-offset-4 font-serif">
                                {job.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                {job.position}
                            </p>
                            <p className="flex items-center gap-1 mt-0.5 font-mono text-xs text-muted-foreground">
                                <CalendarIcon className="h-3 w-3" />
                                {job.timeline}
                            </p>
                        </div>
                        <p className="text-primary/85 text-sm flex items-center gap-2 tracking-wide">
                            &bull; {job.description}
                        </p>
                    </Link>
                ))}
            </div>
        </article>
    )
}
