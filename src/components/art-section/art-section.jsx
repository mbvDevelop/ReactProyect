import React from 'react';
import styles from './art-section.module.css';

const ArtSection = () => (
  <>
  <section className={styles.section_4}>
        <h2 className={styles.section_4_title}>Art</h2>
         <div className={styles.section_4_container}>
           <div className={styles.section_4_container_text}>
                <p className={styles.section_4_container_text_p}>La línea artística de la colección surgió tras querer dar a los linces ibéricos reales una identidad digital que fuera atractiva para el gran público. Parte de los planes de conservación del Lince se basan en la concienciación, y pensamos que qué mejor forma de hacerlo que ¨humanizándolos”, para así hacer sentir al inversor del proyecto una relación estrecha con su NFT al encontrarle rasgos, gestos, prendas y complementos que podría llevar cualquier persona hoy en día.</p>
           </div>
           <img className={styles.section_4_container_img} src="files/Images/art.svg" alt=""></img>
         </div>        
    </section>
    </>
);

ArtSection.propTypes = {};

ArtSection.defaultProps = {};

export default ArtSection;
