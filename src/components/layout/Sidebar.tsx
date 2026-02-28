import { Bell, Bookmark, Home, Mail, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Messages", href: "#", icon: Mail },
  { name: "Bookmarks", href: "#", icon: Bookmark },
  { name: "Profile", href: "/profile/ava", icon: User },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 sticky top-0 h-screen py-8 pr-6 border-r border-neutral-800 hidden lg:block">
      <div className="flex flex-col h-full">
        <div className="mb-12">
          <Link to="/" className="text-3xl font-bold tracking-tighter text-white">
            Societal
          </Link>
        </div>
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center space-x-4 px-4 py-3 rounded-full transition-colors duration-200",
                pathname === item.href
                  ? "bg-neutral-800 text-white font-semibold"
                  : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-lg">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full w-full text-lg transition-colors duration-200">
            Post
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
