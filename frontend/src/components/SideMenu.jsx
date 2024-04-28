"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 bg-white drop-shadow-md w-44 h-screen py-4 flex flex-col">
      <Link
        className={`px-4 py-2 ${pathname == "/" && "bg-blue-200 font-bold"}`}
        href="/"
      >
        Posts
      </Link>
      <Link
        className={`px-4 py-2 ${
          pathname == "/create" && "bg-blue-200 font-bold"
        }`}
        href="/create"
      >
        Create Post
      </Link>
      <Link
        className={`px-4 py-2 ${
          pathname == "/preview" && "bg-blue-200 font-bold"
        }`}
        href="/preview"
      >
        Preview
      </Link>
    </div>
  );
}
