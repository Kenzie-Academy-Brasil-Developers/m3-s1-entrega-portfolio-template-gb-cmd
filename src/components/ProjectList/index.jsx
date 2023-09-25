import { ProjectCard } from "../../fragments/ProjectCard"
import styles from "./style.module.css"
import { projects } from "../../data/projects.js"

export const ProjectList = ({ projects }) => {
    return (
        <ul className={styles.projectList}>
            {projects.map(projects => {
                return (
                    <ProjectCard projects={projects}/>
                )
            })}
        </ul>
    )
}