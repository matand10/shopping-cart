import { CartPreview } from './cart-preview'

export const CartList = ({ cart }) => {

    return (
        <section className="cart-container">
            {cart.items.map(item => <CartPreview key={item._id} item={item} />)}
        </section>
    )
}