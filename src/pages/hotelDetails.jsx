import { useParams, useNavigate } from "react-router-dom";
import hotels from "../data/hotels";

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) {
    return (
      <h2 className="text-center text-3xl mt-10 font-bold">
        Hotel Not Found
      </h2>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Hotel Image */}
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-[450px] object-cover"
        />

        {/* Details */}
        <div className="p-8">

          <h1 className="text-4xl font-bold">{hotel.name}</h1>

          <p className="text-gray-500 text-lg mt-2">
            📍 {hotel.city}, India
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            {hotel.description}
          </p>

          <div className="flex gap-10 mt-6 flex-wrap">

            <div>
              <p className="text-gray-500">Rating</p>
              <h3 className="text-xl font-bold text-yellow-500">
                ⭐ {hotel.rating}
              </h3>
            </div>

            <div>
              <p className="text-gray-500">Price</p>
              <h3 className="text-xl font-bold text-blue-600">
                ₹{hotel.price} / Night
              </h3>
            </div>

          </div>

          {/* Amenities */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-5">
              Hotel Amenities
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">

              <p>📶 Free WiFi</p>
              <p>🏊 Swimming Pool</p>
              <p>🍽 Restaurant</p>
              <p>🚗 Free Parking</p>
              <p>❄ Air Conditioning</p>
              <p>💪 Fitness Center</p>
              <p>☕ Breakfast Included</p>
              <p>🛎 24×7 Room Service</p>

            </div>

          </div>

          {/* Hotel Information */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-5">
              Hotel Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <p><strong>🛏 Room Type:</strong> Deluxe Room</p>

              <p><strong>👥 Guests:</strong> 2 Adults</p>

              <p><strong>🕑 Check-in:</strong> 2:00 PM</p>

              <p><strong>🕛 Check-out:</strong> 11:00 AM</p>

              <p><strong>❌ Cancellation:</strong> Free Cancellation</p>

              <p><strong>💳 Payment:</strong> Online / Cash</p>

            </div>

          </div>

          {/* Book Button */}
          <button
            onClick={() => navigate("/payment")}
            className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Book Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default HotelDetails;