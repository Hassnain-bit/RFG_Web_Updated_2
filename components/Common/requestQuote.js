 
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Aboutpage/index.module.scss";
import BgContainerImage from "../common/bgContainerImage";
const RequestQuote = () => {
  return (
    <div className={styles.cta}>
      <BgContainerImage src="/static/images/cta--image.png" />
      <h3 className={styles.cta__title}>Request a Free Quote</h3>
      <a className={`${styles.btn} btn-light`} href="#">
        Request Quote
      </a>
    </div>
  );
};

export default RequestQuote;
