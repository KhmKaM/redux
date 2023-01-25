import React, {useState, useEffect} from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const List = () => {
    const goods = useSelector(state => state.product);
    return <table>
        <thead>
            <tr>
                <th>Название</th>
                <th>Цена</th>
                <th>Функционал</th>
            </tr>
        </thead>
        <tbody>
            {goods.map(g => <Product {...g} key={g.name}/>)}
        </tbody>
    </table>
}

export default List;