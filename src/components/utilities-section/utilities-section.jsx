import React from 'react';
import styles from './utilities-section.module.css';

const UtilitiesSection = () => (
  <>
   <section className={styles.section_5}>
        <h2 className={styles.section_5_title}>Utilidades</h2>
        <div className={styles.section_5_cards}>
            <div className={styles.section_5_card_1}>
                <div className={styles.card_1_img}></div>
                <div className={styles.section_5_card_text_1}>
                  <h1 className={styles.section_5_card_text_title}>Globals</h1>
                  <p className={styles.section_5_card_text_text}>
                  Los linces nos traen utilidades para todos los Holders. Tendremos nuestra propia app, una Store, Los Premios Global®, diversos descuentos con nuestros partners.
                  </p>
                </div>
            </div>
            <div className={styles.section_5_card_2}>
                <div className={styles.card_2_img}></div>
                <div className={styles.section_5_card_text_2}>
                    <h1 className={styles.section_5_card_text_title}>GEN 01</h1>
                    <p className={styles.section_5_card_text_text}>
                    En referencia a los Zeta LYNX (Gen 01), hemos querido presentar unas utilidades las cuales representan al lince humanizando a través de nuestra colección. Por eso, os traemos utilidades específicas según los traits que porte tu NFT y que irán asociados a las utilidades específicas que ofrecen nuestros Partners.
                    </p>
                  </div>
            </div>
            <div className={styles.section_5_card_3}>
                <div className={styles.card_3_img}></div>
                <div className={styles.section_5_card_text_3}>
                    <h1 className={styles.section_5_card_text_title}>GEN 02</h1>
                    <p className={styles.section_5_card_text_text}>
                    Para los Stranger Lynx queremos mostrar la otra imagen de los Linces. Estas utilidades las desvelaremos más adelante.
                    </p>
                  </div>
            </div>
        </div>
    </section>
  </>
);

UtilitiesSection.propTypes = {};

UtilitiesSection.defaultProps = {};

export default UtilitiesSection;
