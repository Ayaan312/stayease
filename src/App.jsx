import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Wishlist from "./pages/Wishlist";

import Payment from "./pages/Payment";
import MyBookings from "./pages/MyBooking";
import Login from "./pages/Login";
import BookingForm from "./pages/BookingForm";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route
  path="/booking-form"
  element={<BookingForm />}
/>
<Route path="/offers" element={<Offers />} />
 <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      
    </BrowserRouter>
    

  );
}

export default App;