import { type FC, Fragment } from "react";

import styles from "./portfolio-description.module.scss";

import Container from "@/components/reused/container/container";
import { TitleSectionBig } from "@/components/reused/common/title-section-big";
import { PortfolioDescripType } from "@/types/portfolio-descrip";
import { GalleryTypeEnum } from "@/types/gallery";
import ButtonRound from "@/components/reused/buttons/button-round";

type Props = {
  data: PortfolioDescripType;
};
const PortfolioDescription: FC<Props> = ({ data }) => {
  return (
    <section className={styles.descrip}>
      <Container>
        <div>
          <TitleSectionBig text={data.title} colorText={"light"} />
          <br />
          {data.description.map((i, idx) => {
            if (Array.isArray(i)) {
              return (
                <ul key={idx} className={styles.descrip_list}>
                  {i.map((item, index) => (
                    <li key={index} className={styles.descrip_item}>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={idx} className={styles.descrip_text}>
                {i}
              </p>
            );
          })}
          {data.sections.map((i) => (
            <Fragment key={i.id}>
              <h3 className={styles.descrip_title}>{i.title}</h3>
              {i.text.map((item, index) => {
                if (Array.isArray(item)) {
                  return (
                    <ul key={index} className={styles.descrip_list}>
                      {item.map((ii, idxx) => (
                        <li key={idxx} className={styles.descrip_item}>
                          {ii}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={index} className={styles.descrip_text}>
                    {item}
                  </p>
                );
              })}
            </Fragment>
          ))}
          <div
            style={{
              textAlign: "center",
              paddingTop: "30px",
            }}
          >
            <ButtonRound text={"На главную"} isLink={true} link={`/`} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioDescription;
