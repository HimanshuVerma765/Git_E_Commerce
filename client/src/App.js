import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import SignIn from "./Pages/signIn";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";

const Mycontext = createContext();
function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);


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
    selectedCountry,
    setselectedCountry,
    isOpenProductModal,
    setisOpenProductModal
  }
  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        <Header />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
        </Routes>
        <Footer />
        {
          isOpenProductModal === true && <ProductModal />
        }
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { Mycontext };