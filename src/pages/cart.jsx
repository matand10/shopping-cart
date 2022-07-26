import { useSelector, useDispatch } from "react-redux";
import { CartList } from '../cmps/cart-list'
import { CartSidebar } from '../cmps/cart-sidebar'
import { removeFromCart } from "../store/item/item.action";


export const Cart = () => {
    const { cart } = useSelector((storeState) => storeState.itemModule)
    const dispatch = useDispatch()

    const removeItem = (item) => {
        dispatch(removeFromCart(item))
    }

    return (
        <section className="cart-container main-layout">
            <CartSidebar cart={cart} />
            <CartList cart={cart} removeItem={removeItem} />
        </section>
    )
}