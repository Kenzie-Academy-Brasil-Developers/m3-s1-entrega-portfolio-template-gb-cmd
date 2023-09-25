import { username } from "../../data/user"
import banner from "../../assets/banner-img.png"
import styles from "./style.module.css"
import typography from "../../styles/typography.css"

export const Banner = () => {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.bannerInfo}>
                <p className="text1">{username}</p>
                <h1 className="title2 title2BannerInfo">Bem Vindo ao meu portfólio</h1>
                <p className="text2">Uma frase interessante sobre mim</p>

                <button className={styles.learnMoreButton}>Saiba mais</button>
            </div>
           
           <img className={styles.bannerImg} src={banner} alt="banner"/>
        </section>
    )
}