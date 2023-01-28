import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/cartActions";
const Item = (props) => {
    const dispatch = useDispatch();
    return <tr>
        <td>{props.name}</td>
        <td>
            <button onClick={e => dispatch(decrement(props.id))}>-</button>
            {props.cnt}
            <button onClick={e => dispatch(increment(props.id))}>+</button>
        </td>
        <td>{props.price * props.cnt}</td>

    </tr>
}

export default Item;