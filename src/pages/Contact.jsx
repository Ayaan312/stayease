function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-3">
            We'd love to hear from you. Get in touch with StayEase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-4">
              <p>
                📍 <strong>Address:</strong> Sambhajinagar, Maharashtra
              </p>

              <p>
                📞 <strong>Phone:</strong> +91 9876543210
              </p>

              <p>
                📧 <strong>Email:</strong> support@stayease.com
              </p>

              <p>
                🕒 <strong>Working Hours:</strong> 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Send Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border p-3 rounded-lg"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;