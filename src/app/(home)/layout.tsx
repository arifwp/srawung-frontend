"use client";

import BottomNavigation from "@/components/navigations/BottomNavigation";
import Sidebar from "@/components/navigations/Sidebar";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function HomeLayout({ className, children }: Props) {
  const pathname = usePathname();

  const showBottomNavigation = [
    "/home",
    "/profile",
    "/message",
    "/explore",
  ].includes(pathname);

  return (
    <div className="w-full h-full flex flex-row items-start">
      <Sidebar />

      {/* <div className="w-full h-full ml-auto md:max-w-sidebar-mobile xl:max-w-sidebar-desktop">
        {children}
      </div> */}

      <div className="w-full h-full mx-auto md:max-w-sidebar-md lg:max-w-sidebar-lg xl:max-w-sidebar-xl">
        <div
          className={clsx(
            `w-full h-full mx-auto max-w-4xl md:max-w-xl`,
            className
          )}
        >
          {children}
        </div>
      </div>

      {showBottomNavigation && <BottomNavigation />}
    </div>
  );
}
