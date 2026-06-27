function Offers() {
  const offers = [
    {
      title: "Summer Special",
      discount: "30% OFF",
      code: "SUMMER30",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Weekend Escape",
      discount: "25% OFF",
      code: "WEEKEND25",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Family Package",
      discount: "40% OFF",
      code: "FAMILY40",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "First Booking",
      discount: "20% OFF",
      code: "NEW20",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-3">
          🎁 Exclusive Hotel Offers
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Save more on your next StayEase booking
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <div
            className={`bg-linear-to-r ${offer.color} p-6 text-white text-center`}
              >
                <h2 className="text-3xl font-bold">
                  {offer.discount}
                </h2>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  {offer.title}
                </h3>

                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-500">
                    Coupon Code
                  </p>
                  <p className="font-bold text-green-600">
                    {offer.code}
                  </p>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Offers;