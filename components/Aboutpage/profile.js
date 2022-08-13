import styles from "../../styles/Aboutpage/index.module.scss";
 

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h2>Company Profile</h2>
      <p className={styles.profile__text}>
        As a world-class provider of innovative logistics and supply-chain
        services and solutions, RFG Logistics has an extensive network in all
        GCC countries. Providing advanced customer-specific solutions through
        our value-creating services and IT technology in supply-chain
        management, RFG Logistics&apos; comprehensive service network and
        platforms will allow you to make all the Right Moves for your business.
        <br />
        <br />
        Our dedicated and experienced professionals always provide you with
        tailor-made logistics solutions, customized to your particularneeds. RFG
        Logistics focuses on serving customers with global sourcing and
        supply-chain-management needs, creating value through innovative
        end-to-end international logistics programs.
        <br />
        <br />
        We are also a leader in providing sophisticated transportation,
        warehousing and distribution services in the mainland United Arab
        Emirates offering professional and efficient 3PL and 4PL solutions. As a
        global company based in GCC Region, RFG Logistics is exceptionally
        positioned to serve both international and domestic customers in the
        world&apos;s fastest-growing markets.
      </p>
    </div>
  );
};

export default Profile;
