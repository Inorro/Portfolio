import React from 'react'
import { getImageURL } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Roni Mujku</h1>
            <p className={styles.description}>
            Ambitious and driven computer science student looking for work in software development. I am a programmer with 3 years of experience in computer science, and a massive passion for web development including integrated website builders such as bubble.io and full stack web development.
            </p>
            <a className={styles.contactBtn} href='mailto:ronimujku@gmail.com'>Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageURL("hero/heroImage.png")} alt='Hero image'></img>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
