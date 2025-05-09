import React from "react";
import { getImageUrl } from "../../utils";
import Styles from "./Profile.module.css";
export const Profile = () => {
    return ( <section className={Styles.container}>
        <div className={Styles.content}>
            <h1 className={Styles.title}>Hi, I'm Rishabh</h1>
            <p className={Styles.description}>I'm a Developer with 2 years of experience in JAVA </p>

            <a href="https://drive.google.com/file/d/1c7esOx7S-iu4XNCQZTVPWBB-AZBTmCy8/view?usp=sharing" className={Styles.contactBtn}>Download CSV</a>

        </div>
        <img src = {getImageUrl("hero/heroImage.png")} alt = "Profile Image of Me" className={Styles.profileImg}/>
        <div className={Styles.topBlur} />
        <div className={Styles.bottomBlur}/>
    </section>
    )
}