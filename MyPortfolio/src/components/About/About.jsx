import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {

    return (

        <section className = {styles.container} id="about">
            <h2 className = {styles.title}>SKILLS</h2>
            <div className = {styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me Sitting with a laptop"
                className = {styles.aboutImage}
                />
                <ul className = {styles.aboutItems}>
                    <li className = {styles.aboutItem}>
                        <img src = {getImageUrl("about/cursorIcon.png")} alt = "Cursor Icon" />
                        <div className = {styles.aboutItemText}>
                            <h3>CS FUNDAMENTAL</h3>
                            <p>
                            Proficient in Data Structures 
                            and Algorithms, Object-Oriented 
                            Programming, and DBMS with a 
                            strong foundation in coding, 
                            problem-solving, and software 
                            design principles.
                            </p>
                        </div>
                    </li>

                    <li className = {styles.aboutItem}>
                        <img src = {getImageUrl("about/serverIcon.png")} alt = "Server Icon" />
                        <div className = {styles.aboutItemText}>
                            <h3>PROGRAMMING </h3>
                            <p>
                            Skilled in Java, C++, and 
                            Python for backend development 
                            proficient in JavaScript, HTML 
                            for web, and experienced with 
                            SQL, PL/SQL for database 
                            operations
                            </p>
                        </div>
                    </li>


                    <li className = {styles.aboutItem}>
                        <img src = {getImageUrl("about/cursorIcon.png")} alt = "Cursor Icon" />
                        <div className = {styles.aboutItemText}>
                            <h3>TOOLS / PLATFORM</h3>
                            <p>
                            Experienced with Linux for 
                            development and deployment, 
                            Git and GitHub for version 
                            control, and familiar with 
                            Jenkins, SonarQube, and Gradle 
                            for CI/CD and code quality.
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    )

}