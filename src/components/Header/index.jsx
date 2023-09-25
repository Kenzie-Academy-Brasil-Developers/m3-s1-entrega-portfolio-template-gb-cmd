import logo from "../../assets/portfolio.png"
import styles from "./style.module.css"
import typography from "../../styles/typography.css"

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <img src={logo} alt="Logo"/>

            <nav className={styles.navContainer}>
                <p className="text2">Sobre</p>
                <p className="text2">Stack</p>
                <p className="text2">Projetos</p>
            </nav>

            <button className={styles.contactButton}>Contato</button>
        </header>
    )
}