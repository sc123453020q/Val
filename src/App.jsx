import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Proposal from "./pages/Proposal"
import YesPage from "./pages/YesPage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen text-white pt-28">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
     
    </div>
    </div>
    
  )
}

export default App
