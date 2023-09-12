import logo from '../images/logo.png';
import styles from "./header.module.scss";

function header () {

    return (
        <>
        <header>
        <a href="#"><img className={styles.logo} src={logo}/><h1>Google Drive</h1></a>
        <div classname={styles.recherche}>
        <input
        type="text"
        placeholder='Rechercher...'
        />
        <i classname='fa-solid fa-magnifying-glass'></i>
        </div>
        
        </header>
        </>
    )
}

export default header