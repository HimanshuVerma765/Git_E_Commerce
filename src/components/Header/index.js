import { Link } from "react-router-dom";
import logo from "../../assets/th (1).jpg";
const Header = () => {
  return (
    <>
      <header className="d-flex align-items-centre">
        <nav className="container-fluid w-100">
          <div className="row d-flex align-items-centre">
            <div className="col-xs-3">
              {/*logo warapper*/}
              <Link to={"/"} className="d-flex align-items-centre logo">
                <img src={logo} />
                <span className=" ml-2 mt-1"> ECOM</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
