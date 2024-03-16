import Card from "../components/Card/Card";
import Spinner from "../components/Spinner/Spinner";
import {useFetch} from "../components/customHooks/useFetch";

const CatalogPage = () => {
    const [photos, isLoading] = useFetch('https://jsonplaceholder.typicode.com/albums/1/photos')


    return (
        <main className="container">
            <h1>Каталог фотографий</h1>
            <div className="cards">
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

export default CatalogPage;