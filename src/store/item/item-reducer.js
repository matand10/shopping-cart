const initialState = {
    items: [],
    cart: {
        products: [],
        price: 0
    }
}

export function itemReducer(state = initialState, action) {
    var items
    var cart

    switch (action.type) {
        case 'SET_ITEMS':
            return { ...state, items: action.items }
        case 'REMOVE_ITEM':
            items = state.items.filter(item => item._id !== action.itemId)
            return { ...state, items }
        case 'ADD_ITEM':
            items = [action.item, ...state.items]
            return { ...state, items }
        case 'ADD_CART':
            cart = { products: [...state.cart.products, action.item], ...state.cart }
            console.log(cart);
            return { ...state, cart }
        case 'UPDATE_ITEM':
            items = state.items.map(currItem =>
                (currItem._id === action.item._id) ? action.item : currItem)
            return { ...state, items }
        default:
            return state
    }
}
