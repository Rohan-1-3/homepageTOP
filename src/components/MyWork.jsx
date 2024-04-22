import { projectData } from "../data/projectData"
import Project from './Project';
import styles from "../css/Project.module.css";

function MyWork() {
    return (
        <div className={styles.works}>
            <h1>My Work</h1>
            <div className={styles.projects}>
                {projectData.map(project => <Project key={project.id} data={project}/>)}
            </div>
        </div>
    );
}

export default MyWork;