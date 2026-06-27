import { useNavigate } from "react-router-dom";

function Payment() {

  const navigate = useNavigate();

  const handlePayment = () => {

    alert("Payment Successful");

    navigate("/bookings");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded">

      <h1 className="text-3xl font-bold mb-5">
        Payment
      </h1>

      <input
        type="text"
        placeholder="Card Number"
        className="border p-3 w-full mb-3"
      />

      <input
        type="text"
        placeholder="Card Holder Name"
        className="border p-3 w-full mb-3"
      />

      <button
        onClick={handlePayment}
        className="bg-green-600 text-white w-full py-3 rounded"
      >
        Pay Now
      </button>

    </div>
  );
}

export default Payment;