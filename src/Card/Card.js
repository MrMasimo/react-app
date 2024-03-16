import Styles from './card.module.css';

const Card = (props) => {
    const {photo} = props

    return (
        <div className={Styles.card}>
            <div className={Styles.card__inner}>
                <img
                    src={photo.thumbnailUrl}
                    alt={photo.thumbnailUrl}
                    width={128}
                    height={128}
                />
                <h5>{photo.title}</h5>
            </div>
        </div>
    );
}

export default Card;