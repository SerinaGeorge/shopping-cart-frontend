import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx';
import  Login from './pages/Login.jsx';
import  Register from './pages/Register.jsx';
import  Productlisting from './pages/Productlisting.jsx';
import  Productdetails from './pages/Productdetails.jsx';
import  Adminpage from './pages/Adminpage.jsx';
import  Userlisting from './pages/Userlisting.jsx';
import  Userdetails from './pages/Userdetails.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/productlisting" element={<Productlisting />} />
      <Route path="/productdetails/" element={<Productdetails/>}/>
      <Route path="/adminpage" element={<Adminpage/>} />
      <Route path="/userlisting" element={<Userlisting/>} />
      <Route path="/userdetails" element={<Userdetails/>} />
      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}

    </Routes>

</BrowserRouter>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
