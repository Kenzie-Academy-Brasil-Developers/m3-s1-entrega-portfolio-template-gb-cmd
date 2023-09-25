import { TechList } from "../TechList"
import styles from "./style.module.css"
import { technologies } from "../../data/technologies.js"

export const TechSection = ({ technologies }) => {
    return (
        <section className={styles.techContainer}>
            <h2 className="title2">Tecnologias</h2>
            <TechList technologies={technologies}/>
        </section>
    )
}