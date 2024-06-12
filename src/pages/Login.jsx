import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import React,{ useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

 export function Login () {

localStorage.clear();

const navigate = useNavigate();

 const [userentrydata,setuserentrydata] = useState({
  username : "",
  password : ""
 });

 const handleUserEntry =(u) =>{
  const value = u.target.value;
  setuserentrydata({
    ...userentrydata,
  [u.target.name]: value

  })
}

  const OnLoginClick = (e) =>{
    e.preventDefault();
    const userData = {
      username: userentrydata.username,
      password: userentrydata.password
    };

    console.log (userData);
    axios.post("http://localhost:3000/user/login", userData).then((response) => {
      if ( response.status === 200 ){
      localStorage.setItem('token',response.data.token);
      console.log(localStorage);
      navigate("/productlisting");
    }});

  }

 

    return (
        <>   
        <Navigation/>
        <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={OnLoginClick}>
              <div class="my-3">
                <label for="display-4">User Name</label>
                <input
                  type="string"
                  class="form-control"
                  id="floatingInput"
                  name= "username"
                  placeholder="Username"
                  value = {userentrydata.username}
                  onChange={handleUserEntry}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  name= "password"
                  value = {userentrydata.password}
                  placeholder="Password"
                  onChange={handleUserEntry}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
         <Footer/>
        </>
    
    );
 };

 export default Login;