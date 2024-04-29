"use client";

import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function Blog() {
  const [datas, setDatas] = useState([]);
  const [meta, setMeta] = useState({ page: 1, totalPage: 1 });

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/article?status=publish&limit=5")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data);
        setMeta((prev) => {
          let totalPage = 0;
          if (data.meta.total % 5 > 0) {
            totalPage = Math.floor(data.meta.total / 5) + 1;
          } else if (data.meta.total % 5 == 0 && data.meta.total / 5 == 0) {
            totalPage = 1;
          }
          return { ...prev, totalPage: totalPage };
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const changePageHandler = (page) => {
    fetch(
      `http://localhost:8080/api/v1/article?status=publish&limit=5&offset=${
        (page - 1) * 5
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data);
        setMeta((prev) => {
          return { ...prev, page };
        });
      });
  };

  if (datas.length == 0) {
    return <div className="text-center">no published article...</div>;
  }

  return (
    <div className="space-y-2">
      {datas.map((data, index) => (
        <div className="bg-white py-4 px-3 gap-2 drop-shadow-md" key={index}>
          <div className="flex justify-between">
            <span className="font-bold text-lg">{data.title}</span>
            <span className="text-slate-500 italic">{data.category}</span>
          </div>
          <p className="text-sm">{data.content}</p>
        </div>
      ))}

      <Pagination
        currentPage={meta.page}
        totalPage={meta.totalPage}
        changePageHandler={changePageHandler}
      />
    </div>
  );
}
