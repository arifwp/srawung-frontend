import { InteractPeopleInterface } from "@/constants/InteractPeople";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  data: InteractPeopleInterface;
  className?: string;
}

export default function InteractPeopleCard({
  data,
  className,
  ...rest
}: Props) {
  return (
    <div
      className={clsx(
        `w-full p-2 gap-4 flex flex-row justify-between items-center rounded-lg hover:bg-darkSecondary overflow-x-clip`,
        {
          className,
        }
      )}
      {...rest}
    >
      <div className="w-full gap-3 flex flex-row items-center">
        <Image
          className="rounded-full aspect-square object-cover"
          src={data.avatar}
          height={40}
          width={40}
          alt={data.name}
        />

        <div className="flex flex-col">
          <p className="text-sm font-semibold">{data.name}</p>

          <p className="text-xs opacity-secondary line-clamp-1">{data.bio}</p>
        </div>
      </div>

      <button className="w-[120px] h-[28px] bg-yellowPrimary rounded-full text-darkPrimary font-medium flex flex-row justify-center items-center cursor-pointer">
        Ikuti
      </button>
    </div>
  );
}
