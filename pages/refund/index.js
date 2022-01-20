import Overlay from "@/components/common/overlay";
import style from "@/components/refund/refund.module.css";
import Head from "next/head";

const refund = () => {
  return (
    <Overlay>
      <Head>
        <title>Refund</title>
      </Head>
      <div className={style.container}>
        <div className={style.div}>
          <h1 className={style.h1}>Refund Policy</h1>
          <p className={style.p}>
            In case of any payment is made for any particular, there is no
            cancellation or refund policy. Any issue pertaining to this will be
            dealt with an individual basis with a point of contact from Tathva
            Team, Contact us If you have any further queries,&quot;Details)&quot;
          </p>
        </div>
      </div>
    </Overlay>
  );
};

export default refund;
