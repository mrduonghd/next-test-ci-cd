export default function BlogPostPage({ params }: { params: { id: string } }) {
    return (
      <main>
        <h1>Blog Post</h1>
        <p>{params.id}</p>
      </main>
    );
  }