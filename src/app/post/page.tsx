import Link from "next/link";

export default function PostPage() {
  return (
    <main>
      <h1>The Post</h1>
      <p>
        <Link href="/post/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/post/post-2">Post 2</Link>
      </p>
    </main>
  )
}
