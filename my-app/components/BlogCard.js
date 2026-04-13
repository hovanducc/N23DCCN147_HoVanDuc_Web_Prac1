export default function BlogCard({ post }) {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col">
   
      <span className="text-xs text-indigo-500 font-semibold uppercase">
        Tech
      </span>

      <h2 className="font-bold text-lg mt-2 mb-2 line-clamp-2">
        {post.title}
      </h2>

      <p className="text-gray-500 text-sm line-clamp-3 mb-4">
        {post.body}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-sm text-gray-400">
          User #{post.userId}
        </span>

        <a
          href={`/blog/${post.id}`}
          className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-indigo-700"
        >
          Read More
        </a>
      </div>
    </div>
  );
}