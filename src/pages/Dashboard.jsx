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

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard 📊
        </h1>

        <p className="mt-3 text-blue-100">
          Welcome back! Manage your bookings and revenue.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-500">Bookings</h2>
          <p className="text-4xl font-bold text-blue-600">
            {bookings.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-4xl font-bold text-green-600">
            ₹{revenue.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-500">Hotels</h2>
          <p className="text-4xl font-bold text-purple-600">
            20
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-500">Wishlist</h2>
          <p className="text-4xl font-bold text-red-600">
            {wishlist.length}
          </p>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-5">
          Monthly Bookings
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

            {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✅ New Booking Received</li>
            <li>❤️ Wishlist Updated</li>
            <li>💳 Payment Successful</li>
            <li>🏨 Hotel Added</li>
            <li>⭐ New Review Received</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Quick Stats
          </h2>

          <div className="space-y-3 text-gray-700">
            <p>⭐ Average Rating : <span className="font-bold">4.8</span></p>
            <p>👤 Active Users : <span className="font-bold">1,250</span></p>
            <p>🏨 Available Hotels : <span className="font-bold">20</span></p>
            <p>💰 Monthly Revenue : <span className="font-bold">₹2,50,000</span></p>
            <p>📅 Today's Bookings : <span className="font-bold">12</span></p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;