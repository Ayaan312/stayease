import { Link } from "react-router-dom";

function Navbar() {
  return (
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

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/hotels"
            className="hover:text-blue-600 transition"
          >
            Hotels
          </Link>

          <Link
            to="/wishlist"
            className="hover:text-pink-500 transition"
          >
            ❤️ Wishlist
          </Link>

          <Link
            to="/bookings"
            className="hover:text-green-600 transition"
          >
            🏨 Bookings
          </Link>

          <Link
            to="/offers"
            className="hover:text-orange-500 transition"
          >
            🎁 Offers
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-600 transition"
          >
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
          <Link to="/offers" className="nav-link">
 
</Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;