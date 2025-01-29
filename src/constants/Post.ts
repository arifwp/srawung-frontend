export interface PostInterface {
  id: string;
  avatar: string;
  name: string;
  username: string;
  content?: string;
  images?: string[];
  totalComments: number;
  totalLikes: number;
  totalBookmarks: number;
  isVerified: number;
  isLike: number;
  isBookmark: number;
  createdAt: Date;
}

export const dummyPostList: PostInterface[] = [
  {
    id: "11",
    avatar: "/images/hands-heart.webp",
    name: "Kurniawan Lenggar",
    username: "lenggar022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    images: ["/images/hands.webp"],
    totalComments: 0,
    totalLikes: 0,
    totalBookmarks: 4,
    isVerified: 0,
    isLike: 1,
    isBookmark: 1,
    createdAt: new Date(),
  },
  {
    id: "1",
    avatar: "/images/hands-heart.webp",
    name: "Jono Dewi",
    username: "jonodewi",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    images: [
      "/images/laptop.webp",
      "/images/hands.webp",
      "/images/social-friends.webp",
      "/images/lock.webp",
    ],
    totalComments: 0,
    totalLikes: 0,
    totalBookmarks: 4,
    isVerified: 0,
    isLike: 1,
    isBookmark: 1,
    createdAt: new Date(),
  },
  {
    id: "10",
    avatar: "/images/laptop.webp",
    name: "Ahmad jolitos",
    username: "jolitoskurniawan",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    images: [
      "/images/lock.webp",
      "/images/laptop.webp",
      "/images/social-friends.webp",
      "/images/laptop.webp",
    ],
    totalComments: 0,
    totalLikes: 0,
    totalBookmarks: 4,
    isVerified: 0,
    isLike: 1,
    isBookmark: 0,
    createdAt: new Date(),
  },
  {
    id: "2",
    avatar: "/images/social-friends.webp",
    name: "Ahmad jolitos",
    username: "jolitoskurniawan",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    images: [
      "/images/hands-heart.webp",
      "/images/laptop.webp",
      "/images/lock.webp",
    ],
    totalComments: 0,
    totalLikes: 0,
    totalBookmarks: 4,
    isVerified: 0,
    isLike: 1,
    isBookmark: 0,
    createdAt: new Date(),
  },
  {
    id: "3",
    avatar: "/images/laptop.webp",
    name: "Ahmad jolitos",
    username: "jolitoskurniawan",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    images: ["/images/hands-heart.webp", "/images/social-friends.webp"],
    totalComments: 0,
    totalLikes: 0,
    totalBookmarks: 4,
    isVerified: 0,
    isLike: 1,
    isBookmark: 0,
    createdAt: new Date(),
  },
];
