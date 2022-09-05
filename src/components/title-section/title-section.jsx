import React from 'react';
import styles from './title-section.module.css';

const TitleSection = () => (
  <section id="Section1" className={styles.section_1}>
       <div className={styles.section_1_container}>
            <div className={styles.section_1_container_text} >
                <h2 className={styles.container_text_tlt}>Keep nature</h2>
                <h1 className={styles.container_text_tlt2}>WILD.</h1>
            </div>
            <div className={styles.section_1_container_logos}>
                <p className={styles.container_logos_LMR}>LMR ®</p>
                <img className={styles.container_logos_solana} src="files/Images/SOLANA.svg" alt=""></img>
            </div>
       </div>
    </section>
);

TitleSection.propTypes = {};

TitleSection.defaultProps = {};

export default TitleSection;
