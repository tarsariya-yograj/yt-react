import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Card, CardHeader, CardBody, CardFooter
  } from '@chakra-ui/react'

const Product = () => {
  const [product, setProduct] = useState([]);

  const getdata = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/users");

      setProduct(res.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (





    <div>
      {product.map((ele, i) => (

        
        <div className="box"  key={i}>
            <h2>{ele.email}</h2>
          <p>{ele.address.street}</p>
          <h3>{ele.firstName}</h3>
          <h4>{ele.lastName}</h4>
        </div>
      ))}
    </div>
  );
};

export default Product;
