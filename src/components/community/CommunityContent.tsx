import React from 'react'
import CommunityCard from './CommunityCard';
import av from "../../assets/av.jpg";
import av1 from "../../assets/av2.jpg";
import av3 from "../../assets/av3.jpg";

const CommunityContent = () => {
  
    const cardData = [
        {
            avatar: av,
            name: 'John Doe',
            description: 'Web Developer',
            followers: '1200',
        },
        {
            avatar: av1,
            name: 'Jane Smith',
            description: 'Graphic Designer',
            followers: '900',
        },
        {
            avatar: av3,
            name: 'Alice Johnson',
            description: 'Content Writer',
            followers: '1500',
        },
        {
            avatar: av,
            name: 'John Doe',
            description: 'Web Developer',
            followers: '1200',
        },
        {
            avatar: av1,
            name: 'Jane Smith',
            description: 'Graphic Designer',
            followers: '900',
        },
        {
            avatar: av3,
            name: 'Alice Johnson',
            description: 'Content Writer',
            followers: '1500',
        },
        {
            avatar: av,
            name: 'John Doe',
            description: 'Web Developer',
            followers: '1200',
        },
        {
            avatar: av1,
            name: 'Jane Smith',
            description: 'Graphic Designer',
            followers: '900',
        },
        {
            avatar: av3,
            name: 'Alice Johnson',
            description: 'Content Writer',
            followers: '1500',
        },
       
    ];

    return (
        <div className="container mx-auto p-2">
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {cardData.map((data, index) => (
                    <CommunityCard
                        key={index}
                        avatar={data.avatar}
                        name={data.name}
                        description={data.description}
                        followers={data.followers}
                    />
                ))}
            </div>
        </div>

  )
}

export default CommunityContent
