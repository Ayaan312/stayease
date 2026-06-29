import { useState } from "react";

function AIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = () => {
    const text = message.toLowerCase();

    if (text.includes("goa")) {
      setReply("🏖️ Best Hotel in Goa: Sea View Resort - ₹4500/night ⭐4.8");
    } else if (text.includes("manali")) {
      setReply("🏔️ Best Hotel in Manali: Snow Valley Resort - ₹3800/night ⭐4.7");
    } else if (text.includes("pool")) {
      setReply("🏊 We have many hotels with swimming pools.");
    } else if (text.includes("cheap")) {
      setReply("💰 Budget hotels start from ₹999/night.");
    } else {
      setReply("😊 Sorry, I didn't understand. Try: Goa, Manali, Pool, Cheap Hotel.");
    }

    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-16 h-16 rounded-full shadow-2xl text-3xl z-50"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl p-4 z-50">
          <h2 className="text-xl font-bold mb-3">
            StayEase AI 🤖
          </h2>

          <div className="bg-gray-100 p-3 rounded mb-3 min-h-[80px]">
            {reply || "Ask me about hotels..."}
          </div>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything..."
            className="border w-full p-2 rounded mb-3"
          />

          <button
            onClick={handleSend}
            className="bg-blue-600 text-white w-full py-2 rounded"
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}

export default AIChat;