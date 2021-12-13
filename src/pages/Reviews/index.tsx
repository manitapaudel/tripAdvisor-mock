import React from "react";
import ReviewCard from "../../components/ReviewCard";

type ReviewsProps = {};

const reviews = [
  {
    username: "User",
    userImg:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    date: "Dec 13",
    src: "/images/desk.jpeg",
    alt: "desk",
    title: "Roadmap for React JS 2022",
    hashtags: ["react", "javascript", "beginner", "webdev"],
  },
];

const Reviews: React.FC<ReviewsProps> = () => {
  return (
    <div className="container mx-auto">
      {reviews.map(({ src, alt, title, username, userImg, date, hashtags }) => (
        <ReviewCard
          src={src}
          alt={alt}
          title={title}
          username={username}
          userImg={userImg}
          date={date}
          hashtags={hashtags}
        />
      ))}
    </div>
  );
};

export default Reviews;
