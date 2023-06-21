import './Card.css'
import {FaStar, FaDownload} from 'react-icons/fa';
import { RiDownloadLine , RiStarSFill} from "react-icons/ri";

const Card = (props) => {
    return (
    <> <div className='most-popular-item'>
    <div className='card-wrapper'>
        <img className='most-popular-item-image' src={props.image}/>
        <div className='most-pupular-item-content'>
            <h4 className='most-popular-item-title'>
                {props.title} <br/> 
                <span>{props.category}</span>
                </h4>
                <ul>
                    <li><span style={{color:'var(--color-icons)'}}><RiStarSFill/></span><span>{props.rate}</span></li>
                    <li><span style={{color:'green'}}><RiDownloadLine/></span><span>{props.download}</span></li>
                </ul>
        </div>
    </div>
</div>
</>
    );
}
export default Card