import { useState } from "react"
import { useNavigate } from "react-router-dom"
import HeartRain from "../components/HeartRain"

export default function Proposal() {
  const navigate = useNavigate()
  const [pos, setPos] = useState({ top: "65%", left: "55%" })

  const escapeNo = () => {
    setPos({
      top: `${Math.random() * 70}%`,
      left: `${Math.random() * 70}%`,
    })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <HeartRain />

      <div className="glass px-12 py-14 text-center max-w-xl w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold glow mb-12">
          Will you be my Valentine? 💘
        </h1>

        <div className="relative h-40">
          <button
            onClick={() => navigate("/yes")}
            className="px-10 py-4 bg-white text-pink-600 text-xl font-bold rounded-full btn-glow hover:scale-110 transition"
          >
            YES 💖
          </button>

          <button
            onMouseEnter={escapeNo}
            style={{ position: "absolute", ...pos }}
            className="px-6 py-3 bg-black text-white font-bold rounded-xl"
          >
            NO 😢
          </button>
        </div>
      </div>
    </div>
  )
}
