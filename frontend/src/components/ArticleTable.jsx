"use client";

import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "./Pagination";

export default function ArticleTable({ status }) {
  const { toast } = useToast();
  const [datas, setDatas] = useState([]);
  const [meta, setMeta] = useState({ page: 1, totalPage: 1 });

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/article?status=${status}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data);
        console.log(Math.floor(data.meta.total, 5));
        setMeta((prev) => {
          let totalPage = 0;
          if (data.meta.total % 5 > 0) {
            totalPage = Math.floor(data.meta.total / 5) + 1;
          } else if (data.meta.total % 5 == 0 && data.meta.total / 5 == 0) {
            totalPage = 1;
          }
          console.log(totalPage);
          return { ...prev, totalPage: totalPage };
        });
      });
  }, []);

  const changePageHandler = (page) => {
    fetch(
      `http://localhost:8080/api/v1/article?status=${status}&limit=5&offset=${
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

  const deleteArticle = (data) => {
    data.status = "trash";

    fetch(`http://localhost:8080/api/v1/article/${data.id}`, {
      method: "PATCH",
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
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });

    setDatas((prev) => prev.filter((el) => el.id != data.id));
  };

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
                      {(meta.page - 1) * 5 + index + 1}.
                    </TableCell>
                    <TableCell>{data.title}</TableCell>
                    <TableCell>{data.content}</TableCell>
                    <TableCell className="text-center">
                      {data.category}
                    </TableCell>
                    <TableCell>
                      {status != "trash" && (
                        <div className="flex gap-2 items-center px-3">
                          <Link href={`/edit/${data.id}`}>
                            <Pencil2Icon className="w-5 h-5 cursor-pointer" />
                          </Link>
                          <TrashIcon
                            className="w-6 h-6 cursor-pointer bg-red-500 p-1 rounded text-white"
                            onClick={() => deleteArticle(data)}
                          />
                        </div>
                      )}
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
        <Pagination
          currentPage={meta.page}
          totalPage={meta.totalPage}
          changePageHandler={changePageHandler}
        />
      </div>
    </>
  );
}
