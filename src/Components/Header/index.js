import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import CountryDropdown from '../CountryDropdown';
import { IoMdSearch } from "react-icons/io";
import { Button } from '@mui/material';
import { LuUser2 } from "react-icons/lu";
import { TbShoppingBag } from "react-icons/tb";
const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}> <img src={Logo} alt='Logo'></img></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountryDropdown />

                                {/*Header Search start here*/}
                                <div className='headerSearch ml-3 mr-3'>
                                    <input type='text' placeholder='Search for products...' />
                                    <Button> <IoMdSearch /></Button>
                                </div>
                                {/*Header Search ends here*/}

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><LuUser2 /></Button>
                                    <div className='cartTab ml-auto d-flex align-items-center'>
                                        <span className='price' >$3.29</span>
                                        <div className='position-relative ml-2'>
                                        <Button className='circle'><TbShoppingBag /></Button>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>







            </div>
        </>
    )

}

export default Header;

// 31:16