import '../styles/Products.css'

type props={
    title:string;
    description:string;
    price:number;
    image:string
}
const Products = ({ title, description, price,image }:props)=>{
return(
    <div className='products'>
        <h1 className='title'>{title}</h1>
         <img className='image' src={image} alt=""/>
        <div>Sh.{price.toFixed(2)}</div>
    </div>
)
};
export default Products