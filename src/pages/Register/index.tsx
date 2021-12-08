import React from "react";

import InputField from "../../components/InputField";
import { H2 } from "../../components/Typography";

const Register = () => {
  const [username, setUsername] = React.useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("username is done saving:", username );
  };

  const handleChange = (e: any) => {
    setUsername(e.target.value);
  };
  console.log({ username });
  return (
    <div className="w-1/3 mx-auto shadow-md rounded-md p-3 h-100 overflow-y-auto">
      <span>
        <img
          src="/images/trip-advisor-owl.svg"
          alt="The owl from tripadvisor logo"
          width="200px"
          height="200px"
        />
        <H2 className="font-mono font-bold">
          Sign in to unlock the best of Tripadvisor.
        </H2>
      </span>
      <form className="mt-2" onSubmit={handleSubmit}>
        {/* <label htmlFor="username" className="font-medium">
          Username
        </label>
        <br />
        <input
          name="username"
          id="username"
          placeholder="Enter username"
          className="mt-1.5 p-3 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full"
        /> */}
        <InputField
          id="username"
          value={username}
          placeholder="Enter username"
          onChange={handleChange}
        >
          Username
        </InputField>
      </form>
    </div>
  );
};

export default Register;
