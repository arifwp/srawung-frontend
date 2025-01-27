export interface InteractPeopleInterface {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export const dummyInteractPeople: InteractPeopleInterface[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/images/lock.webp",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];
