import React from "react";
import ArrowCircleLeftIcon from "../../assets/icons/ArrowCircleLeftIcon";
import ArrowCircleRightIcon from "../../assets/icons/ArrowCircleRightIcon";
import DoubleQuotesIcon from "../../assets/icons/DoubleQuotesIcon";
import axios from "../../utils/axios";
import { H3 } from "../Typography";

type TestimonialProps = {
  className?: string;
};

const Testimonials: React.FC<TestimonialProps> = ({ className = "" }) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resp: any = await axios.get("/photos?_limit=6");
        // console.log("Data", resp.data);
        setData(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  console.log("Data", data);

  return (
    <div className={` p-3 ${className}`}>
        <H3>Testimonials</H3>
      <div className="container mx-auto flex items-center justify-between">
        <button className="absolute left-0 hover:text-green-500">
          <ArrowCircleLeftIcon />
        </button>
        <section className="relative grid grid-cols-4 gap-5 mt-2 overflow-hidden">
          {data.map(({ title, url, body }) => (
            <section className="p-3 rounded-md shadow-md">
              <img src={url} height="200px" width="auto" alt="images" />
              <span className="pl-3 font-serif">
                <DoubleQuotesIcon />
                <i>{title}</i>
              </span>
            </section>
          ))}
        </section>
        <button className="absolute right-0 hover:text-green-500">
          <ArrowCircleRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
