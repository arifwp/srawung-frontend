import Image from "next/image";
import HomeLayout from "../(home)/layout";
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export default function UserProfilePage({
  params,
}: {
  params: { username: string };
}) {
  return (
    <HomeLayout>
      <div className="w-full flex flex-col overflow-hidden">
        <div className="w-full p-4 gap-8 flex items-center">
          <ArrowLeftIcon className="w-6 h-6 font-semibold" />

          <p className="text-lg font-semibold">Username</p>
        </div>

        <div className="w-full h-[240px] sm:h-[280px] md:h-[320px] relative flex flex-col">
          <div className="w-full flex-col">
            <div className="w-full h-[120px] sm:h-[140px] md:h-[160px] relative">
              <Image
                className="w-full h-full object-cover"
                src={"/images/hands.webp"}
                alt="banner"
                fill
              />
            </div>

            <div className="w-full">
              <div className="w-full p-4 gap-4 flex justify-end">
                <div className="py-1 px-4 gap-2 rounded-md border-[1px] md:border-2 border-borderColor flex items-center">
                  <EnvelopeIcon className="w-4 h-4" />

                  <p className="text-sm md:text-md">Pesan</p>
                </div>

                <div className="py-1 px-4 gap-2 rounded-md bg-yellowPrimary flex items-center">
                  <PlusIcon className="w-4 h-4 text-darkPrimary" />

                  <p className="text-sm md:text-md text-darkPrimary">Ikuti</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] aspect-square rounded-full border-4 border-darkPrimary absolute overflow-hidden top-1/2 left-8 -translate-y-1/2">
              <Image
                className="w-full h-full object-cover"
                src={"/images/laptop.webp"}
                alt="profile picture"
                fill
              />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
