import styles from "../css/Header.module.css";
import Icons from "./Icons";

function ProfileInfo() {

    return (
        <>
            <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className={styles.links}>
                        <Icons />
                </div>
        </>
    );
}

export default ProfileInfo;