import PostCard from "@/components/cards/PostCard";
import StoryCircle from "@/components/cards/StoryCircle";
import { dummyStory } from "@/components/navigations/Story";
import { dummyPostList } from "@/constants/Post";

export default function HomePage() {
  return (
    <div className="w-full bg-darkPrimary flex flex-col">
      <div className="w-full p-4 md:p-8 flex flex-row justify-between items-center md:hidden">
        <p className="text-4xl text-yellowPrimary font-semibold">srawung</p>

        <button className="p-1 relative inline-flex items-center text-sm font-medium text-center text-white rounded-full cursor-pointer hover:bg-darkSecondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>

          <div className="absolute rounded-full -top-2 -end-1 inline-flex items-center justify-center w-6 h-6 text-xs font-semibold bg-red-500">
            20
          </div>
        </button>
      </div>

      <div className="w-full pl-4 md:p-8 gap-8 flex flex-row overflow-x-auto no-scrollbar">
        {dummyStory.map((item) => (
          <StoryCircle key={item.id} data={item} />
        ))}
      </div>

      <div className="w-full p-4 md:p-8 mb-14 gap-4 flex flex-col">
        {dummyPostList.map((item) => (
          <PostCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
