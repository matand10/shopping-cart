import { AiOutlineClose } from 'react-icons/ai';


export const CartSidebar = ({ cart }) => {

    return (
        <section className="cart-sidebar">
            <div className="cart-wrapper">
                <div className="cart-header">
                    <div className="btn-close"><AiOutlineClose /></div>
                    <div className='cart-title'>Your shopping cart</div>
                </div>
                <div className='cart-main-content'>
                    <ul className='cart-items'>
                        <div className='cart-amount'>Total Item(s):{cart.items.length}</div>
                    </ul>
                </div>
                <div className='cart-fotter'>
                    <div className='cart-total-price'>
                        <div className='total-items'>Total items: {cart.items.length}</div>
                        <div className='total-price'>{cart.price}$</div>
                    </div>
                    <div className='btn-pay'>Proceed to payment</div>
                </div>
            </div>
        </section>
    )
}