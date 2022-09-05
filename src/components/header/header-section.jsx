import React from 'react';
import styles from './header-section.module.css';
import { Link } from 'react-scroll'


const HeaderSection = () => (
  <header>
    <li className={styles.header_item}> 
    <Link  className={styles.header_logo} smooth={true} offset={-80} to="Section1">
    <img className={styles.header_logo} src="files/images/logo.svg" alt="">
        </img>
        </Link>
    </li>
       
        <div className={styles.navigation_header}>
            <nav className={styles.nav}>
                <li className={styles.nav_home} >
                    <Link activeClass='active' offset={-80} smooth={true} spy to="Section1">
                       <a href="#/">Home</a>
                    </Link>
                </li>
                <li className={styles.nav_manifiesto} href="#">
                    <Link activeClass='active' smooth={true} offset={-80} spy to="manifest_section">
                        <a href="#/">Manifiesto</a>
                    </Link>
                </li>
                <li className={styles.nav_roadmap} href="#">
                    <Link activeClass='active' smooth={true} offset={-80} spy to="roadmap_section">
                        <a href="#/">Roadmap</a>
                    </Link>
                </li>
                <li className={styles.nav_faq} href="#">
                    <Link activeClass='active' smooth={true} offset={-80} spy to="faq_section">
                        <a href="#/">FAQ</a>
                    </Link>
                </li>
            </nav>
            <div className={styles.solana}>
                <li>
                    <Link activeClass='active' smooth={true} offset={-80} spy to="solanaPrice_section">
                            <a href="#/">Solana Tracker</a>
                    </Link>
                </li>
            </div>
        </div>
    </header>
);

HeaderSection.propTypes = {};

HeaderSection.defaultProps = {};

export default HeaderSection;
