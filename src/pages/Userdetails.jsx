import {React ,useEffect, useState} from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams,useLocation } from 'react-router-dom';



export  function Userdetails(){
    const [userdata,setuserdata] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    //const [userName,setusername] = useState('');
    
    //const { id } = useParams();
    const { userid } = location.state || {};
    const fetchdata = async() => {
    const accessToken = localStorage.getItem('token');
    console.log('id is ' + userid);
    console.log("Access Token -> ", accessToken)
    if (accessToken) {
   axios.defaults.headers.common['acess-token'] = `${accessToken}`;
    

     await axios.get("http://localhost:3000/useradm/user/"+userid).then((response) => {
        console.log(JSON.stringify(response.data));
        const userresult = response.data;
        console.log( "this"+ JSON.stringify(userresult));
        console.log( "this"+userdata);

    setuserdata(userresult);
    //setusername(userdata[0].userName);
    console.log( "this here"+userdata);
     })
    
}

    }

useEffect(() => {
    fetchdata();
},[]);

return (
    <>
      <Navigation />
      (<div className="container my-3 py-3">
        <h1 className="text-center">User detail</h1>
        <hr />
        <table id ="users" className="table table-striped table-bordered">
            <tr></tr>
            <tr>
        
               <th>address </th>
               <th>Post Code</th>
               <th>City</th>
                
            </tr>
            {userdata.map((user,index) => {
                return (
                      <tr key={index}>
                
                        <td>{user.address.addressLineOne}</td>
                        <td>{user.address.addressLineTwo}</td>
                        <td>{user.address.postalCode}</td>
                        <td>{user.address.city}</td>
                        
                    </tr>
                )
            })}
        </table>
    </div>);
      <Footer />
    </>
  )};


export default Userdetails;