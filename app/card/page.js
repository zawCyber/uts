'use client';

import Image from "next/image";
import React from "react";

const classes = [
  {
    name: "SI",
    friends: [
      "/placeholder.png", "/placeholder.png",
      "/placeholder.png", "/placeholder.png",
      "/placeholder.png"
    ]
  },
  {
    name: "KA",
    friends: [
      "/placeholder.png", "/placeholder.png",
      "/placeholder.png", "/placeholder.png",
      "/placeholder.png"
    ]
  },
  {
    name: "BD",
    friends: [
      "/placeholder.png", "/placeholder.png",
      "/placeholder.png", "/placeholder.png",
      "/placeholder.png"
    ]
  }
];

const FriendAvatar = ({ src }) => (
  <Image 
    src={src} 
    alt="Friend" 
    width={64} 
    height={64} 
    className="w-16 h-16 rounded-full border-2 border-gray-300"
    priority
  />
);

const ClassCard = ({ className, friends }) => (
  <div className="bg-white shadow-lg rounded-2xl p-4 m-4 w-full max-w-md text-center">
    <h2 className="text-xl font-bold text-gray-500 mb-4">{className}</h2>
    <div className="flex justify-center gap-3 flex-wrap">
      {friends.map((friend, index) => (
        <FriendAvatar key={index} src={friend} />
      ))}
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {classes.map(({ name, friends }) => (
        <ClassCard key={name} className={name} friends={friends} />
      ))}
    </div>
  );
};

export default Home;
