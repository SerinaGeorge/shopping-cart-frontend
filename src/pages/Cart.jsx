
import React, { useContext } from 'react';
import { CartContext } from '../components/Cartdetail';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const Cart = () => {
    const { cart } = useContext(CartContext);
  
    return (
        <>
<Navigation/>
      <div>
        <h2>Cart</h2> </div>
        <div className="container mt-5">
      <div className="row justify-content-left">
        <div className="col-auto">
        <table id ="products" className="table table-striped table-bordered">
            <tr>
                <th>Product Name</th>
                <th> qty</th>
                

                </tr>
                {cart.map((row) => {
                return (
                  <tr key={row._id} >
                  <td>{row.productName}</td>

                </tr>)})}
                </table>
                </div> 
                 </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default Cart;