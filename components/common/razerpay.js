import axios from "axios";
import { toast } from "react-toastify";

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
async function displayRazorpay(event, user, paymentType, regPrice,router) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

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
        paymentType: paymentType,
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
        description: `${event.name}`,
        prefill: {
          email: user.email,
          contact: `+91 ${user.phoneNumber}`,
        },
        handler: async function (response) {
          const data = {
            order_id: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            payload: {
              payment: {
                entity: {
                  order_id: response.razorpay_order_id,
                },
              },
            },
          };
          axios
            .post(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/paymentComplete`,
              data,
              {
                headers: {
                  Authorization: `Bearer ${user.jwt}`,
                  "x-razorpay-signature": response.razorpay_signature,
                },
              }
            )
            .then((result) => {
              if (result.data.status == "ok") {
                toast.success("Payment Successfull", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            })
            .then(()=>{
              if(paymentType=="event")
                router.push(`/dashboard/events/${event.slug}?refresh=True`)
              else  if(paymentType=="workshop")
                router.push(`/dashboard/workshops/${event.slug}?refresh=True`)
              else  if(paymentType=="lecture")
                router.push(`/dashboard/lectures/${event.slug}?refresh=True`)
            })

        },
        theme: {
          color: "#61dafb",
        },
      };
      const paymentObject = new window.Razorpay(razorPayOptions);
      paymentObject.open();
    });
}


export default displayRazorpay

// function RazerPay({ event, user, paymentType, regPrice }) {
// function loadScript(src) {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// }

// async function displayRazorpay() {
//   const res = await loadScript(
//     "https://checkout.razorpay.com/v1/checkout.js"
//   );

//   if (!res) {
//     alert("Razorpay SDK failed to load. Are you online?");
//     return;
//   }

//   axios
//     .post(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/pay`,
//       {
//         user: {
//           id: user.id,
//         },
//         paymentType: paymentType,
//         entity: {
//           id: event.id,
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${user.jwt}`,
//         },
//       }
//     )
//     .then((result) => {
//       if (!result) {
//         alert("Server error. Are you online?");
//         return;
//       }
//       const { amount, currency, orderId } = result.data;
//       var razorPayOptions = {
//         key: "",
//         currency: "INR",
//         name: "Tathva Bootcamp",
//         order_id: orderId,
//         description: `${event.name}`,
//         prefill: {
//           email: user.email,
//           contact: `+91 ${user.phoneNumber}`,
//         },
//         handler: async function (response) {
//           const data = {
//             order_id: orderId,
//             razorpayPaymentId: response.razorpay_payment_id,
//             razorpayOrderId: response.razorpay_order_id,
//             razorpaySignature: response.razorpay_signature,
//             payload: {
//               payment: {
//                 entity: {
//                   order_id: response.razorpay_order_id,
//                 },
//               },
//             },
//           };
//           axios
//             .post(
//               `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/paymentComplete`,
//               data,
//               {
//                 headers: {
//                   Authorization: `Bearer ${user.jwt}`,
//                   "x-razorpay-signature": response.razorpay_signature,
//                 },
//               }
//             )
//             .then((result) => {
//               if (result.data.status == "ok") {
//                 toast.success("Payment Successfull", {
//                   position: "top-right",
//                   autoClose: 5000,
//                   hideProgressBar: false,
//                   closeOnClick: true,
//                   pauseOnHover: true,
//                   draggable: true,
//                   progress: undefined,
//                 });
//               }
//             });
//         },
//         theme: {
//           color: "#61dafb",
//         },
//       };
//       const paymentObject = new window.Razorpay(razorPayOptions);
//       paymentObject.open();
//     });
// }

//   return (
//     <button  className={style.button} data-augmented-ui onClick={displayRazorpay}>
//       Pay ₹{regPrice}
//     </button>
//   );
// }

// export default RazerPay;
