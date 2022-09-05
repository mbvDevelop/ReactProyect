import React from 'react';
import styles from './footer-section.module.css';
const FooterSection = () => (
  <>
  <footer>
       <div className={styles.footer_container}>
        <div className={styles.footer_container_logo}>
            <img className={styles.footer_container_logo_img} src="files/Images/logoprincipal.svg" alt=""></img>
            <p className={styles.footer_container_logo_parrafo}>Professional NFTs Creators team of Spain</p>
        </div>
       </div>
       <div className={styles.footer_reserved}>LYNX mountain refuge ® 2022 all rights reserved</div>
    </footer>                                                                                                                          
</>
);

FooterSection.propTypes = {};

FooterSection.defaultProps = {};

export default FooterSection;
