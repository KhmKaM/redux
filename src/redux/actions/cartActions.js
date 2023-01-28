const addToCart = (obj) => {
    return {
        type: "ADD",
        payload: obj
    }
}

const increment = (id) => {
    return {
        type: "INC",
        payload: id
    }
}

const decrement = (id) => {
    return {
        type: "DEC",
        payload: id
    }
}

export {addToCart, increment, decrement};