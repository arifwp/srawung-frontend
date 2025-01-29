import HomeLayout from "../(home)/layout";

export default function UserProfilePage({
  params,
}: {
  params: { username: string };
}) {
  return (
    <HomeLayout>
      <div className="w-full flex flex-col">
        <p>page {params.username}</p>
      </div>
    </HomeLayout>
  );
}
