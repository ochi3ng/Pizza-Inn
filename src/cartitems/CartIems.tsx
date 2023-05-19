
import { CartItemType } from "../Components/Ourservices"; 
import './CartItems.css'

type props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const CartItems: React.FC<props> = ({ item, addToCart, removeFromCart }) =>
    <div className="outerdiv">
        <div className="titleDiv" >
            <h3>{item.title}</h3>
            <div className="information">
                <p>Price: ${item.price}</p>
                <p>Total:${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <button
                    onClick={() => removeFromCart(item.id)}
                >
                    -
                </button>
                <p>{item.amount}</p>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

        </div>
        <img className="imgs" src={item.image} alt={item.title} />
    </div>


export default CartItems
