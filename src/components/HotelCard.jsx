import { Link, useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {

  const navigate = useNavigate();

  const addWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists = wishlist.find(
      (item) => item.id === hotel.id
    );

    if (alreadyExists) {
      alert("Hotel already in Wishlist ❤️");
      return;
    }

    wishlist.push(hotel);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    alert("Added To Wishlist ❤️");
  };

  const bookHotel = () => {
    localStorage.setItem(
      "selectedHotel",
      JSON.stringify(hotel)
    );

    navigate("/booking-form");
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-64 object-cover"
        />

        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full font-semibold text-yellow-500 shadow">
          ⭐ {hotel.rating}
        </span>
      </div>

      <div className="p-5">

        <h2 className="text-2xl font-bold text-gray-800">
          {hotel.name}
        </h2>

        <p className="text-gray-500 mt-2">
          📍 {hotel.city}
        </p>

        <p className="text-gray-600 mt-3">
          {hotel.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">
            Luxury Hotel
          </span>

          <span className="text-green-600 font-bold text-xl">
            ₹{hotel.price}
          </span>
        </div>

        <div className="grid gap-3 mt-5">

          <Link
            to={`/hotel/${hotel.id}`}
            className="text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            View Details
          </Link>

          <button
            onClick={addWishlist}
            className="bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition"
          >
            ❤️ Add To Wishlist
          </button>

          <button
            onClick={bookHotel}
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            🏨 Book Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default HotelCard;