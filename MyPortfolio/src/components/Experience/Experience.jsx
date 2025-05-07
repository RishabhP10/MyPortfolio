import React from "react";
import styles from "./Experience.module.css";
import certificate from "../../data/certificate.json"
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
export const Experience = () => {
    return (

        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    certificate.map((certificate,id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}><img src={getImageUrl(certificate.imageSrc)} alt={certificate.title} /></div>
                            <p>
                                <a href={certificate.link} target="_blank" rel="noopener noreferrer"
                                className={styles.certificateLink}
                                >
                            {certificate.title}
                            </a>
                            </p>
                            
                        </div>
                    })}

                </div>

                <ul className={styles.history}>
                    {
                        history.map((historyItem,id) => {
                            return <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)} 
                                alt= {`${historyItem.organisation} Logo`}/>

                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role} , ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experiences.map((experiences,id) => {
                                        return <li key={id}>{experiences}</li>
                                    })}</ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>


        </section>



    );

    
}