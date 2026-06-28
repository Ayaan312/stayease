import { useState } from "react";
import hotelsData from "../data/hotels";
import HotelCard from "../components/HotelCard";

function Hotels() {
  const [search, setSearch] = useState("");

  const filteredHotels = hotelsData.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-100 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-pulse">
            Discover Amazing Hotels
          </h1>

          <p className="text-gray-600 text-lg">
            Find luxury hotels, resorts and budget stays at the best prices.
          </p>

        </div>

        {/* Search Box */}
        <div className="flex justify-center mb-12">

          <div className="relative w-full md:w-2/3">

            <input
              type="text"
              placeholder="🔍 Search hotels..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                py-4
                px-6
                rounded-full
                border
                border-blue-200
                shadow-xl
                bg-white/80
                backdrop-blur-md
                focus:outline-none
                focus:ring-4
                focus:ring-blue-300
                transition-all
                duration-300
                text-lg
              "
            />

          </div>

        </div>

        {/* Hotels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="
                  transform
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:scale-105
                  animate-fadeIn
                "
              >
                <HotelCard hotel={hotel} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">

              <h2 className="text-3xl font-bold text-gray-700">
                😔 No Hotels Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try searching with another name.
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Hotels;