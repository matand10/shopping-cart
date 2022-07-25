import { itemService } from '../../services/item.service'

export function loadItems() {
    return async dispatch => {
        try {
            const items = await itemService.query()
            dispatch({ type: 'SET_ITEMS', items })
        } catch (err) {
            console.log(err)
        }
    }
}

export function removeItem(itemId) {
    return async dispatch => {
        try {
            await itemService.remove(itemId)
            dispatch({ type: 'REMOVE_ITEM', itemId })
        } catch (err) {
            console.log(err)
        }
    }
}

export function saveItem(item) {
    return async dispatch => {
        const actionType = (item._id) ? 'UPDATE_ITEM' : 'ADD_ITEM'
        try {
            const savedItem = await itemService.save(item)
            dispatch({ type: actionType, item: savedItem })
        } catch (err) {
            console.log(err)
        }
    }
}

export function addToCart(item) {
    return async dispatch => {
        try {
            dispatch({ type: 'ADD_CART', item: item })
        } catch (err) {
            console.log(err)
        }
    }
}

