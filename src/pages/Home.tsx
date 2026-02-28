import { Avatar, AvatarFallback, AvatarImage } from "@/components/lightswind/avatar";
import { posts, users } from "@/lib/data";
import { MoreHorizontal, MessageCircle, Repeat, Heart, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: typeof posts[0];
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border-b border-neutral-800 p-4 flex space-x-4">
      <Link to={`/profile/${post.author.handle}`}>
        <Avatar className="w-12 h-12">
          <AvatarImage src={post.author.avatarUrl} />
          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to={`/profile/${post.author.handle}`} className="font-bold hover:underline">{post.author.name}</Link>
            <span className="text-neutral-500">@{post.author.handle}</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-500">{post.timestamp}</span>
          </div>
          <button className="p-1 rounded-full hover:bg-sky-500/10 hover:text-sky-500">
            <MoreHorizontal size={20} />
          </button>
        </div>
        <p className="mt-2 text-white">{post.content}</p>
        {post.imageUrl && (
          <div className="mt-3 rounded-2xl border border-neutral-800 overflow-hidden">
            <img src={post.imageUrl} alt="Post content" className="w-full h-auto object-cover" />
          </div>
        )}
        <div className="flex justify-between mt-4 text-neutral-500 max-w-sm">
          <button className="flex items-center space-x-2 hover:text-sky-500 group">
            <div className="p-2 rounded-full group-hover:bg-sky-500/10">
              <MessageCircle size={20} />
            </div>
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-green-500 group">
            <div className="p-2 rounded-full group-hover:bg-green-500/10">
              <Repeat size={20} />
            </div>
            <span>{post.reposts}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-pink-500 group">
            <div className="p-2 rounded-full group-hover:bg-pink-500/10">
                <Heart size={20} />
            </div>
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-sky-500 group">
             <div className="p-2 rounded-full group-hover:bg-sky-500/10">
              <BarChart2 size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const StoryAvatar = ({ user }: { user: typeof users[0] }) => (
    <div className="flex flex-col items-center space-y-2">
        <div className="p-0.5 rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600">
            <div className="p-0.5 bg-neutral-950 rounded-full">
                <Avatar className="w-16 h-16">
                    <AvatarImage src={user.avatarUrl} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
        </div>
        <p className="text-xs text-neutral-400">{user.name.split(' ')[0]}</p>
    </div>
)

const Home = () => {
  return (
    <div>
      <div className="border-b border-neutral-800 p-4">
        <h2 className="text-xl font-bold">Home</h2>
      </div>
      
      <div className="p-4 border-b border-neutral-800">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hidden pb-2">
            {users.map(user => <StoryAvatar key={user.handle} user={user} />)}
        </div>
      </div>

      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
