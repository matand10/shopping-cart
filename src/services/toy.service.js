import Axios from 'axios'
const BASE_URL = (process.env.NODE_ENV === 'production')
    ? '/api/toy/'
    : '//localhost:3030/api/toy/';


var axios = Axios.create({
    withCredentials: true
})

export const toyService = {
    query,
    getById,
    save,
    remove,
}

async function query(filterBy) {
    try {
        const res = await axios.get(BASE_URL, { params: { filterBy } })
        return res.data
    } catch (err) {
        console.log(err)
    }
}

async function getById(toyId) {
    try {
        const res = await axios.get(BASE_URL + toyId)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

async function remove(toyId) {
    try {
        const res = await axios.delete(BASE_URL + toyId)
        return res.data
    } catch (err) {
        console.log(err.message)
    }
}

async function save(toy) {
    try {
        if (toy._id) {
            const res = await axios.put(BASE_URL + toy._id, toy)
            return res.data
        } else {
            const res = await axios.post(BASE_URL, toy)
            return res.data
        }
    } catch (err) {
        console.log(err)
    }
}

