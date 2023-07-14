import React, { useState } from "react";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";
import axios from "axios";
const FormInput = ({ ip, setIP, setInfo }) => {
  // eslint-disable-next-line no-unused-vars
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    setIP(e.target.value);
    setValid(true);
  };

  //Geo API Call
  const fetchData = () => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`
      )
      .then((res) => {
        setInfo(res.data);
        console.log(res.data.location.lat);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Regular expression to validate IP address
    const ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;

    if (!ipRegex.test(ip)) {
      setValid(false);
      setIP("");
    } else {
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
