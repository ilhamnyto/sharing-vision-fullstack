import Blog from "@/components/Blog";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <h1 className="text-xs text-slate-400 border-l-4 pl-2 border-l-slate-300 mb-4">
        Preview
      </h1>

      <div className="flex flex-col gap-2">
        <Blog />
      </div>
    </div>
  );
}
