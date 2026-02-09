import { useNavigate } from "react-router-dom"

export default function LoveButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate("/yes")}
      className="px-8 py-4 bg-white text-pink-600 text-xl font-bold rounded-full hover:scale-110 transition"
    >
      YES 💖
    </button>
  )
}
