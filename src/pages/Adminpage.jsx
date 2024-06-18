
import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useNavigate } from 'react-router-dom';
export function Adminpage () {
    const navigate = useNavigate();
const usersClick =() => {

   navigate("/userlisting");
};

const productsClick =() => {
    navigate("/productlisting");
}



return(
    <>
         <Navigation />
    
    <div>
         <button onClick ={usersClick}>
            users
        </button>
    </div>

    <div>
    <button onClick ={productsClick}>
            products
        </button>
    </div>
    <Footer />
    </>
)
};
export default Adminpage;