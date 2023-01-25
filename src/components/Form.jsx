import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/productActions";

const Form = () => {
    const dispatch = useDispatch();
    const [n, setN] = useState("");
    const [p, setP] = useState(100);
    const handler = e => {
        e.preventDefault();
        const product = {
            name: n,
            price: p
        }
        dispatch(addProduct(product));
    }
    return <form onSubmit={handler}>
        <div className="row">
            <label htmlFor="name">Название товара</label>
            <input 
                type="text" 
                id="name" 
                placeholder="Помидор" 
                value={n} 
                onChange={e => setN(e.target.value)}/>
        </div>
        <div className="row">
            <label htmlFor="price">Цена</label>
            <input 
                type="number" 
                id="price" 
                placeholder="300"
                value={p}
                onChange={e => setP(e.target.value)}/>
        </div>
        <button type="submit">Добавить товар</button>
    </form>
}

export default Form;
