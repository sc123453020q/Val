import { Link } from "react-router-dom"
import HeartRain from "../components/HeartRain"
import coupleImg from "../assets/couple.png"

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <HeartRain />

      {/* LEFT CORNER IMAGE */}
      <img
        src={coupleImg}
        alt="Couple Left"
        className="hidden md:block absolute left-10 bottom-16 w-44 opacity-90
                   hover:scale-105 transition duration-500"
      />

      {/* RIGHT CORNER IMAGE */}
      <img
        src={coupleImg}
        alt="Couple Right"
        className="hidden md:block absolute right-10 top-32 w-44 opacity-90
                   hover:scale-105 transition duration-500"
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-extrabold glow mb-6">
          Hey My Love 💕
        </h1>

        <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
          In a world full of noise,<br />
          you are my favorite feeling ✨
        </p>

        {/* BOX STYLE BUTTON */}
        <Link
          to="/proposal"
          className="
          relative inline-flex items-center justify-center
          px-14 py-5
          rounded-3xl
          text-xl font-bold tracking-wide
          text-white

          bg-gradient-to-r from-pink-500 via-rose-500 to-red-500
          shadow-[0_15px_40px_rgba(255,77,109,0.55)]

          before:absolute before:inset-0
          before:rounded-3xl
          before:bg-white/20
          before:blur-xl
          before:opacity-0
          hover:before:opacity-100

          hover:scale-110
          transition-all duration-500
          animate-[pulse_2.5s_infinite]
          "
        >
        💌 Continue
        </Link>
      </div>
    </div>
  )
}
