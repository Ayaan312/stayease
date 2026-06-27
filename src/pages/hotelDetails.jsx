import { useParams, useNavigate } from "react-router-dom";
import hotels from "../data/hotels";

function HotelDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const hotel = hotels.find(
    (item) => item.id === Number(id)
  );

  if (!hotel) {
    return <h2>Hotel Not Found</h2>;
  }

  return (
    <div className="container mx-auto p-5">

      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-96 object-cover rounded"
      />

      <h1 className="text-4xl font-bold mt-5">
        {hotel.name}
      </h1>

      <p className="mt-3">{hotel.description}</p>

      <p className="mt-2">
        ⭐ {hotel.rating}
      </p>

      <p className="font-bold text-xl mt-2">
        ₹{hotel.price}/night
      </p>

      <button
        onClick={() => navigate("/payment")}
        className="bg-green-600 text-white px-6 py-3 rounded mt-5"
      >
        Book Now
      </button>

    </div>
  );
}

export default HotelDetails;