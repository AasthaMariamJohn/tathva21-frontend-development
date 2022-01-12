import { useUserContext } from "@/context/userContext";
import axios from "axios";

function RazerPay({ event,user }) {

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/pay`,
        {
          user: {
            id: user.id,
          },
          paymentType: "event",
          entity: {
            id: event.id,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      )
      .then((result) => {
        if (!result) {
          alert("Server error. Are you online?");
          return;
        }
        const { amount, currency, orderId } = result.data;
        var razorPayOptions = {
          key: "",
          currency: "INR",
          name: "Tathva Bootcamp",
          order_id: orderId,
          description:`${event.name}`,
          prefill: {
            name: "amal",
            email: user.email,
            contact: "+91 1234567891",
          },
          handler: async function (response) {
            
            const data={
              order_id:orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              payload:{
                payment:{
                  entity:{
                    order_id:response.razorpay_order_id
                  }
                }
              }
            }
            axios
              .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/paymentComplete`,
                data,
                {
                  headers: {
                    Authorization: `Bearer ${user.jwt}`,
                    'x-razorpay-signature':response.razorpay_signature,
                  },
                }
              )
              .then((result) => {
                console.log(result.data.msg);
              });
          },
          theme: {
            color: "#61dafb",
          },
        };
        const paymentObject = new window.Razorpay(razorPayOptions);
        paymentObject.open();
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Buy React now!</p>
        <button className="App-link" onClick={displayRazorpay}>
          Pay ₹500
        </button>
      </header>
    </div>
  );
}

export default RazerPay;
