
import styles from "./menu.module.scss";




function menu () {

    return (
        <>
        <div className={styles.menu}>
            <button>Upload New File</button>
            <ul>
            <li><a href="#"><i className="fa-regular fa-compass fa-xl"></i><span>My drive</span></a></li>
            <li><a href="#"><i className="fa-solid fa-desktop fa-xl"></i><span>Computers</span></a></li>
            <li><a href="#"><i class="fa-solid fa-users fa-xl"></i><span>Shared with me</span></a></li>
            <li><a href="#"><i class="fa-regular fa-clock fa-xl"></i><span>Recent</span></a></li>
            <li><a href="#"><i class="fa-solid fa-star fa-xl"></i><span>Starred</span></a></li>
            <li><a href="#"><i class="fa-solid fa-trash fa-xl"></i><span>Trash</span></a></li>
            <li><a href="#"><i class="fa-solid fa-arrow-rotate-left fa-xl"></i><span>Backups</span></a></li>
            </ul>
        </div>
        </>
    )
}

export default menu;