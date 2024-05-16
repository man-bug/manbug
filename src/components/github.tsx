import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function Github() {
    return (
        <Button
            variant="outline"
            size="icon"
            className="border-none bg-transparent shadow-none"
            asChild
        >
            <Link href="https://github.com/man-bug" target="_blank">
                <GitHubLogoIcon className="h-4 w-4" />
                <span className="sr-only">GitHub profile</span>
            </Link>
        </Button>
    );
}
