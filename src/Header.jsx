import styles from './Header.module.css'
import img from './assets/icone.png'
 function Header() {
    return(
        <header className={styles.header}>
            <img src={img} alt="" />
            <strong>RPV react posts </strong>
        </header>
        
    )
 }

 export default Header
