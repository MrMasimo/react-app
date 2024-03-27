
import {useEffect} from "react";
import {addPhotos, setIsLoading} from "../store/photosSlice";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getPhotos} from "../store/photosSelectors";
import Card from "../components/Card/Card";

const fetchData = () => {
    return async (dispatch, getState) => {
        const state = getState();
        console.log(state)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await response.json()
            // console.log(data)
            setTimeout(() => {
                dispatch(addPhotos(data))
                dispatch(setIsLoading(false))
            }, 500)
        } catch (e) {
            console.log(e)
        }
    }
}

const HomePage = () => {
    const dispatch = useDispatch()
    const photos = useSelector(getPhotos)
    const isLoading = useSelector(getIsLoading)

    useEffect(() => {
        dispatch(setIsLoading(true))
        dispatch(fetchData())
    }, [dispatch]);
    return (
        <main className="container">
            <h1>Страница доступна только авторизованным</h1>
            {
                isLoading && <div>Загрузка...</div>
            }
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

export default HomePage;
