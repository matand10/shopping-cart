import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { ItemList } from "../cmps/item-list"
import { itemService } from '../services/item.service'
import { useEffectUpdate } from '../hook/useEffectUpdate'

export const Homepage = () => {
    const [items, setItems] = useState(null)
    const { cart } = useSelector((state) => state.itemModule)
    let [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        loadItems()
    }, [])

    useEffectUpdate(() => {
        loadItems()
    }, [currentPage])

    const loadItems = async () => {
        const items = await itemService.query()
        setItems(items)
    }

    const prevPage = () => {
        if (currentPage < 1) return setCurrentPage(items.length - 1)
        setCurrentPage(--currentPage)
    }

    const nextPage = () => {
        if (currentPage > items.length - 2) return setCurrentPage(0)
        setCurrentPage(++currentPage)
    }

    if (!items) return <div>Loading...</div>
    const currItems = [...items]

    return <section className="homepage main-layout">
        <ItemList items={currItems.splice(currentPage, 4)} />
        <div className="flex">
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
        </div>
    </section>
}