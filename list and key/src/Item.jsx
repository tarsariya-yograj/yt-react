import React from 'react'
import './App.css'

const Item = ({ image, title, price }) => {
    return (


        <div >
            <center><img id='image' src={image} alt="" />
            <h2>{title}</h2>
            
            <h3>Price : {price}</h3>
            <button>buy</button>
            </center>
        </div>
    )
}

export default Item;