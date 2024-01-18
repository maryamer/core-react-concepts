import { useState } from "react";
import { useFormik } from "formik";
import "./App.css";
// formik without Yup
const validate = (values) => {
  const errors = {};
  errors.email = "invalid email";
  errors.firstName = "invalid firstName";
  errors.lastName = "invalid LastName";
  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validate: validate,
  });

  return (
    <>
      <h1>formik</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
