import { useState } from "react";
import "./App.css";

const Form = () => {
  let [userdata, setuserdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const Handeldata = (e) => {
    let { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };
  const Handlesubmit = (e) => {
    e.preventDefault();
    let { username, password, email } = userdata;
    if (email.length > 0 && username.length > 0 && password.length > 0) {
      toast.success("thenkyou for login", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      toast.error("Please Enter value", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    console.log(userdata);
  };

  return (
    <form onSubmit={Handlesubmit} id="main-form">
      <h1 id="hedar">FORM</h1>
      <br />
      <input
        id="i-1"
        type="text"
        placeholder="Enter userName"
        name="username"
        value={userdata.username}
        onChange={Handeldata}
      />
      <br />
      <input
        id="i-1"
        type="email"
        placeholder="Enter Email"
        name="email"
        value={userdata.email}
        onChange={Handeldata}
      />
      <br />
      <input
        id="i-1"
        type="text"
        placeholder="Enter password"
        name="password"
        value={userdata.password}
        onChange={Handeldata}
      />
      <br />
      <input id="i-1" type="submit" />
      <ToastContainer />
    </form>
  );
};

export default Form;
