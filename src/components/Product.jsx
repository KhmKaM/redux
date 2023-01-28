import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { delProduct, updProduct } from "../redux/actions/productActions";

const Product = (props) => {
    const dispatch = useDispatch();
    const [n, setN] = useState(props.name);
    const [p, setP] = useState(props.price);
    const [update, setUpdate] = useState(false);
    const delHandler = () => {
        dispatch(delProduct(props.name));
    }
    const updHandler = () => {
        dispatch(updProduct({
            product: props.name,
            data: {
                name: n,
                price: p
            }
        }));
        setN(props.name);
        setP(props.price);
        setUpdate(false);
    }
    const clear = () => {
        setUpdate(false);
        setN(props.name);
        setP(props.price);
    }
    const buyHandler = () => {
        dispatch(addToCart({name: n, price: p}))
    }
    return <tr>
        <td>
            {update ?
            <input value={n} onChange={e => setN(e.target.value)}/> 
            : props.name}
        </td>
        <td>
            {update ?
            <input value={p} onChange={e => setP(e.target.value)}/> 
            : props.price}
        </td>
        <td>
            {update
                ? <>
                <button onClick={updHandler}>Подтвердить</button>
                <button onClick={clear}>Отменить</button>
                </>
                : <>
                <button onClick={() => {setUpdate(true)}}>Изменить</button>
                <button onClick={delHandler}>Удалить</button>
                <button onClick={buyHandler}>Купить</button>
                </>
            }
        </td>
    </tr>
}

export default Product;