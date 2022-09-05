import styles from './App.css';
import HeaderSection from './components/header/header-section'
import TitleSection from './components/title-section/title-section';
import ManifestSection from './components/manifest-section/manifest-section';
import RoadmapSection from './components/roadmap-section/roadmap-section';
import ArtSection from './components/art-section/art-section';
import UtilitiesSection from './components/utilities-section/utilities-section';
import FaqSection from './components/faq-section/faq-section';
import FooterSection from './components/footer-section/footer-section';
import RoadmapMobile from './components/roadmap-mobile/roadmap-mobile';
import SolanaPriceSection from './components/solanaPrice-section/solanaPrice-section';



function App() {
  return (
    <>
    <HeaderSection></HeaderSection>
    <TitleSection></TitleSection>
    <ManifestSection></ManifestSection>
    <RoadmapSection className={styles.roadmap}></RoadmapSection>
    <RoadmapMobile className={styles.roadmap_mobile}></RoadmapMobile>
    <ArtSection></ArtSection>
    <UtilitiesSection></UtilitiesSection>
    <FaqSection></FaqSection>
    <SolanaPriceSection></SolanaPriceSection>
    <FooterSection></FooterSection>
    </>
  );
}

export default App;
