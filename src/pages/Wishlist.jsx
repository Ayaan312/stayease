import { useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const removeWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (hotel) => hotel.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  return (
    <div className="container mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        My Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            No Hotels In Wishlist
          </h2>

          <p className="text-gray-500 mt-2">
            Add your favorite hotels here.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {wishlist.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold">
                  {hotel.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  📍 {hotel.city}
                </p>

                <div className="flex justify-between mt-3">
                  <span className="text-yellow-500 font-bold">
                    ⭐ {hotel.rating}
                  </span>

                  <span className="text-green-600 font-bold">
                    ₹{hotel.price}
                  </span>
                </div>

                <button
                  onClick={() =>
                    removeWishlist(hotel.id)
                  }
                  className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Wishlist;