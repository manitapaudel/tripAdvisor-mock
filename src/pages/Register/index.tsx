import React from "react";

import InputField from "../../components/InputField";
import { H2 } from "../../components/Typography";

const Register = () => {
  const [formValues, setFormValues] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("username is done saving:", formValues);
  };

  const handleChange = (e: any) => {
    // setFormValues(username: e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  console.log({ formValues });
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
        <InputField
          id="username"
          value={formValues.username}
          placeholder="Enter username"
          onChange={handleChange}
        >
          Username
        </InputField>
        <InputField
          id="email"
          value={formValues.email}
          placeholder="Enter Email"
          onChange={handleChange}
        >
          Email
        </InputField>
        <InputField
          id="password"
          value={formValues.password}
          placeholder="Enter Password"
          type="password"
          onChange={handleChange}
        >
          Password
        </InputField>
        <button
          type="submit"
          className="uppercase w-full px-5 py-3 bg-green-600 hover:bg-green-800 text-white font-medium rounded-md tracking-widest mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
