import Image from "next/image";
import styles from "../../styles/Aboutpage/index.module.scss";
import BgContainerImage from "../common/bgContainerImage";

const Description = () => {
  return (
    <div className={styles.description}>
      <BgContainerImage src="/static/images/description-image.png" />
      <h6 className="text-white">Who Are We</h6>
      <h2 className={styles.description__title}>About Us</h2>
      <p className={styles.description__text}>
        RFG Logistics LLC is a registered and licensed Freight Packaging &
        Logistics Services Company that is based in Dubai &minus; United Arab
        Emirates. We are in business to provide services such as Freight
        Forwarding in MENA Region and packing goods for transportation, crating
        goods for transportation, and wrapping goods for transportation, freight
        consolidation, trade document preparation destination, storing goods
        prior to and after freight, physical distribution consulting and
        logistics consulting and others.
        <br />
        <br />
        RFG Logistics LLC has been able to secure all relevant licenses and
        permits to operate throughout the United Arab Emirates and all GCC
        countries ( Saudi Arabia, Qatar, Oman, Bahrain, Jordan, and Kuwait ). We
        will ensure that we abide by the rules and regulations guiding The
        Logistics industry.
        <br />
        <br />
        We prioritize and tailor our client&apos;s requirements, all objectives
        will be followed by our values and professional ethics. We will ensure
        that we hold ourselves accountable to the highest standards by meeting
        our client&apos;s needs precisely and completely.
      </p>
    </div>
  );
};

export default Description;
