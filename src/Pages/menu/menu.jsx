
import styles from "./menu.module.scss";


function menu () {

    return (
        <>
        <div className={styles.menu}>
            <button>Upload New File</button>
            <ul>
            <li><a href="#">My drive</a></li>
            <li><a href="#">Computers</a></li>
            <li><a href="#">Shared with me</a></li>
            <li><a href="#">Recent</a></li>
            <li><a href="#">Starred</a></li>
            <li><a href="#">Trash</a></li>
            <li><a href="#">Backups</a></li>
            </ul>
        </div>
        </>
    )
}

export default menu;