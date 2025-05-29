import React from 'react'

const PurchesPlane = () => {
  return (
    <>
  <div id='pricing' className="bg-gray-900 text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-extrabold mb-4">Choose Your Plan</h2>
    <p className="text-pink-400 text-lg">Simple, transparent pricing that grows with you.</p>
  </div>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {/* Free Plan */}
    <div className="relative bg-gray-800 rounded-3xl p-8 text-center
      border-4 border-transparent
      hover:border-pink-500
      hover:shadow-[0_0_20px_rgba(236,72,153,0.7)]
      transition-all duration-300 ease-in-out
      cursor-pointer
      ">
      <h3 className="text-2xl font-bold mb-2 text-pink-400">Free</h3>
      <p className="text-gray-400 mb-6">Basic tools to get started</p>
      <p className="text-5xl font-extrabold mb-6">$0<span className="text-base font-normal">/mo</span></p>
      <ul className="text-left text-gray-300 space-y-3 mb-6">
        <li>✅ 5 content generations/day</li>
        <li>✅ Basic support</li>
        <li>✅ Limited features</li>
      </ul>
      <button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full font-semibold
        shadow-md
        hover:shadow-pink-400/70
        transition
        ">
        Get Started
      </button>
    </div>

    {/* Pro Plan */}
    <div className="relative bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 rounded-3xl p-8 text-center
      border-4 border-pink-400
      shadow-[0_0_25px_rgba(236,72,153,0.9)]
      scale-105
      cursor-pointer
      hover:scale-110
      transition-transform duration-300 ease-in-out
      ">
      <h3 className="text-2xl font-extrabold mb-2 text-white">Pro</h3>
      <p className="text-pink-100 mb-6">For content creators & marketers</p>
      <p className="text-5xl font-extrabold mb-6 text-white">$19<span className="text-base font-normal">/mo</span></p>
      <ul className="text-left text-pink-100 space-y-3 mb-6">
        <li>✅ 100+ generations/day</li>
        <li>✅ Priority support</li>
        <li>✅ Advanced tools</li>
      </ul>
      <button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-bold
        shadow-md
        hover:shadow-pink-400/90
        transition
        ">
        Upgrade Now
      </button>
    </div>

    {/* Premium Plan */}
    <div className="relative bg-gray-800 rounded-3xl p-8 text-center
      border-4 border-transparent
      hover:border-pink-500
      hover:shadow-[0_0_20px_rgba(236,72,153,0.7)]
      transition-all duration-300 ease-in-out
      cursor-pointer
      ">
      <h3 className="text-2xl font-bold mb-2 text-pink-400">Premium</h3>
      <p className="text-gray-400 mb-6">Full power & control</p>
      <p className="text-5xl font-extrabold mb-6">$49<span className="text-base font-normal">/mo</span></p>
      <ul className="text-left text-gray-300 space-y-3 mb-6">
        <li>✅ Unlimited generations</li>
        <li>✅ 24/7 support</li>
        <li>✅ Team collaboration</li>
      </ul>
      <button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full font-semibold
        shadow-md
        hover:shadow-pink-400/70
        transition
        ">
        Go Premium
      </button>
    </div>
  </div>
</div>


    </>
  )
}

export default PurchesPlane