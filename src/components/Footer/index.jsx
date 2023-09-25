import { user } from "../../data/user.js"
import whatsAppIcon from "../../assets/whatsapp-icon.png"
import linkedInIcon from "../../assets/linkedin-icon.png"
import gitHubIcon from "../../assets/github-icon.png"
import styles from "./style.module.css"

export const Footer = () => {
    return (
       <footer >
            <hr />
            <div className={styles.footerContainer}>
                <div className={styles.contactContainer}>
                    <h2 className="title2">Contato</h2>
                    <div className={styles.linksContainer}>
                        <img className={styles.linkIcon} src={whatsAppIcon} alt="WhatsApp icon"/>
                        <img className={styles.linkIcon} src={linkedInIcon} alt="LinkedIn icon"/>
                        <img className={styles.linkIcon} src={gitHubIcon} alt="GitHub icon"/>
                    </div>  
                </div>
                <small className="text2">Todos os direitos reservados - {user}</small>
            </div>
            <hr />
       </footer> 
    )
}