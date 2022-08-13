import Image from "next/image";
import styles from "../../styles/Aboutpage/index.module.scss";
import BgContainerImage from "../common/bgContainerImage";
const Title = () => {
  return (
    <div className={styles.title}>
      <BgContainerImage src="/static/images/title.png" />
      <h1 className={styles.title__heading}>ABOUT US</h1>
    </div>
  );
};

export default Title;
