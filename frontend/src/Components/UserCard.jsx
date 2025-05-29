import React from 'react'

const UserCard = () => {
  return (
   <section className="w-full bg-gray-900 py-20 px-4 md:px-10">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-white">📚 Example AI-Generated Blogs</h2>
    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Here's what our AI can generate – high-quality blog snippets in seconds.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl shadow-2xl text-white hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-2">🌱 How to Start a Garden</h3>
      <p className="text-sm">
        Discover the essentials of starting your own garden, from soil prep to plant care...
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-6 rounded-xl shadow-2xl text-white hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-2">💡 5 Productivity Hacks</h3>
      <p className="text-sm">
        Boost your daily productivity with these AI-recommended, easy-to-apply techniques...
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-xl shadow-2xl text-white hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-2">🍝 The Secret to Perfect Pasta</h3>
      <p className="text-sm">
        Learn how to cook authentic Italian pasta at home with AI-approved tips and tricks...
      </p>
    </div>
  </div>
</section>

  )
}

export default UserCard