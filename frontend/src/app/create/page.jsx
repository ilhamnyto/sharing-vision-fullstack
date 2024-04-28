import PostForm from "@/components/PostForm";

export default function page() {
  return (
    <div className="w-full">
      <h1 className="text-xs text-slate-400 border-l-4 pl-2 border-l-slate-300 mb-4">
        Create Post
      </h1>

      <div>
        <PostForm />
      </div>
    </div>
  );
}
