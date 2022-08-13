import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/general/footer.module.scss";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className="row">
          <div className={`${styles.logo} col-lg-5 col-md-6 col-sm-12`}>
            <h1 className={styles.footer__logo}>LOGO</h1>
            <p className={styles.footer__logo_content}>
              RFG Logistics LLC is a registered and in business to provide
              freight forwarding in MENA region and In all GCC countries through
              Air, Land, Sea. Sound great!
              <br />
              <a className={styles.footer__logo_link} href="">
                Please read more about us
              </a>
            </p>
            <div className={styles.footer__socials}>
              <Link href="#">
                <a className={styles.footer__socials__icon}>
                  <Image
                    src="/static/images/facebook.png"
                    alt="facebook"
                    layout="fill"
                  />
                </a>
              </Link>
              <Link href="#">
                <a className={styles.footer__socials__icon}>
                  <Image
                    src="/static/images/instagram.png"
                    alt="facebook"
                    layout="fill"
                  />
                </a>
              </Link>
              <Link href="#">
                <a className={styles.footer__socials__icon}>
                  <Image
                    src="/static/images/twitter.png"
                    alt="facebook"
                    layout="fill"
                  />
                </a>
              </Link>
              <Link href="#">
                <a className={styles.footer__socials__icon}>
                  <Image
                    src="/static/images/linkedin.png"
                    alt="facebook"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className={`${styles.link_heading} col-lg-2 col-md-6 col-sm-12`}>
            <h4 className={styles.footer__link_heading}>Useful Links</h4>

            <ul className={styles.footer__menu}>
              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>Home</a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>About Us</a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>Services</a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.link_heading} col-lg-2 col-md-6 col-sm-12`}>
            <h4 className={styles.footer__link_heading}>Services</h4>

            <ul className={styles.footer__menu}>
              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>Air Freight</a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>
                    Land Transportation
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>Sea Freight</a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>Customs Clearance</a>
                </Link>
              </li>
              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>warehousing</a>
                </Link>
              </li>
              <li className={styles.footer__link}>
                <Link href="#">
                  <a className={styles.footer__link_item}>
                    Automotive Logistics
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.link_heading} col-lg-3 col-md-6 col-sm-12`}>
            <h4 className={styles.footer__link_heading}>Contact Us</h4>

            <ul
              className={
                `${styles.footer__menu + " " + styles.footer__menu__contacts} footer-contactUs-ul`
              }
            >
              <li className={styles.footer__link}>
                <div
                  style={{
                    minWidth: "33px",
                    height: "33px",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/static/images/location-pin.png"
                    layout="fill"
                    alt="map Marker"
                    className="f-location-icon"
                  />
                </div>
                
                <Link href="#">
                  <a
                    className={
                      styles.footer__link_item +
                      " " +
                      styles.footer__link_item__contact__location
                    }
                  >
                    Office# 112, Dragon Mart 2, International City, Dubai , UAE
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Image
                  src="/static/images/phone-call.png"
                  width={26}
                  height={26}
                  alt="Call Icon"
                />

                <div>
                  <Link href="#">
                    <a
                      className={
                        styles.footer__link_item +
                        " " +
                        styles.footer__link_item__contact
                      }
                    >
                      +971 58 375 465
                    </a>
                  </Link>

                  <br />
                  <Link href="#">
                    <a
                      className={
                        styles.footer__link_item +
                        " " +
                        styles.footer__link_item__contact
                      }
                    >
                      +971 58 253 684
                    </a>
                  </Link>
                </div>
              </li>

              <li className={styles.footer__link}>
                <Image
                  src="/static/images/email.png"
                  width={26}
                  height={26}
                  alt="email Icon"
                />
                <Link href=" mailto: info@rfglogistics.ae">
                  <a
                    className={
                      styles.footer__link_item +
                      " " +
                      styles.footer__link_item__contact
                    }
                  >
                    info@rfglogistics.ae
                  </a>
                </Link>
              </li>

              <li className={styles.footer__link}>
                <Image
                  src="/static/images/global.png"
                  width={26}
                  height={26}
                  alt="Earth Globe Icon"
                />
                <Link href="https://www.rfglogistics.com/">
                  <a
                    className={
                      styles.footer__link_item +
                      " " +
                      styles.footer__link_item__contact
                    }
                  >
                    www.rfglogistics.ae
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyrights}>
        <h6>@Copyright 2022 RFGroup LLC, All Rights Reserved.</h6>
      </div>
    </>
  );
};

export default Footer;
