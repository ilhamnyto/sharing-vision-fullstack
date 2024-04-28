"use client";

import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

export default function ArticleTable({ status }) {
  const [datas, setDatas] = useState([]);
  const [meta, setMeta] = useState({ page: 1, totalPage: 1 });

  useEffect(() => {
    console.log(status);
    fetch(`http://localhost:8080/api/v1/article?status=${status}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data);
        setMeta((prev) => {
          return { ...prev, totalPage: Math.floor(data.meta.total, 5) };
        });
      });
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="rounded-lg border mt-3 bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {datas.length ? (
                datas.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-center">
                      {index + 1}.
                    </TableCell>
                    <TableCell>{data.title}</TableCell>
                    <TableCell>{data.content}</TableCell>
                    <TableCell className="text-center">
                      {data.category}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2 items-center px-3">
                        <Pencil2Icon className="w-5 h-5 cursor-pointer" />
                        <TrashIcon className="w-6 h-6 cursor-pointer bg-red-500 p-1 rounded text-white" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    className="font-medium text-center w-full"
                    colSpan={5}
                  >
                    no data...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            
          </Table>
        </div>
      </div>
    </>
  );
}
