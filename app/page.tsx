
export default function Home() {
  return (
    <main className="h-screen bg-[#d1d7db] flex items-center justify-center md:p-5">

      <div className="w-full h-full max-w-[1500px] bg-white flex overflow-hidden shadow-xl">

        {/* Sidebar */}
        <aside className="w-full md:w-[380px] border-r border-gray-200">

          {/* Header */}
          <div className="h-[65px] bg-[#f0f2f5] flex items-center justify-between px-5">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xl">
              👤
            </div>

            <div className="flex gap-6 text-xl text-gray-600">
              <span>◉</span>
              <span>✎</span>
              <span>⋮</span>
            </div>
          </div>

          {/* Search */}
          <div className="p-3 bg-white">
            <div className="bg-[#f0f2f5] rounded-lg px-4 py-3 flex gap-4">
              <span className="text-gray-500">⌕</span>
              <input
                placeholder="Search or start new chat"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 px-3 pb-3">
            {["All", "Unread", "Favorites", "Groups"].map((item) => (
              <span key={item} className="bg-[#f0f2f5] rounded-full px-3 py-1.5 text-xs text-gray-600">
                {item}
              </span>
            ))}
          </div>

          {/* Contacts */}
          {[
            ["Ali Ahmed", "Hey bro! How are you?", "10:45 PM", "AA", "#2563eb"],
            ["Ahmed Khan", "See you tomorrow!", "9:20 PM", "AK", "#059669"],
            ["Development Team", "Let's discuss the project", "8:10 PM", "DT", "#9333ea"],
            ["Sara Malik", "Thank you 😊", "7:30 PM", "SM", "#db2777"],
            ["Family Group", "Good night everyone!", "Yesterday", "FG", "#d97706"],
            ["Usman", "Send me the files", "Yesterday", "US", "#0891b2"],
            ["Hassan", "Great work!", "Yesterday", "HA", "#4f46e5"],
          ].map((chat, index) => (
            <div
              key={chat[0]}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 ${index === 0 ? "bg-[#f0f2f5]" : ""}`}
            >
              <div
                style={{ backgroundColor: chat[4] }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shrink-0"
              >
                {chat[3]}
              </div>

              <div className="flex-1 min-w-0 border-b border-gray-100 pb-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-900">{chat[0]}</h3>
                  <span className="text-[11px] text-gray-400">{chat[2]}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 truncate">{chat[1]}</p>
              </div>
            </div>
          ))}
        </aside>


        <section className="hidden md:flex flex-1 flex-col">

          {/* Chat Header */}
          <header className="h-[65px] bg-[#f0f2f5] flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                AA
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Ali Ahmed</h3>
                <p className="text-xs text-gray-500">online</p>
              </div>
            </div>

            <div className="flex gap-6 text-gray-600 text-xl">
              <span>⌕</span>
              <span>📎</span>
              <span>⋮</span>
            </div>
          </header>

          {/* Chat Background */}
          <div
            className="flex-1 p-8 flex flex-col gap-4 overflow-y-auto"
            style={{
              backgroundColor: "#efeae2",
              backgroundImage: "radial-gradient(#d8d2c8 0.7px, transparent 0.7px)",
              backgroundSize: "18px 18px"
            }}
          >
            <div className="self-center bg-[#fff5c4] rounded-lg px-4 py-2 text-xs text-gray-600 shadow-sm">
              🔒 Messages are end-to-end encrypted.
            </div>

            <div className="self-start bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[70%]">
              <p className="text-sm text-gray-800">Hey bro! How are you?</p>
              <p className="text-[10px] text-gray-400 text-right mt-2">10:30 PM</p>
            </div>

            <div className="self-end bg-[#d9fdd3] rounded-lg rounded-tr-none p-3 shadow-sm max-w-[70%]">
              <p className="text-sm text-gray-800">I&apos;m good! What about you?</p>
              <p className="text-[10px] text-gray-400 text-right mt-2">10:31 PM ✓✓</p>
            </div>

            <div className="self-start bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[70%]">
              <p className="text-sm text-gray-800">Everything is going great!</p>
              <p className="text-[10px] text-gray-400 text-right mt-2">10:32 PM</p>
            </div>

            <div className="self-end bg-[#d9fdd3] rounded-lg rounded-tr-none p-3 shadow-sm max-w-[70%]">
              <p className="text-sm text-gray-800">That&apos;s awesome bro! 🚀</p>
              <p className="text-[10px] text-gray-400 text-right mt-2">10:35 PM ✓✓</p>
            </div>
          </div>

          {/* Message Input UI */}
          <footer className="h-[70px] bg-[#f0f2f5] flex items-center gap-4 px-5">
            <span className="text-2xl text-gray-500">☺</span>
            <span className="text-xl text-gray-500">📎</span>

            <input
              placeholder="Type a message"
              className="flex-1 bg-white rounded-lg px-4 py-3 outline-none text-sm text-gray-700"
            />

            <span className="text-2xl text-gray-500">🎙</span>
          </footer>

        </section>
      </div>
    </main>
  );
}
