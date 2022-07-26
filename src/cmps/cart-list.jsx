import { CartPreview } from './cart-preview'

export const CartList = ({ cart }) => {

    return (
        <section className="cart-container">
            {cart.products.map(item => <CartPreview key={item._id} item={item} />)}
        </section>
    )
}