
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header"; 

async function getPosts(): Promise<any[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-100">

      <Header /> 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {posts.slice(0, 12).map((post: any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}