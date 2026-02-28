import { useParams } from "react-router-dom";
import { users, posts } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/lightswind/avatar";
import { Button } from "@/components/lightswind/button";
import { MoreHorizontal, Mail, Calendar, Link as LinkIcon, MapPin } from "lucide-react";
import PostCard from "./Home"; // Re-using PostCard component from Home

const Profile = () => {
  const { handle } = useParams();
  const user = users.find((u) => u.handle === handle) || users[0];
  const userPosts = posts.filter((p) => p.author.handle === user.handle);

  return (
    <div>
      <div className="border-b border-neutral-800">
        <div className="h-48 bg-neutral-800 relative">
          {user.coverUrl && (
            <img src={user.coverUrl} alt="Cover" className="w-full h-full object-cover" />
          )}
          <div className="absolute -bottom-16 left-4">
            <div className="p-1 bg-neutral-950 rounded-full">
                <Avatar className="w-32 h-32 border-4 border-neutral-950">
                    <AvatarImage src={user.avatarUrl} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
          </div>
        </div>
        
        <div className="pt-20 pb-4 px-4">
          <div className="flex justify-end items-center space-x-2">
            <Button variant="outline" className="rounded-full p-2 h-auto border-neutral-700 hover:bg-neutral-800">
              <MoreHorizontal />
            </Button>
            <Button variant="outline" className="rounded-full p-2 h-auto border-neutral-700 hover:bg-neutral-800">
              <Mail />
            </Button>
            <Button className="rounded-full bg-white text-black font-bold hover:bg-neutral-200">
              Follow
            </Button>
          </div>
          
          <div className="mt-4">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-neutral-500">@{user.handle}</p>
          </div>

          <p className="mt-4">{user.bio}</p>

          <div className="flex flex-wrap text-neutral-500 mt-4 gap-x-4 gap-y-2">
            <div className="flex items-center space-x-1">
              <MapPin size={18} /> <span>{user.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <LinkIcon size={18} /> <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-sky-500 hover:underline">{user.website}</a>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={18} /> <span>{user.joined}</span>
            </div>
          </div>

          <div className="flex space-x-6 mt-4">
            <div>
              <span className="font-bold">{user.following}</span> <span className="text-neutral-500">Following</span>
            </div>
            <div>
              <span className="font-bold">{user.followers}</span> <span className="text-neutral-500">Followers</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {userPosts.length > 0 ? (
            userPosts.map((post) => (
                // @ts-ignore
                <PostCard key={post.id} post={post} />
            ))
        ) : (
            <div className="p-8 text-center text-neutral-500">
                This user hasn't posted anything yet.
            </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
