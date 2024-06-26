
import {React,  useContext,useState,useEffect } from 'react';
import { CartContext } from '../components/Cartdetail';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
const Cart = () => {
  const [cartdata,setcartdata] = useState([]);
  const fetchdata = async() => {
  const accessToken = localStorage.getItem('token');
        console.log("Access Token -> ", accessToken)
        if (accessToken) {
          axios.defaults.headers.common['acess-token'] = `${accessToken}`;
axios.get("http://localhost:3000/cart/"+"userid").then((response) => {
  const cartresult = response.data;
setcartdata(cartresult);
console.log ("cart has "+ JSON.stringify(response.data));
});
        }
        }

        useEffect(() => {
          fetchdata();
  },[]);      
  // const { id } = useParams()
 /* const handleDelClick = async(id) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      axios.defaults.headers.common['acess-token'] =`${accessToken}`;
      await axios.delete("http://localhost:3000/cart/"+id).then((response) => {
        const  result = response.data;})
      }*/
    return (
        <>
<Navigation/>
      <div>
        <h2>Cart Items</h2> </div>
        <div className="container mt-5">
      <div className="row justify-content-left">
        <div className="col-auto">
        <table id ="products" className="table table-striped table-bordered">
            <tr>
              <th>ProductName</th>
                <th>ProductId</th>
                <th>sellerId</th>
                <th>Quantity</th>

                </tr>
                {(cartdata.length !==0) ? (cartdata.map((row) => {
                return (
                <tr key={row._id}>
                   <td>{row.productName}</td>
                  <td>{row.productId}</td>
                  <td>{row.sellerId}</td>
                  <td>{row.quantity}</td>
                 
                </tr>
                )}
                )):(
                  <p>Cart is empty</p>
              )}
                </table>
                </div> 
                 </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default Cart;