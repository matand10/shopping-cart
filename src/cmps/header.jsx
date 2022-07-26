import { BsFillCartFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux";
import { useState } from 'react';
import { useEffect } from 'react';

export function Header() {
    const { cart } = useSelector((storeState) => storeState.itemModule)
    const navigate = useNavigate()

    return <header className="header flex">
        <div className="header-wrapper flex">
            <div className="header-wrapper-left flex ">
                <div ><div className="btn btn-header" onClick={() => navigate('/')}> <AiFillHome /></div></div>
                <div ><div className="btn btn-header" onClick={() => navigate('/about')}>About Us</div></div>
                <div className="btn btn-header" onClick={() => navigate('/contact')}>Contact Us</div>
            </div>
            <div className="header-wrapper-right flex">
                <div className="btn btn-header" onClick={() => navigate('/cart')}><BsFillCartFill /> {cart.items.length} Item(s) - ${cart.price}</div>
            </div>
        </div>
    </header>
}