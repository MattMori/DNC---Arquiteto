import './Button.css';
import WitheArrow from '../../assets/whiteArrow.svg';

function Button({ arrow, buttonStyle, loading, children, ...Props }) {
    return (
        <button className={`button ${buttonStyle}`} {...Props}>
            {children} {arrow && <img src={WitheArrow} alt="arrow" />}
        </button>)
}

export default Button;