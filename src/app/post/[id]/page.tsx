"use client";

import { useSearchParams } from "next/navigation";

export default function PostPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const content = searchParams.get("content");
  const images = JSON.parse(searchParams.get("images") || "[]");

  return (
    <div className="w-full flex flex-col">
      <p>page post {id}</p>
      <p>page post {content}</p>
      <p>page post {images}</p>
    </div>
  );
}
