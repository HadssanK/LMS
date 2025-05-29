import React from 'react'

const CtaSection = () => {
  return (
  <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-24 px-6 text-center text-white relative overflow-hidden">
  {/* Glowing animated circles in background */}
  <div className="absolute top-0 left-1/4 w-40 h-40 bg-purple-700 rounded-full opacity-30 animate-pulse blur-3xl"></div>
  <div className="absolute top-20 right-1/4 w-56 h-56 bg-indigo-600 rounded-full opacity-30 animate-pulse delay-500 blur-3xl"></div>
  
  <h2 className="text-5xl font-extrabold mb-6 drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]">
    Ready to Generate Amazing AI Content?
  </h2>
  <p className="text-indigo-300 text-xl mb-12 max-w-2xl mx-auto">
    Create unique, high-quality content instantly using our powerful AI engine.
  </p>
  <button className="relative inline-block px-14 py-4 font-bold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600
                     shadow-lg shadow-indigo-700/60 hover:shadow-pink-500/70 transition duration-500 ease-in-out
                     transform hover:-translate-y-1 hover:scale-105">
    Get Started Now
  </button>
</div>

  )
}

export default CtaSection