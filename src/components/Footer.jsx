import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Icons from './Icons';
import styles from "../css/Footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className='contactMe'>
                <h2>Contact Me</h2>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                <p>1234 Random Road Random Town, California 12345</p>
                <div className={styles.phone}>
                    <PhoneIcon/>
                    <span>9839102839</span>
                </div>
                <div className={styles.address}>
                    <MailOutlineOutlinedIcon />
                    <span>rohanshrestha130@gmail.com</span>
                </div>
                <div className={styles.footerIcons}>
                    <Icons />
                </div>
            </div>
            <div className='footerImage'>
                <img src='https://res.cloudinary.com/fetch-images/image/upload/f_auto/h_300,w_400/v1/portfolioTemp/profile-img.jpg?_a=DAJAUVWIZAA0' />
            </div>
        </div>
    );
}

export default Footer;