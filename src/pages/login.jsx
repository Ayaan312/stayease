import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Hotel } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
      >
        {/* Logo */}

        <div className="flex justify-center mb-4">
          <div className="bg-white p-4 rounded-full">
            <Hotel size={38} className="text-blue-600" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center text-white">
          Welcome Back
        </h2>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Login to continue your hotel booking journey
        </p>

        {/* Email */}

        <div className="relative mb-5">
          <Mail
            className="absolute left-4 top-3.5 text-gray-500"
            size={20}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-12 pr-4 py-3 rounded-xl outline-none bg-white text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}

        <div className="relative mb-5">
          <Lock
            className="absolute left-4 top-3.5 text-gray-500"
            size={20}
          />

          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-12 pr-12 py-3 rounded-xl outline-none bg-white text-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-3 text-gray-600"
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Remember */}

        <div className="flex justify-between items-center mb-6 text-white text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" />
            Remember Me
          </label>

          <button
            type="button"
            className="hover:text-yellow-300 duration-300"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login */}

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition duration-300"
        >
          Login
        </button>

        {/* Divider */}

        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <span className="px-3 text-white text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Signup */}

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="w-full py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black duration-300"
        >
          Create New Account
        </button>

        <p className="text-center text-gray-200 mt-6 text-sm">
          Secure Login • Fast Booking • Trusted Hotels
        </p>
      </form>
    </div>
  );
}

export default Login;