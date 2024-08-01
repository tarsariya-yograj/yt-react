import { useFormik } from "formik";
import React from "react";

const Formikform = () => {
  const usersvalidationschema = yup.object({

    username: yup.string()
    .min(3)
    .max(30)
    .required("Username is required"),

    email: Yup.string()
    .email("Enter valid email address")
    .required("Enter valid email address"),

    password: Yup.string()
    .min(6)
    .max(16)
    .required("Enter valid password"),
  });

  let formData = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationschema : uservalidationscgema,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <div>
      <form onsubmit={formData.onSubmit}>
        <input
          type="text"
          placeholder="your name"
          value={formData.values.username}
          onChange={formData.handleChange}
        />
        <input
          type="text"
          placeholder="email"
          value={formData.values.email}
          onChange={formData.handleChange}
        />
        <input
          type="text"
          placeholder="password"
          value={formData.values.password}
          onChange={formData.handleChange}
        />
        <input type="submit" placeholder="click" />
      </form>
    </div>
  );
};

export default Formikform;
