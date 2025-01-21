"use client";

import useScreenWidth from "@/libs/useScreenWidth";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  const sw = useScreenWidth();
  return (
    <div className="w-full h-full min-h-dvh bg-black flex flex-col md:flex-row">
      {sw > 768 && (
        <div className="flex flex-1 justify-center items-center overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              fill
              className="object-cover"
              src="/images/social-friends.webp"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      )}

      <div className="min-h-dvh p-12 flex flex-1 bg-darkPrimary">
        {children}
      </div>
    </div>
  );
}
