import React ,{useState}from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export function Register () {

  const navigate = useNavigate();

const[userentrydata,setuserentrydata] = useState({
  username :"",
  password :"",
  addressLineOne :"",
  addressLineTwo :"",
  postalcode:"",
  city:"",
  state:"",
  country:"",
  usertype:""

});

const handleUserEntry =(e) =>{
  const value = e.target.value;
  console.log(e.target.name);
  console.log(e.target.value);
  setuserentrydata({
    ...userentrydata,
  [e.target.name]:value
  })

};

const OnRegisterclick = (e) =>{
  e.preventDefault();
  console.log(userentrydata);
  const userdata = {
username : userentrydata.username,
password : userentrydata.password,
address:{
   addressLineOne: userentrydata.addressLineOne,
   addressLineTwo: userentrydata.addressLineTwo,
postalcode : userentrydata.postalcode,
city : userentrydata.city,
state : userentrydata.state,
country : userentrydata.country
},
usertype : userentrydata.usertpe

  }


console.log(userdata);
axios.post(("http://localhost:3000/useradm/user"), userdata).then((response) => {
  if(response.status === 200){
    alert("registered successfully");
    navigate("/login");

  }
})};
    return(
        <>   
        <Navigation/>
        <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={OnRegisterclick}>
              <div class="my-3">
                <label for="display-4">User Name</label>
                <input
                  type="string"
                  class="form-control"
                  id="floatingInput"
                  name= "username"
                  placeholder="Username"
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
                  
                  placeholder="Password"
                  onChange={handleUserEntry}
                />
              </div>
              <div class="my-3">
                <label for="floatinginput display-4">address</label>
                <input
                  type="string"
                  class="form-control"
                  id="floatinginput"
                  name= "addressLineOne"
                  
                  placeholder="housenumber"
                  onChange={handleUserEntry}
                />
                  <input
                  type="string"
                  class="form-control"
                  id="floatinginput"
                  name= "addressLineTwo"
                  
                  placeholder="housename"
                  onChange={handleUserEntry}
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
                  onChange={handleUserEntry}
               
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
                  onChange={handleUserEntry}
               
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
                  onChange={handleUserEntry}
               
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
                  onChange={handleUserEntry}
               
                />
              </div>
              <div>
      <label htmlFor="dropdown">usertype:</label>
      <select id="dropdown" >
        <input
        name = "usertype"
        onChange={handleUserEntry}
        />
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