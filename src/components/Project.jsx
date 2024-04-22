import { project } from '../propTypes/PropTypes';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styles from "../css/Project.module.css";

function Project({data}) {

    return (
        <div className={styles.project}>
            <img src={data.image}/>
            <div className={styles.projectHeader}>
                <h3>{data.name}</h3>
                <div className={styles.projectLinks}>
                    <a href={data.srcCode} target="_blank"><GitHubIcon /></a>
                    <a href={data.liveDemo} target='_blank'><LaunchIcon /></a>
                </div>
            </div>
            <p>{data.description}</p>
        </div>
    );
}

Project.propTypes = project

export default Project;