import '../styles/Products.css'
import { CartItemType } from './Ourservices';

type props = {
    title: string;
    description: string;
    price: number;
    image: string;
    item:CartItemType;
    handleAddToCart: (clickedItem:CartItemType) => void;
}
const Products = ({item, title, description, price, image, handleAddToCart }: props) => {
    return (
        <div className='products'>
            <h1 className='title'>{title}</h1>
            <img className='image' src={image} alt="" />
            <div className='product'>
                <div>Sh.{price.toFixed(2)}</div>
                <button className='addtocartbutton' onClick={() => handleAddToCart(item)}>Add To Cart</button>
            </div>
        </div>
    )
};
export default Products