"use client";

import { navigationList } from "@/constants/navigationList";
import useScreenWidth from "@/libs/useScreenWidth";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export default function Sidebar({ className }: Props) {
  const pathname = usePathname();
  const sw = useScreenWidth();

  return (
    <div
      className={clsx(
        `w-[72px] xl:w-[140px] h-screen border-r-2 border-r-[#444444] fixed top-0 left-0 hidden md:flex`,
        className
      )}
    >
      <div className="w-full h-full p-2 overflow-y-auto flex flex-col items-center">
        <p
          className={clsx(`mt-8 font-semibold text-yellowPrimary`, {
            "text-xl": sw > 1280,
            "text-3xl": sw < 1280,
          })}
        >
          {sw > 1280 ? `srawung` : `s`}
        </p>

        <ul className="mt-20 gap-12 font-medium flex flex-col">
          {navigationList.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link
                className="gap-4 flex flex-row items-center"
                key={item.id}
                href={item.link}
              >
                {isActive ? (
                  <item.filledIcon
                    className={clsx(
                      `h-7 w-7 flex items-center justify-center`,
                      {
                        "text-yellowPrimary": isActive,
                      }
                    )}
                    aria-hidden="true"
                  />
                ) : (
                  <item.outlineIcon
                    className={clsx(`h-7 w-7 flex items-center justify-center`)}
                    aria-hidden="true"
                  />
                )}

                {sw > 1280 && (
                  <p
                    className={clsx(`text-md`, {
                      "text-yellowPrimary": isActive,
                    })}
                  >
                    {item.label}
                  </p>
                )}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
