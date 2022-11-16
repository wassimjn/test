import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

function ProductsList() {
    const [products,setProducts]=useState([])
    const [image,setImage]=useState("")
    console.log(products)
    // useEffect(()=>{
    //     fetch(' https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products')
    //     .then(res=>res.json)
    //     .then()
    //     .catch(err=>err)
    // },[])
    const fetchData = () => {
        return fetch("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products",
        {
          headers:{
            Authorization:"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"}
          })
              .then((response) => response.json())
              .then((data) => setProducts(data));
      }
    
      useEffect(() => {
        fetchData();
      },[])
      return(
        <div>{products.map(product=><ProductCard product={product} key={product.id}/>)}</div>
      )  
}
export default ProductsList