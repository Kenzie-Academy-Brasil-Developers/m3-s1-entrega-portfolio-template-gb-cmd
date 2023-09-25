import styles from "./style.module.css"

export const TechCard = ({ technologies }) => {

    return (
        <>

            <li className={styles.techCard}>
                <div className={styles.cardInfo}>
                    <img src={technologies.img} alt="icon" />
                    <h4 className="title3">{technologies.name}</h4>
                </div>
            </li>
        </>
    )
}