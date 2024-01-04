import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function Main() {
  return (
      <main className="flex flex-row justify-between px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <section className="w-3/4 space-y-4">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Blog Post One</h2>
              <p className="text-gray-500 dark:text-gray-400">Posted on January 1, 2023</p>
            </CardHeader>
            <CardContent>
              <p>This is an excerpt from the first blog post. Click the button below to read more.</p>
              <Button size="sm" variant="outline">
                <Link href="#">Read More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Blog Post Two</h2>
              <p className="text-gray-500 dark:text-gray-400">Posted on February 1, 2023</p>
            </CardHeader>
            <CardContent>
              <p>This is an excerpt from the second blog post. Click the button below to read more.</p>
              <Button size="sm" variant="outline">
                <Link href="#">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
        <aside className="w-1/4 space-y-4 px-2">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">About Me</h2>
            </CardHeader>
            <CardContent>
              {/*<Avatar size="large" src="/placeholder.svg?height=100&width=100" />*/}
              <p>Hi, I m a frontend developer. This is my blog where I write about various topics that interest me.</p>
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
  )
}
