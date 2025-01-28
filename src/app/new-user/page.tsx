"use client";

import InteractPeopleCard from "@/components/cards/InteractPeopleCard";
import {
  dummyInteractPeople,
  InteractPeopleInterface,
} from "@/constants/InteractPeople";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const goToHome = () => {
    router.replace("/home");
  };

  return (
    <div className="w-full h-full max-h-screen max-w-md mx-auto pt-4 px-4 flex flex-col items-center relative overflow-y-auto">
      <div className="w-full">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
          Mulai berinteraksi
        </h1>

        <p className="text-sm md:text-md opacity-secondary text-center">
          Ikuti orang yang mungkin anda kenal dan anda bisa berinteraksi
        </p>
      </div>

      <div className="w-full mt-8 gap-4 flex flex-col overflow-y-auto">
        {dummyInteractPeople.map((item: InteractPeopleInterface) => (
          <InteractPeopleCard key={item.id} data={item} />
        ))}
      </div>

      <div className="w-full p-4 md mx-auto sticky bottom-0 flex justify-end">
        <p
          className="py-1 px-2 rounded-md text-sm hover:bg-darkSecondary cursor-pointer"
          onClick={goToHome}
        >{`Lewati >>`}</p>
      </div>
    </div>
  );
}
