import { ProjectList } from "../ProjectList"
import styles from "./style.module.css"
import { projects } from "../../data/projects.js"

export const ProjectSection = ({ projects }) => {
    return (
        <section className={styles.projectContainer}>
            <h3 className="title2">Projetos</h3>
            <ProjectList projects={projects}/>
        </section>
    )
}