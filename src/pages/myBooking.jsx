import { useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  const cancelBooking = (id) => {
    const updatedBookings = bookings.filter(
      (hotel) => hotel.id !== id
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  const clearAllBookings = () => {
    localStorage.removeItem("bookings");
    setBookings([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            My Bookings 🏨
          </h1>

          {bookings.length > 0 && (
            <button
              onClick={clearAllBookings}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Clear All
            </button>
          )}
        </div>

        {bookings.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <div className="text-7xl mb-4">🏨</div>

            <h2 className="text-3xl font-bold">
              No Bookings Found
            </h2>

            <p className="text-gray-500 mt-3">
              Your booked hotels will appear here.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                Total Bookings: {bookings.length}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {bookings.map((hotel, index) => (
                <div
                  key={hotel.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-5">

                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">
                        {hotel.name}
                      </h2>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Confirmed
                      </span>
                    </div>

                    <p className="text-gray-600 mt-2">
                      📍 {hotel.city}
                    </p>

                    <p className="text-gray-500 mt-2 text-sm">
                      {hotel.description}
                    </p>

                    <div className="flex justify-between mt-4">
                      <span className="text-yellow-500 font-bold">
                        ⭐ {hotel.rating}
                      </span>

                      <span className="text-green-600 font-bold text-lg">
                        ₹{hotel.price}
                      </span>
                    </div>

                    <div className="mt-4 text-sm text-gray-500">
                      Booking Date: {new Date().toLocaleDateString()}
                    </div>

                    <button
                      onClick={() =>
                        cancelBooking(hotel.id)
                      }
                      className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
                    >
                      Cancel Booking
                    </button>

                  </div>
                </div>
              ))}

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default MyBookings;