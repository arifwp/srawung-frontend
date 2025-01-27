import InteractPeopleCard from "@/components/cards/InteractPeopleCard";
import { dummyInteractPeople } from "@/constants/InteractPeople";

export default function page() {
  return (
    <div className="w-full max-w-md mx-auto p-4 flex flex-col items-center">
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
        Mulai berinteraksi
      </h1>

      <p className="text-sm md:text-md opacity-secondary text-center">
        Ikuti orang yang mungkin anda kenal dan anda bisa berinteraksi
      </p>

      <div className="w-full mt-12 gap-4 flex flex-col">
        {dummyInteractPeople.map((item) => (
          <InteractPeopleCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
