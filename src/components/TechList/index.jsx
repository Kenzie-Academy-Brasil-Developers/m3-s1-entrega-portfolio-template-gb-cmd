import { TechCard } from "../../fragments/TechCard"
import styles from "./style.module.css"
import { technologies } from "../../data/technologies.js"

export const TechList = ({ technologies }) => {
    return (
        <ul className={styles.techList}>
            {technologies.map(technologies => {
                return (
                    <TechCard technologies={technologies}/>
                )
            })}

        </ul>
    )
}