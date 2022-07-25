

export const ItemDescription = ({ item, onAddToCart }) => {


    return (
        <section className="card-desc-container">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => onAddToCart(item)} className="add-cart-btn">Add to cart</button>
        </section>
    )
}