import { Link } from "react-router-dom"
import HeartRain from "../components/HeartRain"
import coupleImg from "../assets/couple.png"

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <HeartRain />

      <div className="grid md:grid-cols-2 gap-14 items-center max-w-6xl w-full">
        
        {/* TEXT */}
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold glow mb-6">
            Hey My Love 💕
          </h1>

          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            In a world full of noise,  
            you are my favorite feeling ✨
          </p>

          <Link
            to="/proposal"
            className="inline-block px-10 py-4 rounded-full bg-pink-600 text-white text-xl font-bold btn-glow hover:scale-110 transition-all duration-300"
          >
            Continue 💌
          </Link>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={coupleImg}
            alt="Couple"
            className="w-[300px] md:w-[420px] rounded-[32px]
                       shadow-[0_40px_120px_rgba(255,77,109,0.35)]
                       hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </div>
  )
}
