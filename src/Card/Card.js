import Styles from './card.module.css';

const Card = (props) => {
    const onClick = () => {
        props.openModal()
        props.setTitle(props.title)
    }

    return (
        <div className={Styles.card}>
            <img src="https://placehold.co/300x400/white/black" alt=""/>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button onClick={onClick}>Подробнее...</button>
        </div>
    );
}

export default Card;