import './Home.css'
import {Hero , MostPopular ,Gaming} from '../../sections/index'; 
const Home = () => {
    return (
    <>
        <Hero />
        <MostPopular/>
        <Gaming/>
    </>
    );
}

export default Home