import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function LinkedIn() {
    return (
        <Button
            variant="outline"
            size="icon"
            className="border-none bg-transparent shadow-none"
            asChild
        >
            <Link href="https://www.linkedin.com/in/damian-o-connor-20825a265/" target="_blank">
                <LinkedInLogoIcon className="h-4 w-4 fill-white" />
                <span className="sr-only">GitHub profile</span>
            </Link>
        </Button>
    );
}
