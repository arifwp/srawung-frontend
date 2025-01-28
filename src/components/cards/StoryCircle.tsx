import Image from "next/image";
import { StoryInterface } from "../navigations/Story";
import clsx from "clsx";

interface Props {
  data: StoryInterface;
  className?: string;
}

export default function StoryCircle({ data, className }: Props) {
  return (
    <div className={clsx(`w-fit gap-2 flex flex-col`, className)}>
      <div
        className={clsx(`w-[60px] h-[60px] relative rounded-full border-2 `, {
          "border-yellowPrimary": data.isRead === 0,
          "border-darkSecondary": data.isRead === 1,
        })}
      >
        <Image
          className="p-1 object-cover rounded-full aspect-square"
          src={data.thumbnail}
          alt={data.name}
          fill
        />
      </div>

      <p className="text-xs text-center">{data.name}</p>
    </div>
  );
}
