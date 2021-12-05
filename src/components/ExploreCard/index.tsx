import { Link } from "react-router-dom";
import HeartIcon from "../../assets/icons/HeartIcon";
import { BodyText } from "../Typography";

type ExploreCardProps = {
  title: string;
  href: string;
  imgSrc: string;
  alt: string
};

const ExploreCard: React.FC<ExploreCardProps> = ({ title, href, imgSrc, alt }) => {
  return (
    <div className="relative min-h-explore-card max-w-explore-card bg-white grid gap-1.5">
      <img src={`/images/${imgSrc}`} alt="Sea sighting from a cliff" />
      <p className="font-medium text-center">
        From{" "}
        <Link to="/" className="!hover:font-normal hover:underline">
          TripAdvisor
        </Link>
      </p>
      <Link to={href}>
        <BodyText className="text-lg font-medium text-center px-5">
          {title}
        </BodyText>
      </Link>
      <span className="absolute right-2 top-2 bg-white p-2 rounded-full hover:bg-red-600 hover:text-white cursor-pointer"><HeartIcon /></span>
    </div>
  );
};

export default ExploreCard;
