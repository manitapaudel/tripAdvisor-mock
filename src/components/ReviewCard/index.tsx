import { Link } from "react-router-dom";
import HeartIcon from "../../assets/icons/HeartIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import { BodyText, H2 } from "../Typography";
import Subtitle from "../Typography/Subtitle";

type ReviewCardProps = {
  username: string;
  userImg: string;
  date: string;
  src: string;
  alt: string;
  title: string;
  hashtags: string[];
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  src,
  alt,
  title,
  username,
  userImg,
  date,
  hashtags,
}) => {
  return (
    <div className="bg-white shadow-md rounded-sm w-1/2 mx-auto">
      <img
        src={src}
        alt={alt}
        height="200px"
        width="auto"
        className="rounded-md rounded-b-none"
      />
      <section className="grid grid-cols-12 gap-2 p-2">
        <span>
          <img
            src={userImg}
            alt="User Icon"
            className="col-span-1"
            height="100px"
            width="100px"
          />
        </span>
        <section className="col-span-10 grid gap-2">
          <span className="grid">
            <BodyText>{username}</BodyText>
            <Subtitle>{date}</Subtitle>
          </span>
          <div>
            <H2>{title}</H2>
          </div>
          <div className="flex items-center justify-start gap-4">
            {hashtags.map((tag) => (
              <Subtitle>
                <Link to="#" className="hover:underline">
                  #{tag}
                </Link>
              </Subtitle>
            ))}
          </div>
          <section className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-3">
              <span className="flex items-center gap-0.5 text-sm text-gray-600">
                <HeartIcon /> 355 Reactions
              </span>
              <span className="flex items-center gap-0.5 text-sm text-gray-600">
                <MessageIcon /> 14 Comments
              </span>
            </div>
            <span className="flex items-center gap-2">
              <Subtitle>4 mins read</Subtitle>
              <button className="bg-gray-200 hover:bg-gray-300 p-2 px-3 rounded-md">
                Save
              </button>
            </span>
          </section>
        </section>
      </section>
    </div>
  );
};

export default ReviewCard;
