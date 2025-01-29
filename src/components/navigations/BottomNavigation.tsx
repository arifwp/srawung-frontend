"use client";

import { navigationList } from "@/constants/navigationList";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export default function BottomNavigation({ className = "", ...rest }: Props) {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        `w-full h-[60px] p-2 mx-auto bg-darkSecondary justify-evenly items-center gap-4 fixed bottom-0 flex md:hidden`,
        className
      )}
      {...rest}
    >
      {navigationList.map((item) => {
        const isActive = pathname === item.link;

        return (
          <Link
            key={item.id}
            href={item.link}
            className={clsx(
              `w-[46px] h-[46px] font-medium flex justify-center items-center rounded-full`,
              ""
            )}
          >
            {isActive ? (
              <item.filledIcon
                className={clsx(`h-7 w-7 flex items-center justify-center`, {
                  "text-yellowPrimary": isActive,
                })}
                aria-hidden="true"
              />
            ) : (
              <item.outlineIcon
                className={clsx(`h-7 w-7 flex items-center justify-center`)}
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
