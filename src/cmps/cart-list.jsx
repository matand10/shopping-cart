import { CartPreview } from './cart-preview'

export const CartList = ({ cart, removeItem }) => {

    return (
        <section className="cart-list-container">
            {cart.items.map(item => <CartPreview key={item._id} item={item} removeItem={removeItem} />)}
        </section>
    )
}