import { IoCart } from "react-icons/io5";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const CartWidgetIcons = () => {
    const { cartQuantity } = useContext(CartContext);
    
    return (
        <div>
            <IoCart fontSize={'2rem'} color="black"/>
            <Badge bg="danger">{cartQuantity()}</Badge>
        </div>
    );
};

export default CartWidgetIcons