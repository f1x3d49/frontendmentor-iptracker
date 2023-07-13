import React from "react";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";

const FormInput = () => {
  return (
    <form>
      <label htmlFor="input">
        <div className="flex">
          <input
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
