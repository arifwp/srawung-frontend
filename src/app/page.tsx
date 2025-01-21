"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreenPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/auth/register");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full min-h-dvh bg-black flex justify-center items-center">
      <p className="text-4xl md:text-xl text-greenPrimary font-bold">srawung</p>
    </div>
  );
}
