import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

const Layout = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans">
      <Header />
      <div className="flex container mx-auto px-4">
        <Sidebar />
        <main className="flex-1 max-w-2xl mx-auto py-8">
          <Outlet />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
