import Link from "next/link";
import Header from "@/components/Header"; 

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetail({ params }) {

  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Đang tải bài viết...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <Header />

      <main className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-sm rounded-xl">

        <article>
          <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="text-lg text-gray-700 leading-relaxed mb-10">
            {post.body}
          </div>
        </article>

        <div className="border-t pt-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            <span className="mr-2">←</span> Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
}