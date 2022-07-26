import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export const CartPreview = ({ item, removeItem }) => {
    let [itemAmount, setItemAmount] = useState(1)
    let [itemPrice, setItemPrice] = useState(item.price)

    const increaseAmount = () => {
        setItemAmount(++itemAmount)
        setItemPrice(itemPrice + item.price)
    }

    const decreaseAmount = () => {
        if (itemAmount === 1) return
        setItemAmount(--itemAmount)
        setItemPrice(itemPrice - item.price)
    }

    return (
        <section className="cart-card-wrapper">
            <div className="cart-card-container">
                <div className="cart-card-img">
                    <img src={item.image} alt="item" />
                    <button onClick={() => removeItem(item)}>Remove</button>
                </div>
                <div className="cart-desc-container">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
                <div className="cart-price-container">
                    <div className="add-item-control">
                        <button onClick={decreaseAmount}><AiOutlineMinus /></button>
                        <p>{itemAmount}</p>
                        <button onClick={increaseAmount}><AiOutlinePlus /></button>
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