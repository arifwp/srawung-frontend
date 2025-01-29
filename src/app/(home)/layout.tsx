import BottomNavigation from "@/components/navigations/BottomNavigation";
import Sidebar from "@/components/navigations/Sidebar";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-full flex flex-row items-start">
      <Sidebar />

      {/* <div className="w-full h-full ml-auto md:max-w-sidebar-mobile xl:max-w-sidebar-desktop">
        {children}
      </div> */}

      <div className="w-full h-full mx-auto md:max-w-sidebar-md lg:max-w-sidebar-lg xl:max-w-sidebar-xl">
        <div className="w-full h-full mx-auto max-w-4xl md:max-w-xl">
          {children}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
