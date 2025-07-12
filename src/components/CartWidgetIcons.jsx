import { IoCart } from "react-icons/io5";
import {Badge} from "react-bootstrap";
import{ useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const CartWidgetIcons = () => {
    const { cart } = useContext(CartContext);
    console.log(cart);
    return (
        <div>
            <IoCart fontSize={'2rem'} color="#40795e"/>
            <Badge bg="danger">0</Badge>
        </div>
    );
};

export default CartWidgetIcons