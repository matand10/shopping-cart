import { ItemPreview } from "./item-preview"
export const ItemList = ({ items }) => {
    return (
        <section className="item-list-container">
            {items.map(item => <ItemPreview key={item._id} item={item} />)}
        </section>
    )
}