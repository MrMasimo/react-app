import Styles from './main.module.css';
import {useState} from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cardTilte, setModalTitle] = useState('')

    const openModalHandler = () => {
        setIsModalOpen(true)
    }
    const closeModalHandler = () => {
        setIsModalOpen(false)
    }
    return (
        <main className={Styles.container}>
            <div className={Styles.cards}>
                <Card
                    openModal={openModalHandler}
                    setTitle={setModalTitle}
                    title="Утюг"
                    desc="Утюг железный"
                />
                <Card
                    openModal={openModalHandler}
                    setTitle={setModalTitle}
                    title="Ведро"
                    desc=" Пластиково - 10литров"
                />
                <Card
                    openModal={openModalHandler}
                    setTitle={setModalTitle}
                    title="Топор"
                    desc="Советский"
                />
            </div>

            {isModalOpen && <Modal
                closeModal={closeModalHandler}
                title={cardTilte}
            />}
        </main>
    );
}

export default Main;