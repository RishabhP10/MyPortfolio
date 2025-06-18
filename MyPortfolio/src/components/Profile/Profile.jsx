import React from "react";
import { getImageUrl } from "../../utils";
import Styles from "./Profile.module.css";
export const Profile = () => {
    return ( <section className={Styles.container}>
        <div className={Styles.content}>
            <h1 className={Styles.title}>Hi, I'm</h1>
            <p className={Styles.description}>Backend Developer with 2 years of hands-on expertise in Java, microservices, scalable systems, data processing, and React-based front-end integration.</p>

            <a href="https://drive.google.com/file/d/1lQgmLWQInU9hgg4bfGZHOD2iDd2isu-C/view?usp=sharing" className={Styles.contactBtn} target="_blank"
  rel="noopener noreferrer" >Download CSV</a>

        </div>
        <img src = {getImageUrl("hero/heroImage.png")} alt = "Profile Image of Me" className={Styles.profileImg}/>
        <div className={Styles.topBlur} />
        <div className={Styles.bottomBlur}/>
    </section>
    )
}