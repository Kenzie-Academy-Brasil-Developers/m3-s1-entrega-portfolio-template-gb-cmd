import githubIcon from "../../assets/git-icon.png"
import styles from "./style.module.css"
import { projects } from "../../data/projects.js"

export const ProjectCard = ({ projects }) => {
    return (
        <>
            <li className={styles.projectCard}>
                <div className={styles.cardHeader}>
                    <h4 className="title3">{projects.name}</h4>
                    <img className={styles.gitIcon}src={githubIcon} alt="github icon"/>
                </div>

                <p className="text2">{projects.description}</p>

                <a className="text1" href="#">Saiba mais</a>
            </li>
        </>
            
    )
}