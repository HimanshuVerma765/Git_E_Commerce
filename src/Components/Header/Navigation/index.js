import { Button } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row' >
                    <div className='col-sm-2 navPart1'>
                        <Button className='allCatTab align-items-center' >
                            <span className='icon1 mr-2' ><IoMenu/></span>
                            <span class="text">All Categories</span>
                            <span className='icon2 ml-2' ><FaAngleDown/></span>
                        </Button>
                    </div>

                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                        <li className='list-inline-item'>
                                <Link to="/"><Button>Home</Button></Link>
                            </li> 
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Man</Button></Link>
                                <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footware</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                         
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Woman</Button></Link>
                            </li> 
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Electronics</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Home</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Grocery</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>kids</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>gifts</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Contact</Button> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;