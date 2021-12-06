import React from "react";
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
        const resp: any = await axios.get("/posts?_limit=6");
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
      <div>
        <H3>Testimonials</H3>
        <section className="bg-white grid grid-cols-3 gap-4">
        {data.map(({ title, body }) => (
          <section className="">{title}</section>
        ))}
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
