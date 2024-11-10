import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { Mycontext } from "../../App";
import { FilterList } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);
  const [countryList, selectCountryList] = useState([]);

  const context = useContext(Mycontext);

  const selectCountry = (index, country) => {
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectedCountry(country);
  };

  useEffect(() => {
    selectCountryList(context.countryList);
  }, [context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      selectCountryList(list);
    } else {
      selectCountryList(context.countryList);
    }
  };
  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectedCountry !== ""
              ? context.selectedCountry.length > 10
                ? context.selectedCountry?.substr(0, 10) + "..."
                : context.selectedCountry
              : "Choose location"}
          </span>
        </div>
        <span className="m1-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog 
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area</p>
        <Button className="close_" onClick={() => setisOpenModal(false)}>
          <IoClose />
        </Button>

        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area . . . . ."
            onChange={filterList}
          />
          <Button>
            {" "}
            <IoMdSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {countryList.length !== 0 &&
            countryList.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
