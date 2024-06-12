import React, {useState} from "react";
import { NavLink } from "react-router-dom";
export const Navigation = () => {


  var logggedIn;
  console.log(localStorage.getItem('token'));


  if(localStorage.getItem('token') !== null)
    {
      logggedIn = true;
      console.log('login state true');
    }
    else{
      logggedIn = false;
      console.log('login state false');
    }

    const [loginstate,setloginstate] = useState(logggedIn);
    const [logoutstate,setlogoutstate] = useState(!logggedIn);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          Shopping cart
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home{" "}
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            <NavLink to="/login" className={`nav-link ${loginstate ? 'disabled' : ''}`}>
            <button className="btn btn-outline-dark" disabled={loginstate}><i className="fa fa-sign-in-alt mr-1"></i> Login</button>
            </NavLink>
            <NavLink to="/login" className={`nav-link ${logoutstate ? 'disabled' : ''}`}>
            <button className="btn btn-outline-dark" disabled={logoutstate}> <i className="fa fa-sign-out-alt mr-1"></i> Logout</button>
            </NavLink>            
            <NavLink to="/register" className="btn btn-outline-dark m-2">
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;