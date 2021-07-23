import { Link } from 'react-router-dom';

import SearchIcon from "../../assets/icons/search.svg";
import BasketIcon from "../../assets/icons/basket.svg";
import PersonIcon from "../../assets/icons/person.svg";
import SignInIcon from "../../assets/icons/sign-in.svg";

import Logo from "../../assets/logo.svg";

import { HeaderContainer, Menu } from "./styles";

export default function Header() {
    return (
        <HeaderContainer>
            <div className="header-left">
                <img src={Logo} alt="Logo Caped" />
                
                <div className="search">
                    <img src={SearchIcon} alt="Search Form Icon" />
                    <input type="text" placeholder="Search store" />
                </div>
            </div>

            <Menu>
                <Link to="/">Home</Link>
                <Link to="/store">Products</Link>
                <Link to="/about">Quem Somos</Link>

                <div className="menu-icons">
                    <Link to="/cart" title="Carrinho">
                        <img src={BasketIcon} alt="Basket Icon" />
                    </Link>
                    
                    <Link to="/sign-up" title="Cadastre-se">
                        <img src={PersonIcon} alt="Person Icon" />
                    </Link>

                    <Link to="/sign-in" title="Login">
                        <img src={SignInIcon} alt="Person Icon" />
                    </Link>
                </div>
            </Menu>
        </HeaderContainer>
    )
}