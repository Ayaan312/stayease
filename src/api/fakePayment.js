export const fakePayment = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.9;

      if (success) {
        resolve({
          success: true,
          transactionId: "TXN" + Date.now(),
          message: "Payment Successful",
        });
      } else {
        reject({
          success: false,
          message: "Payment Failed. Please Try Again.",
        });
      }
    }, 2000);
  });
};