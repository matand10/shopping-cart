import { useDispatch } from "react-redux";
import { addToCart } from "../store/item/item.action";
import { ItemDescription } from "./item-description";

export const ItemPreview = ({ item }) => {
    const dispatch = useDispatch()
    const onAddToCart = (item) => {
        dispatch(addToCart(item))
    }
    console.log(item);
    return (
        <section className="card-container">
            <div className="card-img">
                <img src={item.image} alt="item" />
            </div>
            <ItemDescription item={item} onAddToCart={onAddToCart} />
        </section>
    )
}