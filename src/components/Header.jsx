import styles from "../css/Header.module.css"
import ProfileInfo from './ProfileInfo';
import {Cloudinary} from "@cloudinary/url-gen"
import {AdvancedImage} from "@cloudinary/react"
import { fit } from '@cloudinary/url-gen/actions/resize';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';
import { Position } from '@cloudinary/url-gen/qualifiers';

const cloudinaryCloudName = import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME;
const cld = new Cloudinary({ cloud: { cloudName: cloudinaryCloudName } });


function Header() {
    const image = cld.image("portfolioTemp/profile-img.jpg")
    .resize(fit().width(300).height(400))
    .overlay(
      source(
        text(
          "Rohan Shrestha",
          new TextStyle("roboto", 32)
            .fontWeight("bold")
            .fontStyle("normal")
            .textAlignment("left")
        ).textColor("#FFFFFF")
      ).position(new Position().offsetY(125))
    );
    return (
        <div className={styles.header}>

            <div className={styles.profileImage}>
                <AdvancedImage cldImg={image}/>
            </div>
            <div className={styles.profileInfo}>
                <ProfileInfo />
            </div>
        </div>
    );
}

export default Header;