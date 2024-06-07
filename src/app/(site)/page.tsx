import React from "react";
import Hero from "./_components/hero";
import ProjectList from "./_components/project-list";
import JobList from "./_components/job-list";
import BlogBadge from "@/components/blog-badge";

export default function Home() {
    return (
        <div className="container">
            <main className="flex min-h-screen flex-col py-8 md:py-16 lg:py-20 max-w-[960px] mx-auto relative">
                <Hero />
                <section className="w-full mt-4">
                    <hr />
                    <ProjectList />
                    <hr />
                    <JobList />
                </section>
                <BlogBadge className="fixed bottom-8 right-8" />
            </main>
        </div>
    );
}
