import { useState } from "react"
import { useEffect } from "react"
import { itemService } from '../services/item.service'


export const Homepage = () => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        loadItems()
    }, [])

    const loadItems = async () => {
        const items = await itemService.query()
        setItems(items)
    }

    console.log(items);
    return <section className="homepage main-layout">
        <h1>Hello from</h1>
    </section>
}