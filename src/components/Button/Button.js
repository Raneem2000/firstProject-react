import './Button.css'
const PrimaryButton = (props) => {
    return (
        <div className='button primary-btn'>
        <a href='#'>{props.children}</a>
    </div>
    )
}

const ScondryButton = (props) => {
    return (
        <div className='button scondry-btn'>
        <a href='#'>{props.children}</a>
    </div>
    )
}

export default PrimaryButton
export {ScondryButton}
