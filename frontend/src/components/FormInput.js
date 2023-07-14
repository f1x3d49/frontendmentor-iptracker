import React, { useState } from "react";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";
const FormInput = ({ ip, setIP, fetchData }) => {
  // eslint-disable-next-line no-unused-vars
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    setIP(e.target.value);
    setValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Regular expression to validate IP address
    const ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;

    if (!ipRegex.test(ip)) {
      setValid(false);
      setIP("");
    } else {
      console.log(valid);
      fetchData();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">
        <div className="flex">
          <input
            value={ip}
            onChange={handleChange}
            type="text"
            placeholder="Search for any IP adress or domain"
            className="md:w-[350px] h-[45px] w-[250px] placeholder:text-sm md:placeholder:text-lg rounded-l-xl pl-4 focus:outline-0 focus:border-0"
          />
          <button>
            <Arrow className="h-[45px] w-full pl-5 pt-4 rounded-r-xl bg-black" />
          </button>
        </div>
      </label>
    </form>
  );
};

export default FormInput;
