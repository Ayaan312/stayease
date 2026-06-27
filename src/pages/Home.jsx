import { Link } from "react-router-dom";

function Home() {
  const featuredHotels = [
    {
      id: 1,
      name: "Luxury Palace",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      name: "Ocean View Resort",
      location: "Goa",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Manali",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-xl text-center text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Find Your Perfect Stay
          </h1>

          <p className="text-lg md:text-2xl mb-6">
            Luxury Hotels At Affordable Prices
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <input
              type="text"
              placeholder="Search city or hotel..."
              className="px-4 py-3 rounded-lg text-black w-72"
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Ideas For Your Next Trip */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold mb-10">
      Ideas For Your Next Trip
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      {/* Big Card */}
      <div className="md:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://media.istockphoto.com/id/2206381751/photo/waikiki-beach-sunset-sky-beautiful-pacific-ocean-water.jpg?s=612x612&w=0&k=20&c=VOHxTPJYqt9wy1NW7S2zhPbBUXHcq_-sIeyQ-Lbm9X4="
          alt="Travel"
          className="w-210 h-90 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold">
            Free Cancellation On Most Hotels
          </h3>

          <p className="text-gray-600 mt-2">
            Flexible booking options for your next vacation.
          </p>
        </div>
      </div>

      {/* Side Cards */}
      <div className="space-y-6">

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold">
            Last Minute Deals Available
          </h3>

          <p className="text-gray-600 mt-2">
            Find your perfect getaway today.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold">
            Travel Inspiration
          </h3>

          <p className="text-gray-600 mt-2">
            Discover amazing destinations worldwide.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* Featured Hotels */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Hotels
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">{hotel.name}</h3>

                <p className="text-gray-600 mt-2">
                  📍 {hotel.location}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-yellow-500 font-bold">
                    ⭐ 4.8
                  </span>

                  <span className="text-green-600 font-bold">
                    ₹4999 / Night
                  </span>
                </div>

                <Link
                  to="/hotels"
                  className="block text-center bg-blue-600 text-white py-3 rounded-lg mt-5 hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Destinations */}
<section className="py-20 px-6 bg-white">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold mb-10">
      Explore Stays In Trending Destinations
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      {[
        {
          city: "Goa",
          image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        },
        {
          city: "Manali",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        },
        {
          city: "Jaipur",
          image:
            "https://images.unsplash.com/photo-1477587458883-47145ed94245",
        },
        {
          city: "Mumbai",
          image:
            "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
        >
          <img
            src={item.image}
            alt={item.city}
            className="h-56 w-full object-cover"
          />

          <div className="p-4">
            <h3 className="text-xl font-bold">
              {item.city}
            </h3>

            <p className="text-gray-500">
              Popular Destination
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>

</section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose StayEase?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-2xl font-bold mb-3">🏨 Best Hotels</h3>
            <p>Handpicked luxury hotels and resorts.</p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-2xl font-bold mb-3">💰 Best Prices</h3>
            <p>Affordable rates with exclusive discounts.</p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-2xl font-bold mb-3">⚡ Instant Booking</h3>
            <p>Quick and secure hotel reservations.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <p>
              "Amazing experience! Easy booking and great hotels."
            </p>
            <h4 className="font-bold mt-4">- Ayan</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p>
              "The prices were much better than other platforms."
            </p>
            <h4 className="font-bold mt-4">- Ahmed</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p>
              "Excellent service and smooth experience."
            </p>
            <h4 className="font-bold mt-4">- Rahman</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <h3 className="text-2xl font-bold">StayEase</h3>
        <p className="mt-2">
          © 2026 StayEase. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;