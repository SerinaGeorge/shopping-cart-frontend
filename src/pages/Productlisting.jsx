import {React ,useEffect, useState} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export function Productlisting() {

    const navigate = useNavigate();

    
    const [productdata,setproductdata] = useState([]);

       const fetchdata = async() => {

        const accessToken = localStorage.getItem('token');
        console.log("Access Token -> ", accessToken)
        if (accessToken) {
  await axios.get("http://localhost:3000/product/products").then((response) => {
    console.log(JSON.stringify(response.data));
    const productresult = response.data;
    setproductdata(productresult);
  });
}
else{
    let path = `/login`;
        navigate(path);
}
}
const handleRowClick = (id) => {
  alert(`Row with ID ${id} clicked`);
  navigate(`/productdetails/${id}`);
};
    useEffect(() => {
        fetchdata();
},[]);

  return (
    <>
      <Navigation />
      (<div className="container my-3 py-3">
        <h1 className="text-center">Products</h1>
        <hr />
        <table id ="products" className="table table-striped table-bordered">
            <tr>
                <th>Product Name</th>
                <th>Product Color</th>
              { /* <th>Product Height</th>
                <th>Product Height Metric</th>
                <th>Product Weight</th>
                <th>Product Weight Metric</th>*/}
            </tr>
            {productdata.map((row) => {
                return (
                    <tr key={row._id} onClick={() => handleRowClick(row._id)} className="clickable-row">
                        <td>{row.productName}</td>
                        <td>{row.productColors}</td>

                      {/*  <td>{val.productHeight}</td>
                        <td>{val.productHeightMetrics}</td>
                        <td>{val.productWeight}</td>
                        <td>{val.productWeightMetrics}</td>*/}
                        
                    </tr>
                )
            })}
        </table>
    </div>);
      <Footer />
    </>
  );
}
export default Productlisting;
