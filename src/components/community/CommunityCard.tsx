import React from 'react';

interface CardProps {
    avatar: string;
    name: string;
    description: string;
    followers: string;
}

const Card: React.FC<CardProps> = ({ avatar, name, description, followers }) => {
    return (
        <div className="flex flex-col gap-2 min-w-[240px] h-fit p-4 border border-gray-500/20 bg-[#181818] rounded-md">
    <img src={avatar} alt={name} className="w-12 h-12 object-cover rounded-md" />
    <div className="flex flex-col items-start flex-1">
        <h2 className="font-semibold text-lg text-white">{name}</h2>
        <p className="text-gray-500 mt-0">{description}</p>
        <p className="text-gray-400 text-sm mt-3">{followers} followers</p>
        <button className="mt-2 text-white py-2 px-4 w-full rounded hover:bg-zinc-800 border border-gray-500/20">
            Follow
        </button>
    </div>
</div>

    );
};

export default Card;
