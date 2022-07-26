import { useSelector } from "react-redux";
import { CartList } from '../cmps/cart-list'
import { CartSidebar } from '../cmps/cart-sidebar';

export const Cart = () => {

    const { cart } = useSelector((storeState) => storeState.itemModule)

    return (
        <section className="cart-container">
            <CartSidebar cart={cart} />
            <CartList cart={cart} />
        </section>
    )
}