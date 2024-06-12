import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export function Register () {
    return(
        <>   
        <Navigation/>
        <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form >
              <div class="my-3">
                <label for="display-4">User Name</label>
                <input
                  type="string"
                  class="form-control"
                  id="floatingInput"
                  name= "username"
                  placeholder="Username"
               
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  name= "password"
                  
                  placeholder="Password"
                />
              </div>
              <div class="my-3">
                <label for="floatinginput display-4">address</label>
                <input
                  type="string"
                  class="form-control"
                  id="floatinginput"
                  name= "addresslineone"
                  
                  placeholder="housenumber"
                />
                  <input
                  type="string"
                  class="form-control"
                  id="floatinginput"
                  name= "addresslinetwo"
                  
                  placeholder="housename"
                />
              </div>
              <div class="my-3">
                <label for="display-4">postalcode</label>
                <input
                  type="string"
                  class="form-control"
                  id="floatingInput"
                  name= "postalcode"
                  placeholder="pincode"
               
                />
              </div>
              <div class="my-3">
                <label for="display-4">city</label>
                <input
                  type="string"
                  class="form-control"
                  id="floatingInput"
                  name= "city"
                  placeholder="city"
               
                />
              </div>
              <div class="my-3">
                <label for="display-4">state</label>
                <input
                  type="string"
                  class="form-control"
                  id="floatingInput"
                  name= "state"
                  placeholder="state"
               
                />
              </div>
              <div class="my-3">
                <label for="display-4">country</label>
                <input
                  type="string"
                  class="form-control"
                  id="floatingInput"
                  name= "country"
                  placeholder="country"
               
                />
              </div>
              <div>
      <label htmlFor="dropdown">Choose an option:</label>
      <select id="dropdown" >
        <option value="">Select...</option>
        <option value="seller">seller</option>
        <option value="customer">customer</option>
        
      </select>
    
    </div>
              
              
              
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Register
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

 export default Register;