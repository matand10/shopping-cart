import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/item/item.action";
import { ItemDescription } from "./item-description";



export const ItemPreview = ({ item }) => {
    // const { cart } = useSelector((storeState) => storeState.itemModule)
    const dispatch = useDispatch()

    const onAddToCart = (item) => {
        dispatch(addToCart(item))
    }

    return (
        <section className="card-container">
            <div className="card-img">
                <img src={item.image} alt="item" />
            </div>
            <ItemDescription item={item} onAddToCart={onAddToCart} />
        </section>
    )
}