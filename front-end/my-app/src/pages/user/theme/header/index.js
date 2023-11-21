import {memo} from 'react';
import "./style.scss";
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin,AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
    return (
    <div className="header__top">
        <div className='container'>
            <div className="row">
                <div className="col-6"> Left </div>
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
                        </li>
                        <span>
                            Đăng nhập
                        </span>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default memo(Header);