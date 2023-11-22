import {memo,useState} from 'react';
import "./style.scss";
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin,AiOutlineUser,AiOutlineMail,AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatPrice } from "utils/formater"
import { ROUTERS } from 'utils/router';




const Header = () => {
    const [menus,setMenus] = useState([
        {
            name: "HOME",
            path:ROUTERS.USER.HOME,
        },
        {
            name: "CONTACT",
            path:ROUTERS.USER.CONTACT,
        },
        {
            name: "ABOUT",
            path:ROUTERS.USER.ABOUT,
        }
        
    ])
    return (
    <div>
        <div className="header__top">
        <div className='container'>
            <div className="row">
                <div className="col-6 header__top_left">
                    <ul>
                        <li>
                            <AiOutlineMail />
                            bku-shop@hcmut.edu.vn
                        </li>
                        <li>
                            Miễn phí giao hàng cho đơn hàng từ {formatPrice(200000)}
                        </li>
                    </ul> 
                </div>
                <div className="col-6 header__top_right">
                    <ul>
                        <li>
                            <Link to={""}>
                            <AiOutlineFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                            <AiOutlineInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                            <AiOutlineLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                            <AiOutlineGlobal />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                            <AiOutlineUser />
                            </Link>
                            <span>
                            Đăng nhập
                        </span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="header__logo">
                        <h1>BKU-SHOP</h1>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="header__menu">
                        <ul>
                            {
                                menus?.map((menu,index) => (
                                    <li key={index} className={index===0 ? "active":""}>
                                        <Link to={menu?.path}>
                                            {menu?.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="header__cart">
                        <div className="header__price__cart">
                        <span>{formatPrice(1000000)}</span>
                        </div>
                        <ul>
                            <li>
                                <Link to={""}>
                                <AiOutlineShoppingCart />
                                <span>5</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default memo(Header);