import StoryCircle from "@/components/cards/StoryCircle";
import { dummyStory } from "@/components/navigations/Story";
import { BellIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div className="w-full bg-darkPrimary flex flex-col">
      <div className="w-full flex flex-row justify-between items-center md:hidden">
        <p className="text-2xl text-yellowPrimary font-semibold">srawung</p>

        <BellIcon className="h-8 w-8 rounded-full p-1 text-yellowPrimary cursor-pointer hover:bg-darkSecondary" />
      </div>

      <div className="w-full mt-8 gap-8 flex flex-row overflow-x-auto no-scrollbar">
        {dummyStory.map((item) => (
          <StoryCircle key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
