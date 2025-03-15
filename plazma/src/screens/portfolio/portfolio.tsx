import { NextPage } from "next";

import stylesHome from "@/screens/home/home.module.scss";
import styles from "./portfolio.module.scss";

import Header from "@/components/ui/header/header";
import HeaderDynamic from "@/components/ui/header/header-dynamic";
import { listNavigationPortfolio } from "@/components/ui/header/list-nav";
import { GalleryItem } from "@/types/gallery";
import Gallery from "@/screens/home/gallary/gallery";
import Map from "@/components/ui/map/map";
import Footer from "@/components/ui/footer/footer";
import SendFileForCalc from "@/screens/home/send-file-for-calc/send-file-for-calc";
import { PortfolioDescripType } from "@/types/portfolio-descrip";
import PortfolioDescription from "@/screens/portfolio/description/portfolio-decription";

type Props = {
  galleryPortfolio: GalleryItem[];
  title: string;
  text?: string;
  description?: PortfolioDescripType;
};
const Portfolio: NextPage<Props> = ({
  galleryPortfolio,
  text,
  title,
  description,
}) => {
  return (
    <>
      <div className={styles.portfolio_intro}>
        <Header listMenu={listNavigationPortfolio} />
        <HeaderDynamic listMenu={listNavigationPortfolio} />
        <Gallery
          text={text}
          title={title}
          list={galleryPortfolio}
          colorTitle={"light"}
        />
      </div>
      <main>
        <SendFileForCalc />
        {description && <PortfolioDescription data={description} />}
        <Map />
        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
