import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export const CartPreview = ({ item }) => {
    let [itemAmount, setItemAmount] = useState(1)
    let [itemPrice, setItemPrice] = useState(item.price)

    const addToCart = () => {
        setItemAmount(++itemAmount)
        setItemPrice(itemPrice + item.price)
    }

    const removeFromCart = () => {
        if (itemAmount === 1) return
        setItemAmount(--itemAmount)
        setItemPrice(itemPrice - item.price)
    }

    return (
        <section className="cart-card-wrapper">
            <div className="cart-card-container">
                <div className="cart-card-img">
                    <img src={item.image} alt="item" />
                </div>
                <div className="cart-desc-container">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
                <div className="cart-price-container">
                    <div className="add-item-control">
                        <button onClick={removeFromCart}><AiOutlineMinus /></button>
                        <p>{itemAmount}</p>
                        <button onClick={addToCart}><AiOutlinePlus /></button>
                    </div>
                    <div className='card-total-price'>
                        <span> {item.price.toFixed(2)}$</span>
                        <span className='total-price'>{itemPrice.toFixed(2)}$</span>
                    </div>
                </div>
            </div>
        </section>
    )
}