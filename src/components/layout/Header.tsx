import { Avatar, AvatarFallback, AvatarImage } from "@/components/lightswind/avatar";
import { users } from "@/lib/data";
import { Bell, Mail, Search } from "lucide-react";

const Header = () => {
  const currentUser = users[0];

  return (
    <header className="sticky top-0 z-10 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="lg:hidden">
            <h1 className="text-xl font-bold tracking-tighter text-white">Societal</h1>
        </div>
        <div className="hidden lg:block w-full max-w-md">
            {/* Placeholder for potential future global search */}
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-neutral-800 transition-colors">
            <Mail className="w-6 h-6 text-neutral-300" />
          </button>
          <button className="p-2 rounded-full hover:bg-neutral-800 transition-colors">
            <Bell className="w-6 h-6 text-neutral-300" />
          </button>
          <Avatar>
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
