import axios from "axios";
import { useEffect, useState } from "react";

export function Products(){
    let [products,setProducts]=useState([]);

    useEffect(()=>{
        axios
        .get('https://dummyjson.com/products')
        .then((responce)=>
      //  console.log(responce.data.products)
      setProducts(responce.data.products)
        )
        .catch((error)=>console.log(error))
         
    })


    return(
        
    <>
    <table border="4px">
        <thead>
            <th>Sr No.</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>

        </thead>
        <tbody>

    {products.map((data,index)=>{
        return(
        <tr key={index}>
            <td>{data["id"]}</td>
            <td>{data["title"]}</td>
            <td>{data["description"]}</td>
            <td>{data["price"]}</td>
        </tr>
        )
    }
    )}
        </tbody>

        </table>


    </>

    );
}
export default Products;
