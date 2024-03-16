import './app.css';
import Header from "../Header/Header";
import {HomePage} from "../../pages/HomePage";
import CatalogPage from "../../pages/CatalogPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PhotosProvider} from "../../context/photosContext"

function App() {
    return (
        <PhotosProvider>
            <BrowserRouter>
            <div className='container'>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/catalog" element={<CatalogPage/>}/>
                </Routes>
            </div>
            </BrowserRouter>
        </PhotosProvider>
    );
}

export default App;