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

{/* Header */}
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

  <div>

    <div className="text-yellow-500 text-xl mb-2">
      ⭐⭐⭐⭐⭐
    </div>

    <h1 className="text-4xl font-bold">
      {hotel.name}
    </h1>

    <p className="text-blue-600 mt-2 font-medium cursor-pointer">
      📍 {hotel.city}, India • Great Location • Show Map
    </p>

  </div>

  <div className="text-right">

    <p className="text-3xl font-bold text-blue-600">
      ₹{hotel.price}
    </p>

    <p className="text-gray-500 mb-4">
      Per Night
    </p>

    <button
      onClick={() => navigate("/payment")}
      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
    >
      Reserve
    </button>

  </div>

</div>

{/* Description */}
<p className="mt-8 text-gray-700 leading-8">
  {hotel.description}
</p>

{/* Rating Card */}
<div className="mt-8 inline-flex items-center gap-4 border rounded-xl px-5 py-3">

  <div>
    <h3 className="font-semibold">
      Guest Rating
    </h3>

    <p className="text-gray-500 text-sm">
      Excellent Stay
    </p>
  </div>

  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold">
    {hotel.rating}
  </div>

</div>

{/* Property Highlights */}

<div className="mt-12">

  <h2 className="text-3xl font-bold mb-6">
    Property Highlights
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

    <div className="border rounded-xl p-5 hover:shadow-lg duration-300 cursor-pointer">
      <div className="text-3xl mb-3">☕</div>
      <h3 className="font-semibold text-lg">Breakfast</h3>
      <p className="text-gray-500 text-sm">
        Continental, Buffet
      </p>
    </div>

    <div className="border rounded-xl p-5 hover:shadow-lg duration-300 cursor-pointer">
      <div className="text-3xl mb-3">🌄</div>
      <h3 className="font-semibold text-lg">Mountain View</h3>
      <p className="text-gray-500 text-sm">
        Balcony with Scenic View
      </p>
    </div>

    <div className="border rounded-xl p-5 hover:shadow-lg duration-300 cursor-pointer">
      <div className="text-3xl mb-3">🚗</div>
      <h3 className="font-semibold text-lg">Free Parking</h3>
      <p className="text-gray-500 text-sm">
        Private Parking Available
      </p>
    </div>

    <div className="border rounded-xl p-5 hover:shadow-lg duration-300 cursor-pointer">
      <div className="text-3xl mb-3">🐶</div>
      <h3 className="font-semibold text-lg">Pet Friendly</h3>
      <p className="text-gray-500 text-sm">
        Pets are Welcome
      </p>
    </div>

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

          {/* About Property + Map */}

<div className="grid lg:grid-cols-3 gap-8 mt-12">

  {/* Left Side */}
  <div className="lg:col-span-2">

    <h2 className="text-3xl font-bold mb-5">
      About this Property
    </h2>

    <p className="text-gray-700 leading-8">
      {hotel.description}
    </p>

    <button className="mt-5 border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white duration-300">
      Show More
    </button>

  </div>

  <div className="bg-gray-200 h-72 flex items-center justify-center rounded-t-2xl">
  <a
    href={`https://www.google.com/maps/search/?api=1&query=${hotel.city},India`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
  >
    📍 Open {hotel.city} on Google Maps
  </a>
</div>
    <div className="p-5">

      <h3 className="text-xl font-bold">
        📍 {hotel.city}, India
      </h3>

      <p className="text-gray-500 mt-2">
        Prime location near famous attractions.
      </p>

      <button
        onClick={() =>
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${hotel.city},India`,
            "_blank"
          )
        }
        className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
      >
        View on Google Maps
      </button>

    </div>

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
    
  );
}

export default HotelDetails;