import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export const CartPreview = ({ item }) => {

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
                    <span><AiOutlineMinus /> 1 <AiOutlinePlus /></span>
                    <div className='card-total-price'>
                        <span> {item.price}</span>
                        <span className='total-price'>30$</span>
                    </div>
                </div>
            </div>
        </section>
    )
}