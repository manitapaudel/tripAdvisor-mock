import { H3 } from "../Typography";

type MoreToExploreProps = {
  className?: string;
};

const MoreToExplore: React.FC<MoreToExploreProps> = ({ className = "" }) => {
  return (
    <div className={`bg-pink-200 p-4 rounded-md h-44 w-full ${className}`}>
      <H3>More to Explore</H3>
    </div>
  );
};

export default MoreToExplore;
