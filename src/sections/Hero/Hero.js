import { PrimaryButton } from '../../components/index'
import './Hero.css'
const Hero = () => {
    return (
    <div className='hero-main'>
        <div className='hero-text'>
        <h6 className='hero-subtitle'> Welcome To Cyborg</h6>
        <h4 className='hero-title'><em>Browse</em> Our page</h4>
        <PrimaryButton> Submit </PrimaryButton>
        </div>
    </div>
    )
}

export default Hero