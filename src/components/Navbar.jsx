export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      {/* glow strip */}
      <div className="absolute inset-x-0 top-0 h-24
        bg-gradient-to-b from-pink-500/30 via-pink-500/10 to-transparent
        blur-2xl">
      </div>

      {/* main navbar */}
      <div className="
        relative mx-auto mt-3 w-[95%] max-w-4xl
        bg-black/40 backdrop-blur-2xl
        rounded-2xl
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.9)]
      ">
        <div className="py-4 text-center text-2xl font-extrabold tracking-wide glow">
          💖 Valentine Special 💖
        </div>
      </div>

    </nav>
  )
}
