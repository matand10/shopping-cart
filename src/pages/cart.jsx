import { useSelector } from "react-redux";
import { CartList } from '../cmps/cart-list'

export const Cart = () => {

    const { cart } = useSelector((storeState) => storeState.itemModule)

    return (
        <section className="cart-container">
            <CartList cart={cart} />
        </section>
    )
}