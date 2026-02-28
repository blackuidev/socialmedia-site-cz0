export interface User {
  name: string;
  handle: string;
  avatarUrl: string;
  coverUrl: string;
  bio: string;
  location: string;
  website: string;
  joined: string;
  following: number;
  followers: number;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  imageUrl?: string;
  timestamp: string;
  likes: number;
  reposts: number;
  comments: number;
}

export interface Notification {
  id: string;
  type: 'like' | 'repost' | 'follow' | 'mention';
  user: User;
  post?: Post;
  timestamp: string;
}


export const users: User[] = [
  {
    name: "Alex Doe",
    handle: "alexdoe",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    coverUrl: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bio: "Frontend Developer | React Enthusiast | Building beautiful and performant web apps. 🚀",
    location: "San Francisco, CA",
    website: "alexdoe.dev",
    joined: "Joined October 2021",
    following: 256,
    followers: 1842,
  },
  {
    name: "Jane Smith",
    handle: "janesmith",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    coverUrl: "https://images.unsplash.com/photo-1554189097-c48cf35b1a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bio: "UI/UX Designer creating seamless digital experiences. Cat lover 🐈.",
    location: "New York, NY",
    website: "janesmith.design",
    joined: "Joined May 2020",
    following: 512,
    followers: 5321,
  },
  {
    name: "Dev Guru",
    handle: "devguru",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    coverUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bio: "Full-stack engineer. I turn coffee into code.",
    location: "Austin, TX",
    website: "dev.guru",
    joined: "Joined January 2019",
    following: 100,
    followers: 10500,
  },
   {
    name: "Olivia Chen",
    handle: "oliviachen",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    coverUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bio: "Photographer & Digital Nomad. Capturing moments around the world 🌏.",
    location: "Everywhere",
    website: "oliviachen.photo",
    joined: "Joined March 2022",
    following: 800,
    followers: 12400,
  },
];

export const posts: Post[] = [
  {
    id: "post1",
    author: users[1],
    content: "Just launched my new portfolio website! So excited to share my latest work with everyone. Check it out and let me know what you think! #design #uidesign #portfolio",
    timestamp: "2h",
    likes: 156,
    reposts: 32,
    comments: 12,
  },
  {
    id: "post2",
    author: users[0],
    content: "Finally got around to learning Tailwind CSS. It's a game-changer for rapidly building UIs. Highly recommend giving it a try if you haven't already!",
    imageUrl: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    timestamp: "5h",
    likes: 289,
    reposts: 78,
    comments: 25,
  },
  {
    id: "post3",
    author: users[2],
    content: "Debugging is like being a detective in a crime movie where you are also the murderer.",
    timestamp: "1d",
    likes: 1200,
    reposts: 450,
    comments: 89,
  },
  {
    id: "post4",
    author: users[3],
    content: "Sunrise over the mountains in Bali. Truly a magical experience. Feeling so grateful for these moments.",
    imageUrl: "https://images.unsplash.com/photo-1534349988431-91d32169a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    timestamp: "3d",
    likes: 3400,
    reposts: 980,
    comments: 150,
  },
];

export const notifications: Notification[] = [
    {
        id: 'notif1',
        type: 'like',
        user: users[1],
        post: posts[1],
        timestamp: '2m'
    },
    {
        id: 'notif2',
        type: 'follow',
        user: users[2],
        timestamp: '15m'
    },
    {
        id: 'notif3',
        type: 'repost',
        user: users[3],
        post: posts[0],
        timestamp: '1h'
    },
    {
        id: 'notif4',
        type: 'mention',
        user: users[0],
        post: posts[2],
        timestamp: '3h'
    }
]
