"use client";

import Image from "next/image";
import HomeLayout from "../(home)/layout";
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useParams, usePathname } from "next/navigation";
import { navigationPeopleList } from "@/constants/navigationList";
import Link from "next/link";
import clsx from "clsx";

export default function UserProfilePage() {
  const pathname = usePathname();
  const params = useParams();

  const username = params.username as string;

  return (
    <HomeLayout>
      <div className="w-full flex flex-col overflow-hidden">
        <div className="w-full p-4 gap-8 backdrop-blur-sm flex items-center fixed z-10">
          <ArrowLeftIcon className="w-6 h-6 font-semibold" />

          <p className="text-md font-semibold">Username</p>
        </div>

        <div className="w-full h-fit mt-[60px] flex flex-col relative">
          <div className="w-full h-[120px] sm:h-[140px] md:h-[160px] relative">
            <Image
              className="w-full h-full object-cover"
              src={"/images/hands.webp"}
              alt="banner"
              fill
            />
          </div>

          <div className="w-full flex relative">
            <div className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] aspect-square rounded-full border-4 border-darkPrimary sticky overflow-hidden bottom-0 left-4 -translate-y-1/2">
              <Image
                className="w-full h-full object-cover"
                src={"/images/laptop.webp"}
                alt="profile picture"
                fill
              />
            </div>

            <div className="p-4 gap-4 flex justify-end absolute right-0 top-0">
              <div className="py-1 px-4 h-fit gap-2 rounded-md border-[1px] md:border-2 border-borderColor flex items-center cursor-pointer">
                <EnvelopeIcon className="w-4 h-4" />

                <p className="text-sm md:text-md">Pesan</p>
              </div>

              <div className="py-1 px-4 h-fit gap-2 rounded-md bg-yellowPrimary flex items-center cursor-pointer">
                <PlusIcon className="w-4 h-4 text-darkPrimary" />

                <p className="text-sm md:text-md text-darkPrimary">Ikuti</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4 gap-0 -mt-12 flex flex-col">
          <p className="text-md font-semibold">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <p className="text-sm opacity-secondary">
            @Lorem Ipsum is simply dummy text of the printing
          </p>

          <p className="mt-4 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book v Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book
          </p>
        </div>

        <div className="text-sm font-medium text-center text-borderColor border-b border-borderColor">
          <ul className="flex flex-wrap -mb-px">
            {navigationPeopleList.map((item) => {
              // Build the full link dynamically (e.g., "/lenggar2000/media")
              const fullLink = `/${username}${item.link}`;

              // Check if the current route is active
              const isActive = pathname === fullLink;

              return (
                <li key={item.id} className="me-2">
                  <Link
                    className={clsx(
                      `inline-block p-4 border-b-2 rounded-t-lg`,
                      {
                        "border-transparent": !isActive,
                        "border-yellowPrimary text-yellowPrimary": isActive,
                      }
                    )}
                    href={fullLink}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </HomeLayout>
  );
}
