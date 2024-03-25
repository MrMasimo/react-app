import Styles from './card.module.css';
import {deletePhotoById} from "../../store/photosSlice";
import {useDispatch} from "react-redux";
import {memo} from 'react'

const Card = (props) => {
    const {photo} = props
    const dispatch = useDispatch()
    const deletePhotoByIdHandler = (id) => () => {
        dispatch(deletePhotoById({id: id}))
    }
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
            <button onClick={deletePhotoByIdHandler(photo.id)}>Удалить фото</button>
        </div>
    );
}

export default memo(Card);