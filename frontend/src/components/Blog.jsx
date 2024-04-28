"use client";

import React, { useEffect, useState } from "react";

export default function Blog() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/article?status=publish&limit=5")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data);
      });
  }, []);

  return datas.map((data) => (
    <div className="bg-white py-4 px-3 gap-2">
      <div className="flex justify-between">
        <span className="font-bold text-lg">{data.title}</span>
        <span className="text-slate-500 italic">{data.category}</span>
      </div>
      <p className="text-sm">{data.content}</p>
    </div>
  ));
}
