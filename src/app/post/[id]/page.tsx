export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
      <main>
        <h1>Blog Post</h1>
        <p>{id}</p>
      </main>
    );
  }