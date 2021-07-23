import { Link } from 'react-router-dom';

import { SidebarContainer } from "./styles";

import newInIcon from "../../assets/icons/new-in.svg";
import clothing from "../../assets/icons/clothing.svg";
import shoes from "../../assets/icons/shoes.svg";
import accessories from "../../assets/icons/accessories.svg";
import activewear from "../../assets/icons/activewear.svg";
import giftsLiving from "../../assets/icons/gifts-living.svg";
import inspiration from "../../assets/icons/inspiration.svg";

export default function Sidebar() {
    return (
        <SidebarContainer>
            <h3>Categorias</h3>

            <div className="categoryList">
                <div className="category">
                    <img src={newInIcon} alt="New In" />
                    <Link to="/store">New In</Link>
                </div>

                <div className="category">
                    <img src={clothing} alt="Clothing" />
                    <Link to="/store">Clothing</Link>
                </div>

                <div className="category">
                    <img src={shoes} alt="Shoes" />
                    <Link to="/store">Shoes</Link>
                </div>

                <div className="category">
                    <img src={accessories} alt="Accessories" />
                    <Link to="/store">Accessories</Link>
                </div>

                <div className="category">
                    <img src={activewear} alt="Activewear" />
                    <Link to="/store">Activewear</Link>
                </div>

                <div className="category">
                    <img src={giftsLiving} alt="Gifts & Living" />
                    <Link to="/store">Gifts & Living</Link>
                </div>

                <div className="category">
                    <img src={inspiration} alt="Inspiration" />
                    <Link to="/store">Inspiration</Link>
                </div>
            </div>
        </SidebarContainer>
    )
}