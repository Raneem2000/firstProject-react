import { ScondryButton } from '../Button/Button';
import './GamingCard.css'

const GamingCard = (props) => {
    return (
    <> <div className='Gaming-library-card'>
    <ul>
        <li><img src={props.image} alt= 'image'/></li>
        <li><h4> {props.title}</h4><span>{props.category}</span></li>
        <li><h4> Date Added</h4><span>{props.date_added}</span></li>
        <li><h4> HOurs Played</h4><span>{props.hours_played}</span></li>
        <li><h4> currently </h4><span>{props.download}</span></li>
        <ScondryButton>download</ScondryButton>
    </ul>
</div>
</>
    );
}
export default GamingCard