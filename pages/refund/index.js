import Overlay from "@/components/common/overlay";
import style from "@/components/refund/refund.module.css";

const refund = () => {
  return (
    <Overlay>
      <div className={style.container}>
        <div className={style.div}>
          <h1 className={style.h1}>Refund Policy</h1>
          <p className={style.p}>
            In case of any payment is made for any particular, there is no
            cancellation or refund policy. Any issue pertaining to this will be
            dealt with an individual basis with a point of contact from Tathva
            Team, Contact us If you have any further queries,"(Details)"
          </p>
        </div>
      </div>
    </Overlay>
  );
};

export default refund;
