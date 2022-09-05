import React from 'react';
import styles from './faq-section.module.css';

const FaqSection = () => (
  <section  id="faq_section"  className={styles.section_6}>
        <h2 className={styles.section_6_title}>FAQ</h2>
        <div className={styles.centre}>
          <div className={styles.section_6_cards}>
              <div className={styles.flip_card}>
                  <div className={styles.flip_card_inner}>
                    <div className={styles.section_6_cards_faq_front + " " + styles.background1}>
                      <h3 className={styles.section_6_faq_title + " " + styles.size2} > QUÉ ES LMR?</h3>
                      <p  className={styles.section_6_faq_number}>01</p>
                    </div>
                    <div className={styles.section_6_cards_faq_back}>
                      <p>Lynx Mountain Refuge es la primera colección de nfts española que permite a sus holders 
                      ayudar en la conservación del animal más protegido y perseguido del país, el lince ibérico, a través de las criptomonedas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.flip_card}>
                  <div className={styles.flip_card_inner}>
                    <div className={styles.section_6_cards_faq_front + " " + styles.background2}>
                      <h3 className={styles.section_6_faq_title}> CÓMO CONSIGO WL?</h3>
                      <p  className={styles.section_6_faq_number}>02</p>
                    </div>
                    <div className={styles.section_6_cards_faq_back}>
                      <p>En el discord de LMR podrás encontrar el formulario de aplicación para la whitelist en el cuál deberás responder unas preguntas para que el equipo pueda valorar si eres apto para obtenerla. 
                      </p>
                    </div>
                  </div>
                </div>           
                <div className={styles.flip_card}>
                  <div className={styles.flip_card_inner}>
                    <div className={styles.section_6_cards_faq_front + " " + styles.background3}>
                      <h3 className={styles.section_6_faq_title}> CUAL ES EL SUPPLY?</h3>
                      <p  className={styles.section_6_faq_number}>03</p>
                    </div>
                    <div className={styles.section_6_cards_faq_back}>
                      <p>
                          El supply está divido en 3 baches. El primero (GenZ) cuenta con 1’100 Lynx y 11 legendarios,  el segundo (StrangerLynx) con otros 1’111 y por último los BabyLynx, los cuales únicamente habrá 259, de aquellos que consigan la pareja de macho y hembra de la GenZ.
                          </p>
                    </div>
                  </div>
                </div>                  
          </div>
          <div className={styles.section_6_cards}>
          <div className={styles.flip_card + " " + styles.move}>
                  <div className={styles.flip_card_inner}>
                    <div className={styles.section_6_cards_faq_front + " " + styles.background4}>
                      <h3 className={styles.section_6_faq_title}> CUANDO ES EL MINT?</h3>
                      <p  className={styles.section_6_faq_number}>04</p>
                    </div>
                    <div className={styles.section_6_cards_faq_back}>
                      <p>
                          El mint se realizará en un evento físico en una villa y retransmitido para el público el día 11 de septiembre, haciendo referencia al supply de la colección.
                          
                      </p>
                    </div>
                  </div>
                </div>         
                <div className={styles.flip_card + " " + styles.move}>
                  <div className={styles.flip_card_inner}>
                    <div className={styles.section_6_cards_faq_front + " " + styles.background5}>
                      <h3 className={styles.section_6_faq_title}> DONDE SERA EL MINT?</h3>
                      <p  className={styles.section_6_faq_number}>05</p>
                    </div>
                    <div className={styles.section_6_cards_faq_back}>
                      <p>El mint se realizará a través de la plataforma de lanzamiento LaunchMyNft.
                      El minteo se realizará a través de un evento físico con invitados y retransmitido al público en plataformas de streaming
                      </p>
                    </div>
                  </div>
                </div>          
                <div className={styles.flip_card + " " + styles.move}>
                  <div className={styles.flip_card_inner}>
                    <div className={styles.section_6_cards_faq_front + " " + styles.background6}>
                      <h3 className={styles.section_6_faq_title}> POR QUÉ EN SOLANA?</h3>
                      <p  className={styles.section_6_faq_number}>06</p>
                    </div>
                    <div className={styles.section_6_cards_faq_back}>
                      <p>Solana tiene una de las comunidades NFT más fuertes y un gran potencial en este sector. Esto es algo muy importante para LMR ya que buscamos dar prioridad a la comunidad y trasladar a ella los valores y lo que representa un Lince
                      </p>
                    </div>
                  </div>
                </div>           
            </div>
        </div>
    </section>
);

FaqSection.propTypes = {};

FaqSection.defaultProps = {};

export default FaqSection;
