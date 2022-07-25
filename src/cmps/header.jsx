import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';

export function Header() {

    return <header className="header flex">

        <div className="header-wrapper flex">
            <div className="header-wrapper-left flex ">
                <Link to="/"><div className="btn btn-header"> <AiFillHome /></div></Link>
                <Link to="/shop"><div className="btn btn-header">About Us</div></Link>
                <div className="btn btn-header">Contact Us</div>
            </div>
            <div className="header-wrapper-right flex">
                <div className="btn btn-header"><AiOutlineShoppingCart /></div>
            </div>
        </div>
    </header>
}