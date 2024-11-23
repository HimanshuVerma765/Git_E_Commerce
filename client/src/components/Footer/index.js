import { IoShirtOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><IoShirtOutline /></span>
                        <span className="ml-2">EveryDay Fresh Product</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery /></span>
                        <span className="ml-2">Free delivery for order over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbRosetteDiscount /></span>
                        <span className="ml-2">Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><LuBadgeDollarSign /></span>
                        <span className="ml-2">Best price on the market</span>
                    </div>
                </div>


                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>FRUITS & VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Breakfast & Dairy</h5>
                        <ul>
                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Cheese</Link></li>
                            <li><Link to="#">Eggs Substitutes</Link></li>
                            <li><Link to="#">Honey</Link></li>
                            <li><Link to="#">Marmalades</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                            <li><Link to="#">Yogurt</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Meat & Seafood</h5>
                        <ul>
                            <li><Link to="#">Breakfast Sausage</Link></li>
                            <li><Link to="#">Dinner Sausage</Link></li>
                            <li><Link to="#">Beef</Link></li>
                            <li><Link to="#">Chicken</Link></li>
                            <li><Link to="#">Sliced Deli Meat</Link></li>
                            <li><Link to="#">Shrimp</Link></li>
                            <li><Link to="#">Wild Caught Fillets</Link></li>
                            <li><Link to="#">Crab and Shellfish</Link></li>
                            <li><Link to="#">Farm Raised Fillets</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Beverages</h5>
                        <ul>
                            <li><Link to="#">Water</Link></li>
                            <li><Link to="#">Sparkling Water</Link></li>
                            <li><Link to="#">Soda & Pop</Link></li>
                            <li><Link to="#">Coffee</Link></li>
                            <li><Link to="#">Milk & Plant-Based Milk</Link></li>
                            <li><Link to="#">Tea & Kombucha</Link></li>
                            <li><Link to="#">Drink Boxes & Pouches</Link></li>
                            <li><Link to="#">Craft Beer</Link></li>
                            <li><Link to="#">Wine</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Breads & Bakery</h5>
                        <ul>
                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Cheese</Link></li>
                            <li><Link to="#">Eggs Substitutes</Link></li>
                            <li><Link to="#">Honey</Link></li>
                            <li><Link to="#">Marmalades</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                            <li><Link to="#">Yogurt</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2024. All rights reserved.</p>
                    <ul className="list list-inline ml-auto mb-0 socials">
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebookF /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaTwitter /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaInstagram /></Link>
                        </li>
                    </ul>
                </div>




            </div>
        </footer>

    )

}

export default Footer;