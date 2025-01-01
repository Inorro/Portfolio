import React from 'react';
import { getImageURL } from '../../utils';
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
    }) => {
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={getImageURL(imageSrc)}
                alt={`Image of ${title}`}>
            </img>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    )
}