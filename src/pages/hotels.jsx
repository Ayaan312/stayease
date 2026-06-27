import { useState } from "react";
import hotelsData from "../data/hotels";
import HotelCard from "../components/HotelCard";

function Hotels() {

  const [search, setSearch] = useState("");

  const filteredHotels = hotelsData.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-5">

      <h1 className="text-3xl font-bold mb-5">
        Hotels
      </h1>

      <input
        type="text"
        placeholder="Search Hotel..."
        className="border p-3 w-full mb-5 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-6">

        {filteredHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
          />
        ))}

      </div>

    </div>
  );
}

export default Hotels;