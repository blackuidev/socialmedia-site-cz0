import { Search } from 'lucide-react';
import { users } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/lightswind/avatar';

const RightSidebar = () => {
  const suggestedUsers = users.slice(0, 4);

  return (
    <aside className="w-80 sticky top-0 h-screen py-8 pl-6 hidden xl:block">
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-3 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <div className="bg-neutral-900 rounded-2xl p-4">
        <h3 className="text-xl font-bold mb-4">Who to follow</h3>
        <div className="space-y-4">
          {suggestedUsers.map((user) => (
            <div key={user.handle} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold hover:underline cursor-pointer">{user.name}</p>
                  <p className="text-neutral-500 text-sm">@{user.handle}</p>
                </div>
              </div>
              <button className="bg-white text-black font-semibold px-4 py-1.5 rounded-full text-sm hover:bg-neutral-200 transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
         <a href="#" className="text-sky-500 hover:underline mt-4 block">Show more</a>
      </div>
    </aside>
  );
};

export default RightSidebar;
