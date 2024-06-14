import {React ,useEffect, useState} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function Productdetails(){
    const [productdata,setproductdata] = useState([]);
    const { id } = useParams();
     axios.get("http://localhost:3000/product/products/"+id).then((response) => {
        console.log(JSON.stringify(response.data));
        const productresult = response.data;
    setproductdata(productresult);
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
            {productdata.map((key,value) => {
                return (
<tr>
                        <td>{value.productHeight}</td>
                        <td>{value.productHeightMetrics}</td>
                        <td>{value.productWeight}</td>
                        <td>{value.productWeightMetrics}</td>
                        
                    </tr>
                )
            })}
        </table>
    </div>);
      <Footer />
    </>
  )};

export default Productdetails;
