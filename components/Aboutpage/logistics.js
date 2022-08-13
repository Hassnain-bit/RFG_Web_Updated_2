import Image from "next/image";
import styles from "../../styles/Aboutpage/index.module.scss";
 
const Logistics = () => {
  return (
    <div className={`${styles.logistics} container-fluid g-0 mt-lg-0`}>
      <div className="row gx-0">
        <div
          className={`col-lg-5 col-md-12 ${styles.logistics__image_container}`}
        >
          <Image
            src="/static/images/logistics.png"
            alt="truck"
            layout="fill"
            priority
            objectFit="cover"
            objectPosition="top left"
            placeholder="blur"
            quality={80}
            blurDataURL="/static/images/logistics.png"
          />
        </div>
        <div className={`col-lg-7 col-md-12 ${styles.features}`}>
          <p className={`${styles.logistics__sub} mb-3 text-lg-start`}>Why Choose</p>
          <h2 className={`${styles.logistics__heading} mb-5 mb-lg-4 text-lg-start`}>RFG Logistics</h2>
          <div
            className={`${styles.logistics__feature_points} d-flex flex-column flex-lg-column flex-md-row flex-sm-col`}
          >
            <ul className="row mx-0  ">
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />

                <span className={styles.logistics__list_item}>
                  Deliver in all GCC Countries and MENA Regions.
                </span>
              </li>
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                  We ensure complete security.
                </span>
              </li>
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                  Clearance and compliance service.
                </span>
              </li>
            </ul>
            <ul className="row  mx-0  row2 px-md-3 px-lg-0">
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                  Daily Update to client about cargo & deliver on time.
                </span>
              </li>
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                  Drive Continuous Improvement.
                </span>
              </li>
              <li className={styles.logistics__qualities}>
                <CheckMarkImage src="/static/images/check-mark.png" />
                <span className={styles.logistics__list_item}>
                  Deliver Environmental Friendly Service.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function CheckMarkImage({ src = null }) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={src}
        alt="check mark"
        layout="fill"
        objectFit="contain"
        objectPosition="top left"
      />
    </div>
  );
}

export default Logistics;
