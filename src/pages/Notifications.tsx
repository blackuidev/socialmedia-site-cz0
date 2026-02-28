import { notifications, users } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/lightswind/avatar";
import { Heart, Repeat, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const NotificationIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'like':
      return <Heart className="w-6 h-6 text-pink-500" />;
    case 'repost':
      return <Repeat className="w-6 h-6 text-green-500" />;
    case 'follow':
      return <UserPlus className="w-6 h-6 text-sky-500" />;
    default:
      return null;
  }
};

const NotificationItem = ({ notification }: { notification: typeof notifications[0] }) => {
    let content;

    switch (notification.type) {
        case 'like':
            content = <>liked your post</>;
            break;
        case 'repost':
            content = <>reposted your post</>;
            break;
        case 'follow':
            content = <>followed you</>;
            break;
        case 'mention':
            content = <>mentioned you in a post</>;
            break;
        default:
            content = null;
    }

    return (
        <div className="border-b border-neutral-800 p-4 flex space-x-4 items-start hover:bg-neutral-900/50 transition-colors duration-200">
            <div className="w-8 flex justify-end">
                <NotificationIcon type={notification.type} />
            </div>
            <div className="w-full">
                <Link to={`/profile/${notification.user.handle}`}>
                    <Avatar className="w-8 h-8 mb-2">
                        <AvatarImage src={notification.user.avatarUrl} />
                        <AvatarFallback>{notification.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                </Link>
                <p>
                    <Link to={`/profile/${notification.user.handle}`} className="font-bold hover:underline">{notification.user.name}</Link>
                    <span className="text-neutral-400"> {content}</span>
                </p>
                {notification.post && <p className="text-neutral-500 mt-1">{notification.post.content}</p>}
            </div>
        </div>
    );
};


const Notifications = () => {
  return (
    <div>
      <div className="border-b border-neutral-800 p-4">
        <h2 className="text-xl font-bold">Notifications</h2>
      </div>

      <div>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
