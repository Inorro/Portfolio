import React from 'react'
import styles from "./About.module.css"
import { getImageURL } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageURL("about/cursorIcon.png")}
                    alt='Cursor Icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building sites in React and Django</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageURL("about/serverIcon.png")}
                    alt='Server Icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and
                        optimised back-end systems as well as implementing API's</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageURL("about/uiIcon.png")}
                    alt='UI Icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>UI Developer</h3>
                        <p>I have designed and contributed to the design of multiple web apps in a professional and non-professional capacity</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
