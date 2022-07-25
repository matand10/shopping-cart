import { useState } from "react"
import { useEffect } from "react"
import { shopService } from '../services/shop.service'


export const Homepage = () => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        loadItems()
    }, [])

    const loadItems = async () => {
        const items = await shopService.query()
        setItems(items)
    }

    console.log(items);
    return <section className="homepage main-layout">
        <h1>Hello from</h1>
    </section>

}