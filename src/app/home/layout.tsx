import BottomNavigation from "@/components/navigations/BottomNavigation";
import Sidebar from "@/components/navigations/Sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-full flex flex-row items-start">
      <Sidebar />

      <div className="w-full h-full md:max-w-sidebar-mobile xl:max-w-sidebar-desktop ml-auto p-4">
        {children}
      </div>

      <BottomNavigation />
    </div>
  );
}
