import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import Listing from "./Pages/Listing";

const Mycontext = createContext();
function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin,setisLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url)
      .then((res) => {
        setCountryList(res.data.data)
      })
  }

  const values = {
    countryList,
    setCountryList,
    selectedCountry,
    setselectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setisLogin
  }
  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }

        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="cat/:id" element={<Listing />} />
          <Route exact={true} path="/signIn" element={<SignIn />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
        </Routes>
        {
          isHeaderFooterShow === true && <Footer />
        }
        
        {
          isOpenProductModal === true && <ProductModal />
        }
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { Mycontext };