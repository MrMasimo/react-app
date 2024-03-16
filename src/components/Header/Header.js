import Styles from './header.module.css';
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className={Styles.header}>
        <Link to='/'>Главная</Link>
        <Link to='/catalog'>Каталог</Link>
    </header>
  );
}

export default Header;