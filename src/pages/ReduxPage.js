
import '../app.css';
import {useEffect} from "react";
import photosJson from '../photos.json'
import {addPhotos} from "../store/photosSlice";
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../store/photosSelectors";
import Card from "../components/Card/Card";

const ReduxPage = () => {
    const dispatch = useDispatch()
    const photos = useSelector(getPhotos)

    useEffect(() => {
        dispatch(addPhotos(photosJson))
    }, [dispatch]);
    return (
        <main className="container">
            <h1>Каталог фотографий</h1>
            <div className="cards">
            {
                photos.length > 0 &&
                photos.map(photo => {
                    return <Card
                    key={photo.id}
                    photo={photo}
                />
                })
            }
            </div>
        </main>
    );
}

export default ReduxPage;