import {memo} from 'react';
import "./style.scss";
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin,AiOutlineUser,AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatPrice } from "utils/formater"
const Header = () => {
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
                    LOGO
                </div>
                <div className="col-xl-6">
                    MENU
                </div>
                <div className="col-xl-3">
                    PHONE
                </div>
            </div>
        </div>
    </div>
    );
}

export default memo(Header);