import Overlay from "@/components/common/overlay";
import style from "@/components/privacy/privacy.module.css";

const privacy = () => {
  return (
    <Overlay>
      <div className={style.container}>
        <div className={style.div}>
          <h1 className={style.h1}>Privacy Policy</h1>
          <div className={style.para}>
            <p className={style.p}>
              Privacy Policy Tathva&apos;21 operates tathva.org. This page informs
              you of our policies regarding the collection, use and disclosure
              of information we receive from users of the site. By using this
              site, you agree to the collection and use of information in
              accordance with this policy.
            </p>
            <br />
            <p className={style.p}>
              We only collect the information you choose to give us.
            </p>
            <p className={style.p}>
              We only require the minimum amount of of personal information that
              is necessary to fulfill the purpose of your interaction with us.{" "}
            </p>
            <p className={style.p}>
              All data that we collect from users will be handed over each year
              to the next
            </p>
            <p className={style.p}>
              Tathva team of coordinators. This is done in order to:
            </p>
            <p className={style.p}>
              *Help develop new services or improve our existing services.
            </p>
            <p className={style.p}>
              *To keep users informed and updated about events and information
              related to Tathva.
            </p>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default privacy;
