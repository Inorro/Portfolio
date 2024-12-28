import React from 'react'
import { getImageURL } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageURL("contact/emailIcon.png")} alt='Email Icon'/>
                    <a href='mailto:ronimujku@gmail.com'>ronimujku@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("contact/linkedinIcon.png")} alt='Linkedin Icon'/>
                    <a target="_blank" href='https://www.linkedin.com/in/roni-mujku-8b2318251/'>linkedin.com/ronimujku</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("contact/githubIcon.png")} alt='Github Icon'/>
                    <a target="_blank" href='https://github.com/Inorro'>github.com/Inorro</a>
                </li>
            </ul>
        </footer>
    )
}
