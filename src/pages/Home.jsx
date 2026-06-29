import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AIChat from "../components/AIChat";

function Home() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
          <div
  className="max-w-3xl text-white"
  data-aos="fade-right"
>
            <span className="bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold">
              Trusted By 1M+ Travelers
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Find Your Perfect
              <span className="text-blue-400"> Stay </span>
              Anywhere
            </h1>

            <p className="text-lg text-gray-200 mt-6 leading-8">
              Book luxury hotels, resorts and budget stays at the best prices.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/hotels"
                className="bg-blue-600 hover:bg-blue-700 duration-300 px-8 py-4 rounded-lg font-semibold"
              >
                Explore Hotels
              </Link>
              <Link
                to="/offers"
                className="border border-white hover:bg-white hover:text-black duration-300 px-8 py-4 rounded-lg"
              >
                View Offers
              </Link>
            </div>
          </div>

          {/* Search Bar Bar */}
          <div className="mt-12 bg-white p-4 rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl"data-aos="fade-up">
            <div className="flex flex-col border-r border-gray-200 px-4">
              <label className="text-xs font-bold text-gray-500 uppercase">Location</label>
              <input type="text" placeholder="Where are you going?" className="outline-none py-1" />
            </div>
            <div className="flex flex-col border-r border-gray-200 px-4">
              <label className="text-xs font-bold text-gray-500 uppercase">Dates</label>
              <input type="text" placeholder="Add dates" className="outline-none py-1" />
            </div>
            <div className="flex flex-col border-r border-gray-200 px-4">
              <label className="text-xs font-bold text-gray-500 uppercase">Guests</label>
              <input type="text" placeholder="Add guests" className="outline-none py-1" />
            </div>
            <button className="bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* 2. IDEAS FOR YOUR NEXT TRIP */}
     <section
  className="py-20 px-6 bg-white"
  data-aos="fade-up"
>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Ideas For Your Next Trip</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Big Card */}
            <div className="md:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="https://media.istockphoto.com/id/2206381751/photo/waikiki-beach-sunset-sky-beautiful-pacific-ocean-water.jpg?s=612x612&w=0&k=20&c=VOHxTPJYqt9wy1NW7S2zhPbBUXHcq_-sIeyQ-Lbm9X4="
                alt="Travel"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Free Cancellation On Most Hotels</h3>
                <p className="text-gray-600 mt-2">
                  Flexible booking options for your next vacation.
                </p>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold">Last Minute Deals Available</h3>
                <p className="text-gray-600 mt-2">Find your perfect getaway today with special discounts.</p>
                <button className="mt-4 text-blue-600 font-semibold underline">Learn More</button>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100">
                <h3 className="text-xl font-bold">Travel Inspiration</h3>
                <p className="text-gray-600 mt-2">Discover amazing destinations worldwide and plan your journey.</p>
                <button className="mt-4 text-blue-600 font-semibold underline">Read Blog</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Trending Destinations */}
<section
  className="py-16 px-6 bg-gray-50"
  data-aos="zoom-in"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">
        Trending Destinations
      </h2>

      <p className="text-gray-500 mt-3">
        Discover India's most loved travel destinations.
      </p>
    </div>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={20}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
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
            "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        },
        {
          city: "Mumbai",
          image:
            "https://images.unsplash.com/photo-1567157577867-05ccb1388e66",
        },
        {
          city: "Kerala",
          image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        },
        {
          city: "Kashmir",
          image:
            "https://images.unsplash.com/photo-1627894483216-2138af692e32",
        },
      ].map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300">

            <img
              src={item.image}
              alt={item.city}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="text-2xl font-bold">
                {item.city}
              </h3>

              <p className="text-gray-500 mt-2">
                Explore luxury hotels and unforgettable experiences.
              </p>

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Explore
              </button>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>
{/* ================= Why Choose Us + Statistics ================= */}

<section
  className="py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-white"
  data-aos="fade-left"
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Side */}
    <div>

      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Why Choose Us
      </span>

      <h2 className="text-5xl font-extrabold mt-3">
        Why Choose
        <span className="text-blue-600"> StayEase?</span>
      </h2>

      <p className="text-gray-500 mt-5 text-lg leading-8">
        Enjoy premium stays with verified hotels, secure bookings,
        exclusive prices and 24×7 customer support.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl duration-300">
          <div className="text-4xl">🏨</div>
          <h3 className="text-2xl font-bold mt-4">Verified Hotels</h3>
          <p className="text-gray-500 mt-3">
            Trusted luxury hotels with genuine guest reviews.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl duration-300">
          <div className="text-4xl">💰</div>
          <h3 className="text-2xl font-bold mt-4">Best Price</h3>
          <p className="text-gray-500 mt-3">
            Exclusive discounts and lowest price guarantee.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl duration-300">
          <div className="text-4xl">⚡</div>
          <h3 className="text-2xl font-bold mt-4">Instant Booking</h3>
          <p className="text-gray-500 mt-3">
            Book your hotel within seconds.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl duration-300">
          <div className="text-4xl">🔒</div>
          <h3 className="text-2xl font-bold mt-4">Secure Payments</h3>
          <p className="text-gray-500 mt-3">
            Safe and encrypted online transactions.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl duration-300">
          <div className="text-4xl">📞</div>
          <h3 className="text-2xl font-bold mt-4">24×7 Support</h3>
          <p className="text-gray-500 mt-3">
            Friendly support team whenever you need help.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl duration-300">
          <div className="text-4xl">❌</div>
          <h3 className="text-2xl font-bold mt-4">Free Cancellation</h3>
          <p className="text-gray-500 mt-3">
            Flexible cancellation on selected hotels.
          </p>
        </div>

      </div>

    </div>

    {/* Right Side */}
    <div>

      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        Statistics
      </span>

      <h2 className="text-5xl font-extrabold mt-3">
        Trusted By
        <span className="text-blue-600"> Millions</span>
      </h2>

      <p className="text-gray-500 mt-5 text-lg">
        Our growing community of travelers around the world.
      </p>

      <div className="grid grid-cols-2 gap-8 mt-12">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-10 shadow-2xl hover:scale-105 duration-300">
          <h3 className="text-5xl font-extrabold">50K+</h3>
          <p className="mt-4 text-lg">Hotels</p>
        </div>

        <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-100 hover:scale-105 duration-300">
          <h3 className="text-5xl font-extrabold text-blue-600">150+</h3>
          <p className="mt-4 text-lg text-gray-700">Cities</p>
        </div>

        <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-100 hover:scale-105 duration-300">
          <h3 className="text-5xl font-extrabold text-blue-600">2M+</h3>
          <p className="mt-4 text-lg text-gray-700">Happy Travelers</p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-10 shadow-2xl hover:scale-105 duration-300">
          <h3 className="text-5xl font-extrabold">98%</h3>
          <p className="mt-4 text-lg">Positive Reviews</p>
        </div>

      </div>

    </div>

  </div>
</section>


      {/* 4. FOOTER / CTA */}
     <footer
  className="bg-gray-900 text-white py-12 px-6"
  data-aos="fade-up"
>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">StayEase</h3>
            <p className="text-gray-400">Your trusted partner for worldwide hotel bookings and luxury stays.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/hotels">Hotels</Link></li>
              <li><Link to="/offers">Special Offers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400">support@stayease.com</p>
            <p className="text-gray-400">+91 12345 67890</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          © 2024 StayEase Inc. All rights reserved.
        </div>
      </footer>
           <AIChat />
    </div>
  );
}


export default Home;