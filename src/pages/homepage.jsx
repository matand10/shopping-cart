import { useEffect } from "react"
import { shopService } from '../services/shop.service'


export const Homepage = () => {

    useEffect(() => {
        loadItems()
    }, [])

    const loadItems = async () => {
        const items = await shopService.query()
        console.log(items)
        return items
    }

    return <section className="homepage main-layout">
        <h1>Hello from</h1>
    </section>

}