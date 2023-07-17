import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";
const FormInput = ({ ip, setIP, fetchData }) => {
  // eslint-disable-next-line no-unused-vars

  const IPRules =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // Yup validation schema
  const validationSchema = yup.object().shape({
    ipAdress: yup
      .string()
      .required("Required")
      .matches(IPRules, { message: "It is not a valid IP Adress" }),
  });

  // initial Formik values
  const formik = useFormik({
    initialValues: {
      ipAdress: ip,
    },
    onSubmit: (values) => {
      setIP(values.ipAdress);
      fetchData();
    },
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="input">
        <div className="flex">
          <input
            value={formik.values.ipAdress}
            onChange={formik.handleChange}
            type="text"
            name="ip"
            placeholder="Search for any IP adress or domain"
            className="md:w-[350px] h-[45px] w-[250px] placeholder:text-sm md:placeholder:text-lg rounded-l-xl pl-4 focus:outline-0 focus:border-0"
          />
          <button type="submit">
            <Arrow className="h-[45px] w-full pl-5 pt-4 rounded-r-xl bg-black" />
          </button>
        </div>
      </label>
    </form>
  );
};

export default FormInput;
