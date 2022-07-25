import { toyService } from '../../services/toy.service.js'

export function loadToys() {
    return async dispatch => {
        try {
            const toys = await toyService.query()
            dispatch({ type: 'SET_TOYS', toys })
        } catch (err) {
            console.log(err)
        }
    }
}

export function removeToy(toyId) {
    return async dispatch => {
        try {
            await toyService.remove(toyId)
            dispatch({ type: 'REMOVE_TOY', toyId })
        } catch (err) {
            console.log(err)
        }
    }
}

export function saveToy(toy) {
    return async dispatch => {
        const actionType = (toy._id) ? 'UPDATE_TOY' : 'ADD_TOY'
        try {
            const savedToy = await toyService.save(toy)
            dispatch({ type: actionType, toy: savedToy })
        } catch (err) {
            console.log(err)
        }
    }
}

