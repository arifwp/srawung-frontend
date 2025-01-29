import { PostInterface } from "@/constants/Post";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  data: PostInterface;
  className?: string;
}

export default function ImagePostCard({ data, className }: Props) {
  if (!data.images) {
    return;
  }

  return (
    <div
      className={clsx(
        `w-full h-[280px] gap-1 overflow-clip`,
        {
          "grid grid-cols-2 grid-rows-4": data.images.length === 3,
          "grid grid-cols-2 grid-rows-2": data.images.length === 4,
          "grid grid-cols-2": data.images.length === 2,
        },
        className
      )}
    >
      <div
        className={clsx(`relative w-full h-full aspect-square overflow-clip`, {
          "rounded-tl-lg": data.images.length === 4,
          "row-span-4 rounded-l-lg": data.images.length === 3,
          "rounded-l-lg": data.images.length === 2,
          "rounded-lg": data.images.length === 1,
        })}
      >
        <Image
          className={clsx(`h-full`, {
            "w-full object-cover": data.images.length > 1,
            "w-fit object-cover rounded-lg": data.images.length === 1,
          })}
          alt={data.content || data.name}
          src={data.images[0]}
          fill
        />
      </div>

      {data.images[1] && (
        <div
          className={clsx(`relative w-full h-full overflow-hidden`, {
            "rounded-tr-lg": data.images.length === 4,
            "row-span-2 rounded-tr-lg": data.images.length === 3,
            "rounded-r-lg": data.images.length === 2,
          })}
        >
          <Image
            className="w-full h-full object-cover"
            alt={data.content || data.name}
            src={data.images[1]}
            fill
          />
        </div>
      )}

      {data.images[2] && (
        <div
          className={clsx(`relative w-full h-full overflow-hidden`, {
            "rounded-bl-lg": data.images.length === 4,
            "row-span-2 rounded-br-lg": data.images.length === 3,
          })}
        >
          <Image
            className="w-full h-full object-cover"
            alt={data.content || data.name}
            src={data.images[2]}
            fill
          />
        </div>
      )}

      {data.images[3] && (
        <div
          className={clsx(`relative w-full h-full overflow-hidden`, {
            "rounded-br-lg": data.images.length === 4,
          })}
        >
          <Image
            className="w-full h-full object-cover"
            alt={data.content || data.name}
            src={data.images[3]}
            fill
          />
        </div>
      )}
    </div>
  );
}
