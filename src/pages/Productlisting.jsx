import {React ,useEffect, useState,useContext} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/Cartdetail';


export function Productlisting() {
  const { addToCart } = useContext(CartContext);

  

    const navigate = useNavigate();

    
    const [productdata,setproductdata] = useState([]);

       const fetchdata = async() => {

        const accessToken = localStorage.getItem('token');
        console.log("Access Token -> ", accessToken)
        if (accessToken) {
          axios.defaults.headers.common['acess-token'] = `${accessToken}`;
    
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
  const state  = { productid: id };
  navigate(`/productdetails`,{state});
};
    useEffect(() => {
        fetchdata();
},[]);

const handleDelClick = async(id) => {
const accessToken = localStorage.getItem('token');
if (accessToken) {
  axios.defaults.headers.common['acess-token'] =`${accessToken}`;
  await axios.delete("http://localhost:3000/Product/products/"+id).then((response) => {
    const  result = response.data;
    alert(result.productName);
    fetchdata();
});
}

}
const handleSellerClick = (id) => {
  alert(`Row with ID ${id} clicked`);
  const state  = { userid: id };
  
  navigate('/userdetails',{ state });
  };
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
                <th>seller_id</th>
                <th></th>
              { /* <th>Product Height</th>
                <th>Product Height Metric</th>
                <th>Product Weight</th>
                <th>Product Weight Metric</th>*/}
            </tr>
            {productdata.map((row) => {
                return (
                    <tr key={row._id} className="clickable-row">
                       <td onClick={() => handleRowClick(row._id)} >{row.productName}</td>
                        <td>{row.productColors}</td>
                        <td onClick={() =>handleSellerClick(row.sellerId)}>{row.sellerId}</td>
                        <td><button className="btn btn-danger btn-sm" onClick={() => handleDelClick(row._id)}>del</button></td>
                       <td><button className="btn btn-primary" onClick={() => addToCart(row)}><i className="fa fa-cart-plus"></i></button></td>
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
