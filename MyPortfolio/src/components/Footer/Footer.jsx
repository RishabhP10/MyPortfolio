import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Footer.module.css";
export const Footer = () => {
        return (
            <footer className= {styles.container}>
                <h1>
                    <span>Rishabh Pathak</span>
                    <span className={styles.dot}>·</span>
                    <span>Developer</span>
                </h1>
                <ul className= {styles.content}>
                    <li>
                        <a href="https://www.linkedin.com/in/rishabh-pathak-686b811a2/" target="_blank" rel="noopener noreferrer">
                        <img src = {getImageUrl("footer/Linkedin.png")} alt="LinkedIn" className={styles.icon} />
                        </a>
                    </li>
                    <li>
                        <a href="https://leetcode.com/u/rishabpathk10/" target="_blank" rel="noopener noreferrer"> 
                        <img src = {getImageUrl("footer/leetcode.jpeg")} alt="Leetcode" className={styles.icon} />     
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1lQgmLWQInU9hgg4bfGZHOD2iDd2isu-C/view?usp=sharing" target="_blank" rel="noopener noreferrer"> 
                        <img src = {getImageUrl("footer/resume.png")} alt="Resume"  className={styles.icon} />    
                        </a>
                    </li>
                    <li>
                        <a href=" https://github.com/RishabhP10" target="_blank" rel="noopener noreferrer"> 
                        <img src = {getImageUrl("footer/github.png")} alt="Github"  className={styles.icon} />    
                        </a>
                    </li>
                </ul>
                <p>© {new Date().getFullYear()} Rishabh Pathak. All Rights Reserved.</p>
            </footer>
        )
}