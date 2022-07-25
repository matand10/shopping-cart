import axios from 'axios'
import { storageService } from './async-storage.service';
const BASE_URL = 'https://fakestoreapi.com/products/';

export const itemService = {
    query,
    getById,
    save,
    remove,
}

async function query() {
    try {
        const storageItems = storageService.query('item')
        if (storageItems.length) return storageItems[0]

        const items = await axios.get('https://fakestoreapi.com/products')
        storageService.post('item', items.data)
        return items.data
    } catch (err) {
        console.log(err)
    }
}

async function getById(itemId) {
    try {
        const res = await axios.get(BASE_URL + itemId)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

async function remove(itemId) {
    try {
        const res = await axios.delete(BASE_URL + itemId)
        return res.data
    } catch (err) {
        console.log(err.message)
    }
}

async function save(item) {
    try {
        if (item._id) {
            const res = await axios.put(BASE_URL + item._id, item)
            return res.data
        } else {
            const res = await axios.post(BASE_URL, item)
            return res.data
        }
    } catch (err) {
        console.log(err)
    }
}

