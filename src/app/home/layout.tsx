import BottomNavigation from "@/components/navigations/BottomNavigation";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full bg-darkPrimary">
      {children}

      <BottomNavigation />
    </div>
  );
}
