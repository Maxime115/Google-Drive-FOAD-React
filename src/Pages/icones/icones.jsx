import styles from "./icones.module.scss";


const Icones = () => {
    return (

        <>
        <div className={styles.icones}>
        <ul className={styles.menuFlex}>
            <li><a href="#"><i className="fa-regular fa-bell fa-xl"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-circle-question fa-xl"></i></a></li>
            <li><a href="#"><i class="fa-solid fa-gear fa-xl"></i></a></li>
            <li><a href="#"><span>Sebastien</span></a></li>
            <li><a href="#"><div className={styles.cercle}>S</div></a></li>
            <li><a href="#"><i class="fa-solid fa-bars fa-xl"></i></a></li>
            </ul>
        </div>

    
        </>

    );
  }
  
  export default Icones;