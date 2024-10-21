import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import SignIn from "./Pages/signIn";

const Mycontext = createContext();
function App() {

  const [ countryList,setCountryList] = useState([]);
  const [ selectedCountry,setselectedCountry] = useState('');
  const [ isHeaderFooterShow, setisHeaderFooterShow] = useState(true);


  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  },[]);

  const getCountry = async(url)=>{
    const responsive = await axios.get(url)
    .then((res)=>{
      setCountryList(res.data.data)
    })
  }

  const values ={
        countryList,
        selectedCountry,
        setselectedCountry,
        setisHeaderFooterShow,
        isHeaderFooterShow,
  }
  return (
    <BrowserRouter>
    <Mycontext.Provider value={values}>
      {
        isHeaderFooterShow && <Header/>
      }
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route exact={true} path="/signIn" element={<SignIn/> } />
    </Routes>
      {/*
        isHeaderFooterShow &&  <Footer/>
        */
      }
   
  
    </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { Mycontext};