const initialState = {
    value: [{
        name: "Помидор",
        cnt: 2,
        price: 120,
        id: new Date().getTime()
    }]
}

const cartReducer = (state = initialState, action) => {
    const val = state.value;
    const data = action.payload;
    let upd;
    switch(action.type) {
        case "ADD":
            let inCart = val.filter(el => el.name.toLowerCase()
            === data.name.toLowerCase());
            if (inCart.length) {
                inCart[0].cnt++;
                upd = val.map(el => {
                    if (inCart[0].id === el.id) {
                        return inCart[0];
                    } else {
                        return el;
                    }
                })
            } else {
                data.id = new Date().getTime();
                data.cnt = 1;
                upd = [...val, data];
            }
            return {value: upd};
        case "INC":
                upd = val.map(el => {
                    if (el.id === data) {
                        el.cnt++;
                    }
                    return el;
                });
                return {value: upd};
        case "DEC":
            upd = val.filter(el => !(el.id === data && el.cnt === 1));
            if (upd.length !== val.length) {
                return {value: upd};
            }
            upd = val.map(el => {
                if (el.id === data) {
                    el.cnt--;
                }
                return el;
            });
            return {value: upd};
        default: return state;
    }
}

export default cartReducer;