export const dynamicParams = false;

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  // TODO: thay thế bằng dữ liệu thực, ví dụ: fetch danh sách post IDs
  return [];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{id}</p>
    </main>
  );
}