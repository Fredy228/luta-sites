import { GetStaticProps, type NextPage } from "next";

import styles from "./home.module.scss";

import Header from "@/components/ui/header/header";
import HeaderDynamic from "@/components/ui/header/header-dynamic";
import IntroHome from "@/screens/home/intro/intro";

import introBg from "@/../public/img/intro/intro-bg.webp";
import Gallery from "@/screens/home/gallary/gallery";
import SteelCutting from "@/screens/home/steel-cutting/steel-cutting";
import Milling from "@/screens/home/steel-cutting/milling";
import NavPortfolio from "@/screens/home/nav-portfolio/nav-portfolio";
import OurMachines from "@/screens/home/our-machines/our-machines";
import SendFileForCalc from "@/screens/home/send-file-for-calc/send-file-for-calc";
import PriceList from "@/screens/home/price-list/price-list";
import CalcOrder from "@/screens/home/calc-orders/calc-order";
import FAQ from "@/screens/home/faq/faq";
import Map from "@/components/ui/map/map";
import Footer from "@/components/ui/footer/footer";
import { GalleryItem, GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";

type Props = {
  galleryLastWork: GalleryItem[];
};
const Home: NextPage<Props> = ({ galleryLastWork }) => {
  return (
    <>
      <div
        className={styles.home_intro}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.45) 40%), url(${introBg.src})`,
        }}
      >
        <Header />
        <HeaderDynamic />
        <IntroHome />
      </div>
      <main>
        <Gallery list={galleryLastWork} />
        <SteelCutting />
        <Milling />
        <NavPortfolio />
        <OurMachines />
        <SendFileForCalc />
        <PriceList />
        <CalcOrder />
        <FAQ />
        <Map />
        <Footer />
      </main>
    </>
  );
};

export default Home;
