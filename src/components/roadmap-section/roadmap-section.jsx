import React from 'react';
import styles from './roadmap-section.module.css';

const RoadmapSection = () => (
  <><section id="roadmap_section" className={styles.section_3}>
    <h2 className={styles.section_3_title}>ROADMAP</h2>
    <div className={styles.section_3_container}>
      <div className={styles.section_3_container_1}>
        <div className={styles.container_1_box}>
          <img className={styles.container_1_box_img} src="files/Images/caja1.png" alt=""></img>
          <ul className={styles.container_1_box_text}>
            <li className={styles.text_1 + " " + styles.decoration}>RR.SS & Web</li>
            <li className={styles.text_1 + " " + styles.decoration}>Completar el equipo</li>
            <li className={styles.text_1 + " " + styles.decoration}>Primer AMA & Giveaway oficial</li>
            <li className={styles.text_1 + " " + styles.decoration}>Crear Documentacion</li>
            <li className={styles.text_1 + " " + styles.decoration}>Alianza con MoonstersNFTs*</li>
          </ul>
        </div>
        <div className={styles.container_1_box + " " + styles.separation2}>
          <img className={styles.container_1_box_img} src="files/Images/caja2.png" alt=""></img>
          <ul className={styles.container_1_box_text}>
            <li className={styles.text_1}>Lanzamiento Web Oficial</li>
            <li className={styles.text_1}>Lanzamiento App Móvil <span> Solo Holders</span></li>
            <li className={styles.text_1}>Registro usuarios App <span>Solo Holders</span></li>
            <li className={styles.text_1}>Lanzamiento 1º y 2º batch</li>
            <li className={styles.text_1}>Desarrollo artístico de la Gen 02</li>
            <li className={styles.text_1}>Lanzamiento utilidades Gen 01</li>
            <li className={styles.text_1}>Inicio desarrollo LMR Store</li>
          </ul>
        </div>
        <div className={styles.container_1_box + " " + styles.separation2}>
          <img className={styles.container_1_box_img} src="files/Images/caja3.png" alt=""></img>
          <ul className={styles.container_1_box_text}>
            <li className={styles.text_1}>Lanzamiento Gen 03</li>
            <li className={styles.text_1}>Presentación utilidades Gen 03</li>
            <li className={styles.text_1}>Lanzamiento LMR Store ®</li>
            <li className={styles.text_1}>Lanzamiento última Utilidad</li>
            <li className={styles.text_1}>Organización excursiones LMR®</li>
          </ul>
        </div>
      </div>
      <img className={styles.section_3_container_img} src="files/Images/linea.svg" alt=""></img>
      <div className={styles.section_3_container_2}>
        <div className={styles.container_2_box + " " + styles.separation3}>
          <img className={styles.container_2_box_img} src="files/Images/caja4.png" alt=""></img>
          <ul className={styles.container_2_box_text}>
            <li className={styles.text_2 + " " + styles.decoration}>Lanzamiento Whitepaper V.0.1</li>
            <li className={styles.text_2 + " " + styles.decoration}>Presentación primeras Utilidades</li>
            <li className={styles.text_2 + " " + styles.decoration}>Concurso oficial de LMR ®</li>
            <li className={styles.text_2 + " " + styles.decoration}>Apertura de puertas en Discord</li>
            <li className={styles.text_2 + " " + styles.decoration}>Presentación App Móvil Holders</li>
            <li className={styles.text_2 + " " + styles.decoration}>Inicio desarrollo de la web Oficial</li>
            <li className={styles.text_2}>Desarrollo artístico de la Gen 01</li>
          </ul>
        </div>
        <div className={styles.container_2_box + " " + styles.separation2}>
          <img className={styles.container_2_box_img} src="files/Images/caja5.png" alt=""></img>
          <ul className={styles.container_2_box_text}>
            <li className={styles.text_2}>Lanzamiento 3º y 4º batch</li>
            <li className={styles.text_2}>Presentación utilidades Gen 02</li>
            <li className={styles.text_2}>Asignación Rol @Familynx</li>
            <li className={styles.text_2}>Lanzamiento Whitelist Gen 03</li>
            <li className={styles.text_2}>Desarrollo artístico de la Gen 03</li>
          </ul>
        </div>
        <div className={styles.container_2_box + " " + styles.separation2}>
          <img className={styles.container_2_box_img} src="files/Images/caja6.png" alt=""></img>
          <ul className={styles.container_2_box_text}>
            <li className={styles.text_2}>Por anunciar</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  </>
);

RoadmapSection.propTypes = {};

RoadmapSection.defaultProps = {};

export default RoadmapSection;
