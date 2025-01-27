import {
  EnvelopeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { ComponentType, SVGProps } from "react";

export interface NavigationInterface {
  id: number;
  label: string;
  outlineIcon: ComponentType<SVGProps<SVGSVGElement>>;
  filledIcon: ComponentType<SVGProps<SVGSVGElement>>;
  link: string;
}

export const navigationList: NavigationInterface[] = [
  {
    id: 1,
    label: "Home",
    link: "/home",
    outlineIcon: HomeIcon,
    filledIcon: HomeModernIcon,
  },
  {
    id: 2,
    label: "Explore",
    link: "/explore",
    outlineIcon: MagnifyingGlassIcon,
    filledIcon: MagnifyingGlassIcon,
  },
  {
    id: 3,
    label: "Pesan",
    link: "/messages",
    outlineIcon: EnvelopeIcon,
    filledIcon: EnvelopeIcon,
  },
  {
    id: 4,
    label: "Profile",
    link: "/profile",
    outlineIcon: UserCircleIcon,
    filledIcon: UserCircleIcon,
  },
];
