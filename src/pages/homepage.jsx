import { useState } from "react"
import { useEffect } from "react"
import { ItemList } from "../cmps/item-list"
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
    if (!items) return <div>Loading...</div>
    return <section className="homepage main-layout">
        <ItemList items={items} />
    </section>
}