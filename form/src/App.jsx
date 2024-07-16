import { useState } from 'react'
import "./App.css"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
  let [userdata, setuserdata] = useState({
    username: "",
    email: "",
    password: ""
  })



  const Handeldata = (e) => {

    let { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value })

  }
  const Handlesubmit = (e) => {
    e.preventDefault();
    toast.warn('🦄 Wow so easy!', {
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

  }

  

  return (
    <form onSubmit={Handlesubmit} id='main-form' >
      <h1 id='hedar'>form</h1>
      <br />
      <input id='i-1' type="text" placeholder='Enter userName' name="username" value={userdata.username} onChange={Handeldata} />
      <br />
      <input id='i-1' type="email" placeholder='Enter Email' name="email" value={userdata.email} onChange={Handeldata} />
      <br />
      <input id='i-1' type="text" placeholder='Enter password' name="password" value={userdata.password} onChange={Handeldata} />
      <br />
      <input id='i-1' type="submit" />
      <ToastContainer />
    </form>

  )



}

export default Form
