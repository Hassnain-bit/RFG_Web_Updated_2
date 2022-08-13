import React from "react";
import styles from "../../../styles/Special.module.scss";
import GeneralHeading from "../../Common/GeneralHeading";
import Image from "next/image";
import MenImg from "../../../public/static/homeImages/men_img.png";
import SpecialItem from "./SpecialItem";
import MissionIcon from "../../../public/static/homeImages/mission_icon.png";
import CommitementIcon from "../../../public/static/homeImages/commitement_icon.png";
import EthicsIcon from "../../../public/static/homeImages/ethics_icon.png";
import SustainabilityIcon from "../../../public/static/homeImages/sustainability_icon.png";

function Special() {
  return (
    <>
      <div className={styles.special}>
        <GeneralHeading
          small_Title={"OUR GOODNESS"}
          large_Title={"What Makes Us Special"}
        />

        <div className="container">
          <div className={styles.s_inner}>
            <div className={styles.s_img_holder}>
              <div className={styles.s_men_img}>
                <Image
                  alt="men_img"
                  src={MenImg}
                  priority={true}
                  layout="responsive"
                  width={307}
                  height={499}
                />
              </div>
            </div>

            <div className={styles.s_content}>
              <div className={`${styles.custom_row} row`}>
                <SpecialItem
                  icon={MissionIcon}
                  title={"Mission"}
                  desc={
                    "We transport permitted good on land with in GCC and MENA region countries safely and sustainably."
                  }
                />

                <SpecialItem
                  icon={CommitementIcon}
                  title={"Commitement"}
                  desc={
                    "We are committed to our work and we will deliver your shipment always on time."
                  }
                />

                <SpecialItem
                  icon={EthicsIcon}
                  title={"Ethics"}
                  desc={
                    "RFG Logistics LLC is an ethical company. We do not compromise on good governance."
                  }
                />

                <SpecialItem
                  icon={SustainabilityIcon}
                  title={"Sustainability"}
                  desc={
                    "Our target is to be environment friendly and sustainable growth by providing the best services."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Special;
