

export const ItemDescription = ({ item }) => {


    return (
        <section className="card-desc-container">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button className="add-cart-btn">Add to cart</button>
        </section>
    )
}