import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const data = useSelector(state => state.cart.value);
    console.log(data);
    return <div>
        <h2>Корзина</h2>
        <table>
            <thead>
                <tr>
                    <th>Товар</th>
                    <th>Количество</th>
                    <th>Сумма</th>
                </tr>
            </thead>
            <tbody>
                {data.map(el => <CartItem
                    {...el}
                    key={el.id}
                />)}
                {/* <CartItem name="Помидор" cnt="1" price="120"/> */}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2">ИТОГО</td>
                    <td>{data.reduce((sum, el) => {
                        sum += el.cnt * el.price;
                        return sum;
                    }, 0)}</td>
                </tr>
            </tfoot>
        </table>
    </div>
}

export default Cart;