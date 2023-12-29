import React from 'react';
import Link from "next/link";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";

const Page = () => {
    return (
        <main className="flex flex-row justify-between px-4 py-6 md:px-6 md:py-12 lg:py-16">
            <section className="w-3/4 space-y-4 bg-slate-200">

            </section>
            <aside className="w-1/4 space-y-4 px-2">
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-bold">About Me</h2>
                    </CardHeader>
                    <CardContent>
                        <Avatar size="large" src="/placeholder.svg?height=100&width=100" />
                        <p>Hi, I'm a blogger. This is my blog where I write about various topics that interest me.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-bold">Categories</h2>
                    </CardHeader>
                    <CardContent>
                        <Badge>Category One</Badge>
                        <Badge>Category Two</Badge>
                    </CardContent>
                </Card>
            </aside>
        </main>
    );
};

export default Page;