"use client";

import { PostInterface } from "@/constants/Post";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImagePostCard from "./ImagePostCard";

interface Props {
  data: PostInterface;
  className?: string;
}

export default function PostCard({ data, className }: Props) {
  const router = useRouter();

  const goToProfile = (e: React.MouseEvent) => {
    e.stopPropagation();

    router.push(`/${data.username}`);
  };

  const goToDetailPost = (e: React.MouseEvent) => {
    e.stopPropagation();

    // router.push(`/post/${data.id}`, );
    const query = new URLSearchParams({
      id: data.id,
      content: data.content || "",
      images: JSON.stringify(data.images || []),
    }).toString();

    router.push(`/post/${data.id}?${query}`);
  };

  return (
    <div
      className={clsx(`w-full gap-4 flex flex-col cursor-pointer`, className)}
      onClick={goToDetailPost}
    >
      <div
        className="w-fit gap-4 flex flex-row items-center cursor-pointer"
        onClick={goToProfile}
      >
        <Image
          className="aspect-square object-cover rounded-full"
          alt={data.name}
          src={data.avatar}
          width={40}
          height={40}
        />

        <div className="flex flex-col">
          <p className="text-sm font-medium">{data.name}</p>

          <p className="text-sm opacity-secondary">{`@${data.username}`}</p>
        </div>
      </div>

      <p className="text-sm">{data.content}</p>

      {data.images && (
        <div className="w-full">
          <ImagePostCard data={data} />
        </div>
      )}

      <div className="w-full flex flex-row justify-between items-center">
        <div className="gap-4 flex flex-row cursor-pointer">
          <div className="gap-2 flex flex-row items-center">
            {data.isLike ? (
              <SolidHeartIcon className="w-5 h-5 text-red-500" />
            ) : (
              <HeartIcon className="w-5 h-5 opacity-secondary" />
            )}

            <p className="text-xs opacity-secondary">124</p>
          </div>

          <div className="gap-2 flex flex-row items-center cursor-pointer">
            <ChatBubbleOvalLeftIcon className="w-5 h-5 opacity-secondary" />

            <p className="text-xs opacity-secondary">124</p>
          </div>

          <div className="gap-2 flex flex-row items-center cursor-pointer">
            {data.isBookmark ? (
              <SolidBookmarkIcon className="w-5 h-5 text-yellowPrimary" />
            ) : (
              <BookmarkIcon className="w-5 h-5 opacity-secondary" />
            )}

            <p className="text-xs opacity-secondary">124</p>
          </div>
        </div>

        <ShareIcon className="w-5 h-5 opacity-secondary cursor-pointer" />
      </div>

      <div className="w-full border-b-[1px] border-b-borderColor"></div>
    </div>
  );
}
