import { useParams, useNavigate } from "react-router-dom";
import hotels from "../data/hotels";

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hotel Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">

          <div>

            <div className="text-yellow-500 text-xl">
              ⭐⭐⭐⭐⭐
            </div>

            <h1 className="text-4xl font-bold mt-2">
              {hotel.name}
            </h1>

            <p className="text-blue-600 mt-2">
              📍 {hotel.city}, India • Great Location
            </p>

          </div>

          <div className="text-right">

            <div className="flex justify-end gap-3 mb-4">

              <button className="border rounded-full w-11 h-11 hover:bg-gray-100">
                ❤️
              </button>

              <button className="border rounded-full w-11 h-11 hover:bg-gray-100">
                🔗
              </button>

            </div>

            <button
              onClick={() => navigate("/payment")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Reserve
            </button>

          </div>

        </div>

        {/* Price & Rating */}

        <div className="flex justify-between items-center mt-8 border rounded-xl p-6 flex-wrap gap-5">

          <div>

            <p className="text-gray-500">
              Starting From
            </p>

            <h2 className="text-3xl font-bold text-blue-600">
              ₹{hotel.price}
              <span className="text-lg text-gray-500 font-normal">
                {" "}
                / Night
              </span>
            </h2>

          </div>

          <div className="flex items-center gap-4">

            <div className="text-right">

              <h3 className="font-semibold">
                Excellent
              </h3>

              <p className="text-gray-500 text-sm">
                Guest Rating
              </p>

            </div>

            <div className="bg-blue-600 text-white px-4 py-3 rounded-lg font-bold text-lg">
              {hotel.rating}
            </div>

          </div>

        </div>

        {/* NEXT PART */}

                {/* ================= IMAGE GALLERY ================= */}

        <div className="grid lg:grid-cols-2 gap-4 mt-8">

          {/* Main Image */}

          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-[450px] rounded-2xl object-cover"
          />

          {/* Right Side */}

          <div className="grid grid-rows-2 gap-4">

            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-[217px] rounded-2xl object-cover"
            />

            <div className="relative">

              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-[217px] rounded-2xl object-cover brightness-75"
              />

              <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow font-semibold hover:bg-gray-100">
                View Photos
              </button>

            </div>

          </div>

        </div>

        {/* NEXT PART */}
                {/* ================= ABOUT PROPERTY ================= */}

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {/* About */}

          <div>

            <h2 className="text-3xl font-bold mb-5">
              About this Property
            </h2>

            <p className="text-gray-600 leading-8">
              {hotel.description}
            </p>

            <button
              className="mt-6 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Read More
            </button>

          </div>

          {/* Google Map */}

          <div>

            <h2 className="text-3xl font-bold mb-5">
              Hotel Location
            </h2>

            <div className="overflow-hidden rounded-2xl shadow-lg">

              <iframe
                title="Hotel Map"
                src={`https://maps.google.com/maps?q=${hotel.city},India&z=14&output=embed`}
                className="w-full h-[320px] border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>

            </div>

            <button
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${hotel.city},India`,
                  "_blank"
                )
              }
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              Open in Google Maps
            </button>

          </div>

        </div>

        {/* NEXT PART */}

                {/* ================= AVAILABLE ROOMS ================= */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-5">
            Available Rooms
          </h2>

          <div className="border rounded-2xl overflow-hidden">

            <div className="grid grid-cols-4 bg-blue-600 text-white font-semibold">

              <div className="p-4">Room</div>
              <div className="p-4 text-center">Guests</div>
              <div className="p-4 text-center">Price</div>
              <div className="p-4 text-center">Book</div>

            </div>

            <div className="grid grid-cols-4 items-center border-t">

              <div className="p-4">Deluxe Room</div>

              <div className="text-center">
                2 Adults
              </div>

              <div className="text-center font-bold text-blue-600">
                ₹{hotel.price}
              </div>

              <div className="text-center">

                <button
                  onClick={() => navigate("/payment")}
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                >
                  Book
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* ================= GUEST REVIEWS ================= */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-5">
            Guest Reviews
          </h2>

          <div className="space-y-4">

            <div className="border rounded-xl p-5">

              <div className="flex justify-between">

                <h3 className="font-bold">
                  Rahul Sharma
                </h3>

                <span className="bg-blue-600 text-white px-3 py-1 rounded">
                  9.2
                </span>

              </div>

              <p className="text-gray-600 mt-3">
                Excellent hotel with clean rooms and friendly staff.
              </p>

            </div>

            <div className="border rounded-xl p-5">

              <div className="flex justify-between">

                <h3 className="font-bold">
                  Priya Patel
                </h3>

                <span className="bg-blue-600 text-white px-3 py-1 rounded">
                  9.5
                </span>

              </div>

              <p className="text-gray-600 mt-3">
                Great location, delicious food and amazing service.
              </p>

            </div>

          </div>

        </div>

        {/* ================= BOOK NOW ================= */}

        <div className="mt-12 text-center">

          <button
            onClick={() => navigate("/payment")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold"
          >
            Book Now
          </button>

        </div>

      </div>

    </div>

  );
}

export default HotelDetails;