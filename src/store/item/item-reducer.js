const initialState = {
    items: [],
    cart: {
        items: [],
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
            cart = { ...state.cart, items: [action.item, ...state.cart.items], price: (state.cart.price + action.item.price) }
            return { ...state, cart }
        case 'REMOVE_CART':
            cart = {
                ...state.cart, items: state.cart.items.filter(item => {
                    return item._id !== action.item._id
                }), price: (state.cart.price - action.item.price)
            }
            return { ...state, cart }
        case 'UPDATE_ITEM':
            items = state.items.map(currItem =>
                (currItem._id === action.item._id) ? action.item : currItem)
            return { ...state, items }
        default:
            return state
    }
}
