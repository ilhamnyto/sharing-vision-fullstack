"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function PostForm({ method }) {
  const pathname = usePathname().split("/");

  const { toast } = useToast();
  const [data, setData] = useState({
    title: "",
    content: "",
    category: "",
    status: "draft",
    isLoading: false,
  });

  useEffect(() => {
    if (method == "PATCH") {
      fetch(`http://localhost:8080/api/v1/article/${pathname[2]}`)
        .then((res) => res.json())
        .then((article) => {
          setData({
            title: article.data.title,
            content: article.data.content,
            category: article.data.category,
            status: article.data.status,
          });
        });
    }
  }, []);

  const changeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    setData((prev) => {
      return { isLoading: true, ...prev };
    });

    e.preventDefault();
    let url = "";

    if (method == "PATCH") {
      url = `http://localhost:8080/api/v1/article/${pathname[2]}`;
    } else {
      url = "http://localhost:8080/api/v1/article";
    }

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          toast({
            title: "Error",
            description: data.message,
          });
          return;
        }

        toast({
          title: "Success",
          description: data.message,
        });

        if (method == "POST") {
          setData({
            title: "",
            content: "",
            category: "",
            status: "draft",
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  return (
    <form onSubmit={submitHandler} className="space-y-3">
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="title" className="text-sm">
          Title
        </label>
        <input
          type="text"
          className="py-2 px-3 text-sm drop-shadow-sm rounded-sm"
          name="title"
          placeholder="Post title..."
          onChange={changeHandler}
          value={data.title}
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="content" className="text-sm">
          Content
        </label>
        <textarea
          name="content"
          cols="30"
          rows="15"
          placeholder="Content..."
          onChange={changeHandler}
          value={data.content}
          className="py-2 px-3 text-sm drop-shadow-sm rounded-sm"
          required
        ></textarea>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="category" className="text-sm">
          Category
        </label>
        <input
          type="text"
          className="py-2 px-3 text-sm drop-shadow-sm rounded-sm"
          name="category"
          onChange={changeHandler}
          value={data.category}
          placeholder="category..."
          required
        />
      </div>
      <div>
        <div className="p-1 bg-slate-200 max-w-40 flex gap-1">
          <button
            type="button"
            className={`${
              data.status == "draft"
                ? "bg-yellow-400 font-bold"
                : "bg-slate-100 text-slate-300"
            } cursor-pointer flex-1 text-sm text-center py-2`}
            value="draft"
            name="status"
            onClick={changeHandler}
          >
            Draft
          </button>
          <button
            type="button"
            className={`${
              data.status == "publish"
                ? "bg-green-400 font-bold"
                : "bg-slate-100 text-slate-300"
            } cursor-pointer flex-1 text-sm text-center py-2`}
            onClick={changeHandler}
            value="publish"
            name="status"
          >
            Publish
          </button>
        </div>
      </div>
      <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 py-3 text-sm rounded text-white">
        Submit
      </button>
    </form>
  );
}
