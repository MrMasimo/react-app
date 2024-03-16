import Styles from './main.module.css';
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import {useFetch} from "../customHooks/useFetch";

const Main = () => {
    const [photos, isLoading] = useFetch('https://jsonplaceholder.typicode.com/albums/1/photos')

    return (
        <main className={Styles.container}>
            <div className={Styles.cards}>
                {isLoading && <Spinner/>}
                {
                    !isLoading && photos.length > 0 &&
                    photos.map((photo) => {
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

export default Main;