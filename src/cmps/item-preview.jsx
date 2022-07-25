import { ItemDescription } from "./item-description";


export const ItemPreview = ({ item }) => {

    return (
        <section className="card-container">
            <div className="card-img">
                <img src={item.image} alt="item" />
            </div>
            <ItemDescription item={item} />
        </section>
    )
}