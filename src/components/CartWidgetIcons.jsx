import { IoCart } from "react-icons/io5";
import {Badge} from "react-bootstrap";
const CartWidgetIcons = () => {
    return (
        <div>
            <IoCart fontSize={'2rem'} color="#40795e"/>
            <Badge bg="danger">10</Badge>
        </div>
    )
}
export default CartWidgetIcons