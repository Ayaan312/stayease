import { useNavigate } from "react-router-dom";
import { fakePayment } from "../api/fakePayment";

function Payment() {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const result = await fakePayment();

      alert(result.message);

      console.log(result);

      navigate("/bookings");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Payment
        </h1>

        <input
          type="text"
          placeholder="Card Number"
          className="border border-gray-300 p-3 w-full rounded mb-4"
        />

        <input
          type="text"
          placeholder="Card Holder Name"
          className="border border-gray-300 p-3 w-full rounded mb-4"
        />

        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          className="border border-gray-300 p-3 w-full rounded mb-4"
        />

        <input
          type="password"
          placeholder="CVV"
          className="border border-gray-300 p-3 w-full rounded mb-6"
        />

        <button
          onClick={handlePayment}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;