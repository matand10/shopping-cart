import { CartPreview } from './cart-preview'

export const CartList = ({ cart, removeItem }) => {

    return (
        <section className="cart-list-container">
            {cart.items.map((item, idx) => <CartPreview key={idx} item={item} removeItem={removeItem} />)}
        </section>
    )
}