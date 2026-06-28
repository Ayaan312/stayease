import { useState } from "react";

function Offers() {
  const [selected, setSelected] = useState(null);

  const offers = [
    {
      id: 1,
      title: "Summer Escape",
      discount: "30% OFF",
      code: "SUMMER30",
      color: "from-orange-400 to-red-500",
      desc: "Luxury hotels with free breakfast."
    },
    {
      id: 2,
      title: "Weekend Deal",
      discount: "25% OFF",
      code: "WEEK25",
      color: "from-blue-500 to-indigo-600",
      desc: "Perfect weekend vacation offer."
    },
    {
      id: 3,
      title: "Family Package",
      discount: "40% OFF",
      code: "FAMILY40",
      color: "from-green-500 to-emerald-600",
      desc: "Book 3 nights & save more."
    },
    {
      id: 4,
      title: "New User",
      discount: "20% OFF",
      code: "NEW20",
      color: "from-purple-500 to-pink-500",
      desc: "Special offer for first booking."
    },
  ];

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Coupon Copied!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-14 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800">
            🎁 Exclusive Offers
          </h1>

          <p className="text-gray-600 mt-3">
            Save more on your next StayEase booking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {offers.map((offer) => (

            <div
              key={offer.id}
              onClick={() => setSelected(offer)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition duration-500 cursor-pointer"
            >

              <div className={`bg-gradient-to-r ${offer.color} p-8 text-center`}>

                <h2 className="text-4xl font-bold text-white">
                  {offer.discount}
                </h2>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  {offer.title}
                </h3>

                <p className="text-gray-500 text-sm mb-5">
                  {offer.desc}
                </p>

                <div className="bg-gray-100 rounded-xl p-4">

                  <p className="text-xs text-gray-500">
                    Coupon Code
                  </p>

                  <div className="flex justify-between items-center mt-2">

                    <span className="font-bold text-green-600">
                      {offer.code}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyCode(offer.code);
                      }}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                    >
                      Copy
                    </button>

                  </div>

                </div>

                <button
                  className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
                >
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