import React from 'react';
import styles from './manifest-section.module.css';

const ManifestSection = () => (
  <section id="manifest_section" className={styles.section_2}>
        <h2 className={styles.section_2_title}> MANIFIESTO</h2>
            <div className={styles.section_2_container}>
              <p className={styles.section_2_container_text}>  <strong> Vivir o sobrevivir.</strong>El lince ibérico, al igual que un ciudadano de a pie, se encuentra ante tiempos de experimentar esa dualidad diariamente: por un lado, la meta constante por poder vivir como uno idealiza; y por otro la lucha sin miramientos por sobrevivir a las pruebas que nos plantea el día a día actual de forma inesperada. </p>
              <p className={styles.section_2_container_text + " " + styles.separation}>Son <strong>tiempos de refugio</strong>, la sitiuación social y económica pide individualmente paciencia, estudio, seguridad en la toma de decisiones, agilidad y fortaleza para afrontarlas, en definitiva, listeza constante en tus movimientos, un rasgo característico del lince Ibérico..</p>
              <p className={styles.section_2_container_text + " " + styles.separation}> <strong> LMR Es el punto de unión “phygital” </strong> para todos los linces (animales y humanos) que buscan tener un espacio privado donde reunirse, aumentar su conocimiento y prepararse en equipo para seguir sobreviviendo y no dejar de crecer ocurra lo que ocurra a nuestro alrededor. Hay que seguir viviendo cada día como si fuera el último y el lince ibérico en eso es especialista desde hace varias décadas. Es el animal felino más perseguido del mundo, por lo que LMR es un conjunto de personas en peligro de extinción, las cuales se pueden contar de forma exacta (1365 linces ibéricos censados en 2022 = 1365 linces digitales).</p>
              <p className={styles.section_2_container_text + " " + styles.separation}><strong> La manada de linces</strong> que conforman LMR ha iniciado un camino hacia el invierno, alejándose del bullicio de la ciudad y de la resaca veraniega, buscando la tranquilidad y sabiduría que aporta la naturaleza. En el refugio de montaña exclusivo para ellos, al que ya se dirigen, encontrarán nuevas formas de inspiración, espacios para meditar y vivir aventuras, aprender nuevos conocimientos y prácticas que les haga aumentar su valor individual y grupal, para que así una vez terminado la larga travesía, que aparentemente se nos presenta en términos económicos y sociales, cada lince pueda volver a la ciudad cargado de nuevas herramientas que le permitan sobrevivir mejor cada día de su vida a las pruebas diarias del mundo actual, pero siempre manteniendo su naturaleza salvaje.</p>
            </div>
    </section>
);

ManifestSection.propTypes = {};

ManifestSection.defaultProps = {};

export default ManifestSection;
