import React from 'react'
import './Form.css'

const Form = () => {

    const handlesubmit =() => {


    }


  return (
    <form className='form'>
        <input type="text" placeholder='name' />
        <br />
        <input type="numbar" placeholder='price' />
        <br />
        <input type="url" placeholder='img' />
        <br />
        <input type="submit" value="submit" />
    </form>
  )
}

export default Form