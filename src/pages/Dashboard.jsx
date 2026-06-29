import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const bookingData =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const wishlistData =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setBookings(bookingData);
    setWishlist(wishlistData);
  }, []);

  const revenue = bookings.reduce(
    (total, hotel) => total + (Number(hotel.price) || 0),
    0
  );

  const data = [
    { month: "Jan", bookings: 12 },
    { month: "Feb", bookings: 18 },
    { month: "Mar", bookings: 25 },
    { month: "Apr", bookings: 30 },
    { month: "May", bookings: 42 },
    { month: "Jun", bookings: 55 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard 📊
      </h1>

      {/* Statistics Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Bookings</h2>
          <p className="text-3xl font-bold text-blue-600">
            {bookings.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-3xl font-bold text-green-600">
            ₹{revenue.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Hotels</h2>
          <p className="text-3xl font-bold text-purple-600">
            20
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Wishlist</h2>
          <p className="text-3xl font-bold text-red-600">
            {wishlist.length}
          </p>
        </div>

      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-5">
          Monthly Bookings
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="bookings"
              fill="#2563eb"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;