'use client'
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import {MouseEvent, use, useState} from "react";
import Link from "next/link";
import {UserContext} from "@/contexts/UserContext";
import {Spinner} from "@/components/spinner";

export function NewPost() {

  const userEmail = use(UserContext).user.email;

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [postTitle, setPostTitle] = useState("");
  const [post, setPost] = useState("");

  // ['Line 1. ', <br />, 'Line 2.'];
  // const rows = post.split(/\r\n|\r|\n/g);

  // const handlePost = async (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   // http://localhost:3000  https://www.web-hack.pro
  //   const encodedTitle = encodeURIComponent(postTitle)
  //   const encodedPost = encodeURIComponent(post.split(/\r\n|\r|\n/g).join("<br />"));
  //   try {
  //     const response = await fetch(`http://localhost:3000/api/new-post?title=${encodedTitle}&content=${encodedPost}&email=${userEmail}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       // Можно добавить тело запроса, если это необходимо
  //       // body: JSON.stringify({ postTitle, convertPost, userEmail })
  //     });
  //
  //     if (response.ok) {
  //       // Обработка успешного ответа
  //       const data = await response.json();
  //       console.log(data);
  //
  //
  //     } else {
  //       // Обработка ошибки
  //       // console.log(error)
  //       alert("bad")
  //     }
  //   } catch (error) {
  //     // Обработка сетевой ошибки
  //     alert("ooops! error: "+error)
  //   }
  //   setIsLoading(false);
  //   setIsOpen(false);
  // };


  return (<>
    {isOpen ? isLoading ? <Spinner/> :
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
                      <Input
                          id="title"
                          placeholder="Enter the title"
                          value={postTitle}
                          onChange={(e) => setPostTitle(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="font-medium" htmlFor="content">
                        Content
                      </label>
                      <Textarea
                          id="content"
                          placeholder="Enter the content"
                          value={post}
                          onChange={(e) => setPost(e.target.value)}
                      />
                    </div>
                    {/*<div className="flex flex-col space-y-2">*/}
                    {/*  <label className="font-medium" htmlFor="tags">*/}
                    {/*    Tags*/}
                    {/*  </label>*/}
                    {/*  <Input id="tags" placeholder="Enter the tags" />*/}
                    {/*</div>*/}
                  </form>
                </CardContent>
              </Card>
              <div className="flex justify-between items-center mt-4">
                <Button onClick={handlePost}>Save Post</Button>
                <Button variant="outline" onClick={() => setPost("")}>Discard Changes</Button>
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
                      {postTitle}
                    </h1>
                    <div className="overflow-y-auto h-72">
                      {post.split(/\r\n|\r|\n/g).map((row, i) => <p key={i}>{row}</p>)}
                    </div>
                    {/*<p className="text-gray-500 dark:text-gray-400">*/}
                      {/*Tags: <Badge>tag1</Badge>, <Badge>tag2</Badge>*/}
                    {/*</p>*/}
                  </article>
                </CardContent>
              </Card>
            </aside>
          </main>
        </div> : <Link href="#" onClick={() => setIsOpen(true)}>New post</Link> }
  </>)
}

