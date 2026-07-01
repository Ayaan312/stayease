import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");

  const handleAdminLogin = () => {
    if (password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      setShowModal(false);
      setPassword("");
      navigate("/dashboard");
    } else {
      alert("Wrong Password");
      setPassword("");
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-blue-600"
          >
            StayEase
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link to="/hotels" className="hover:text-blue-600 transition">
              Hotels
            </Link>

            <Link to="/wishlist" className="hover:text-pink-500 transition">
              ❤️ Wishlist
            </Link>

            <Link to="/bookings" className="hover:text-green-600 transition">
              🏨 Bookings
            </Link>

            <Link to="/offers" className="hover:text-orange-500 transition">
              🎁 Offers
            </Link>

            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </Link>

            {/* Secret Admin Button */}
            <button
              onClick={() => setShowModal(true)}
              className="text-2xl hover:scale-110 transition"
              title="Admin"
            >
              🔐
            </button>

          </div>
        </div>
      </nav>

      {/* Admin Password Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl">

            <h2 className="text-2xl font-bold text-center mb-4">
              Admin Login
            </h2>

            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg p-3 mb-5 outline-none focus:border-blue-500"
            />

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setPassword("");
                }}
                className="w-1/2 bg-gray-300 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={handleAdminLogin}
                className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;