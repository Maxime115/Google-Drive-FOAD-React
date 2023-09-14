import styles from "./recherche.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons'; 

const MaBarreDeRecherche = () => {
    return (

        <>
      
        <input type="text" name="searchfield" placeholder="Search Drive..." className={styles.searchbar}></input>
  
        


    
        </>

    );
  }
  
  export default MaBarreDeRecherche;