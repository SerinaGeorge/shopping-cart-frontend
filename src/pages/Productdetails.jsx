import {React ,useEffect, useState} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams,useLocation } from 'react-router-dom';

export  function Productdetails(){
  const location = useLocation();
    const [productdata,setproductdata] = useState([]);
   // const { id } = useParams();
   const { productid } = location.state || {};
   const accessToken = localStorage.getItem('token');
        console.log("Access Token -> ", accessToken)
        if (accessToken) {
          axios.defaults.headers.common['acess-token'] = `${accessToken}`;
     axios.get("http://localhost:3000/product/products/"+productid).then((response) => {
        console.log(JSON.stringify(response.data));
        const productresult = response.data;
        console.log( "this"+productresult);
        console.log( "this"+productdata);

    setproductdata(productresult);
    console.log( "this here"+productdata);
})
return (
    <>
      <Navigation />
      (<div className="container my-3 py-3">
        <h1 className="text-center">Products</h1>
        <hr />
        <table id ="products" className="table table-striped table-bordered">
            <tr>
        
               <th>Product Height</th>
                <th>Product Height Metric</th>
                <th>Product Weight</th>
                <th>Product Weight Metric</th>
            </tr>
            {productdata.map((product,index) => {
                return (
                      <tr key={index}>
                        <td>{product.productHeight}</td>
                        <td>{product.productHeightMetrics}</td>
                        <td>{product.productWeight}</td>
                        <td>{product.productWeightMetrics}</td>
                        
                    </tr>
                )
            })}
        </table>
    </div>);
      <Footer />
    </>
  )};
}
export default Productdetails;
