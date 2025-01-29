import {
  EnvelopeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SolidHomeIcon,
  MagnifyingGlassIcon as SolidMagnifyingGlassIcon,
  EnvelopeIcon as SolidEnvelopeIcon,
  UserCircleIcon as SolidUserCircleIcon,
} from "@heroicons/react/24/solid";
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
    filledIcon: SolidHomeIcon,
  },
  {
    id: 2,
    label: "Explore",
    link: "/explore",
    outlineIcon: MagnifyingGlassIcon,
    filledIcon: SolidMagnifyingGlassIcon,
  },
  {
    id: 3,
    label: "Pesan",
    link: "/message",
    outlineIcon: EnvelopeIcon,
    filledIcon: SolidEnvelopeIcon,
  },
  {
    id: 4,
    label: "Profile",
    link: "/profile",
    outlineIcon: UserCircleIcon,
    filledIcon: SolidUserCircleIcon,
  },
];
