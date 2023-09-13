import logo from '../images/logo.png';
import styles from "./header.module.scss";
import Recherche from '../recherche/recherche.jsx';

function header () {

    return (
        <>
        <header>
        <a href="#"><img className={styles.logo} src={logo}/><h1>Google Drive</h1></a>
        <Recherche></Recherche>
        </header>
        </>
    )
}

export default header