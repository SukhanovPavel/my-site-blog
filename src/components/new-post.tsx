'use client'
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import {MouseEvent, useState} from "react";
import Link from "next/link";

export function NewPost() {

  const [isOpen, setIsOpen] = useState(false);


  return (<>
    {isOpen ?
        <div
          className="bg-black/50 flex justify-center fixed top-0 left-0 right-0 bottom-0 pt-4 pb-4"
          onClick={(e: MouseEvent<HTMLDivElement>) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <main className="bg-gray-700 w-3/4 flex flex-col lg:flex-row gap-6 px-6 py-4">
            <section className="flex-grow">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Create/Edit Blog Post</h2>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <label className="font-medium" htmlFor="title">
                        Title
                      </label>
                      <Input id="title" placeholder="Enter the title" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="font-medium" htmlFor="content">
                        Content
                      </label>
                      <Textarea id="content" placeholder="Enter the content" />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="font-medium" htmlFor="tags">
                        Tags
                      </label>
                      <Input id="tags" placeholder="Enter the tags" />
                    </div>
                  </form>
                </CardContent>
              </Card>
              <div className="flex justify-between items-center mt-4">
                <Button>Save Post</Button>
                <Button variant="outline">Discard Changes</Button>
              </div>
            </section>
            <aside className="flex-grow">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Preview</h2>
                </CardHeader>
                <CardContent>
                  <article className="prose prose-gray mx-auto dark:prose-invert">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
                      Title goes here
                    </h1>
                    <p>Content goes here</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {/*Tags: <Badge>tag1</Badge>, <Badge>tag2</Badge>*/}
                    </p>
                  </article>
                </CardContent>
              </Card>
            </aside>
          </main>
        </div> : <Link href="#" onClick={() => setIsOpen(true)}>New post</Link> }
  </>)
}
