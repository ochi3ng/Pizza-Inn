import Homeimage from '../assets/cole.jpg'
import '../styles/Home.css'
const Home = () => {
    return (
        <div className="home">
            <h1 className='home-text'>Hello Welcome To Our Shop</h1>
            <img className='backimage' src={Homeimage} alt='' />
        </div>
    )
};
export default Home
