import React from 'react';
import ForumsCard from './ForumsCard'; 
import av from "../../assets/av.jpg";
import av1 from "../../assets/av2.jpg";
import av3 from "../../assets/av3.jpg";

const cardsData = [
  {
    avatar: av,
    name: 'John Doe',
    description: 'Security Analyst',
    comment: 'Satellite communication for data transfer on successful payment',
    time: '2 hours ago',
    claps: 23,
    answers: 0,
    authorView: true,
  },
  {
    avatar:av1,
    name: 'Jane Smith',
    description: 'BCA Student',
    comment: 'From where can I learn Hackathon.',
    time: '4 hours ago',
    claps: 10,
    answers: 0,
    authorView: false,
  },
  {
    avatar:av3,
    name: 'Science Man',
    description: 'Science Explorer',
    comment: 'Is quantum enlargement reversible? What are your thoughts on this?',
    time: '4 hours ago',
    claps: 10,
    answers: 2,
    authorView: false,
  },
  {
    avatar: av,
    name: 'John Doe',
    description: 'Security Analyst',
    comment: 'Satellite communication for data transfer on successful payment',
    time: '2 hours ago',
    claps: 23,
    answers: 0,
    authorView: true,
  },
  {
    avatar:av1,
    name: 'Jane Smith',
    description: 'BCA Student',
    comment: 'From where can I learn Hackathon.',
    time: '4 hours ago',
    claps: 10,
    answers: 1,
    authorView: false,
  },
  {
    avatar:av3,
    name: 'Science Man',
    description: 'Science Explorer',
    comment: 'Is quantum enlargement reversible? What are your thoughts on this?',
    time: '4 hours ago',
    claps: 10,
    answers: 0,
    authorView: false,
  },
  
];

const Forums: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <p className='text-white'>Participate in forum discussions by sharing thoughts, raising doubts and asking questions to the community.</p>
      <div className="grid grid-cols-1 gap-2">
        {cardsData.map((card, index) => (
          <ForumsCard
            key={index}
            avatar={card.avatar}
            name={card.name}
            description={card.description}
            comment={card.comment}
            time={card.time}
            claps={card.claps}
            answers={card.answers}
            authorView={card.authorView}
          />
        ))}
      </div>
    </div>
  );
};

export default Forums;
