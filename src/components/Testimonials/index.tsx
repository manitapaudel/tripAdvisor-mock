import React from "react";
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
    <div className={`bg-green-100 p-3 ${className}`}>
      <div className="container mx-auto">
        <H3>Testimonials</H3>
        <section className="grid grid-cols-4 gap-5 mt-2">
          {data.map(({ title, url, body }) => (
            <section className="bg-white p-3 rounded-md">
              <img src={url} height="200px" width="auto" alt="images" />
              <span className="pl-3 font-serif">
                <DoubleQuotesIcon />
                <i>{title}</i>
              </span>
            </section>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
