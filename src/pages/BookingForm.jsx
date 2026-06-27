import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(form);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    alert("Booking Confirmed 🎉");

    navigate("/bookings");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold mb-6">
          Hotel Registration
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 w-full mb-4 rounded"
          required
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border p-3 w-full mb-4 rounded"
          required
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          type="date"
          className="border p-3 w-full mb-4 rounded"
          required
          onChange={(e) =>
            setForm({ ...form, checkIn: e.target.value })
          }
        />

        <input
          type="date"
          className="border p-3 w-full mb-4 rounded"
          required
          onChange={(e) =>
            setForm({ ...form, checkOut: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Guests"
          className="border p-3 w-full mb-4 rounded"
          required
          onChange={(e) =>
            setForm({ ...form, guests: e.target.value })
          }
        />

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Confirm Booking
        </button>

      </form>
    </div>
  );
}

export default BookingForm;