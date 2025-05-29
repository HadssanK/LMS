import React from 'react'

const FAQ = () => {
  return (
  <div id='faqs' className="bg-gray-900 py-20 px-6 text-white">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-5xl font-extrabold mb-6 text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600
                   bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
      Frequently Asked Questions
    </h2>
    <p className="text-indigo-300 text-lg">Got questions? We've got answers!</p>
  </div>

  <div className="max-w-3xl mx-auto space-y-6">
    {/* FAQ Item 1 */}
    <details className="bg-gray-800 rounded-2xl p-5 shadow-md border-2 border-indigo-600 hover:border-purple-500 transition-all duration-300 cursor-pointer">
      <summary className="text-indigo-400 text-xl font-semibold cursor-pointer select-none">
        How does the AI content generator work?
      </summary>
      <p className="mt-3 text-indigo-200">
        Our AI uses advanced language models to understand your input and generate high-quality, relevant content instantly.
      </p>
    </details>

    {/* FAQ Item 2 */}
    <details className="bg-gray-800 rounded-2xl p-5 shadow-md border-2 border-indigo-600 hover:border-purple-500 transition-all duration-300 cursor-pointer">
      <summary className="text-indigo-400 text-xl font-semibold cursor-pointer select-none">
        Is my data safe and private?
      </summary>
      <p className="mt-3 text-indigo-200">
        Absolutely! We prioritize your privacy and never store your input data after content generation.
      </p>
    </details>

    {/* FAQ Item 3 */}
    <details className="bg-gray-800 rounded-2xl p-5 shadow-md border-2 border-indigo-600 hover:border-purple-500 transition-all duration-300 cursor-pointer">
      <summary className="text-indigo-400 text-xl font-semibold cursor-pointer select-none">
        Can I use generated content commercially?
      </summary>
      <p className="mt-3 text-indigo-200">
        Yes, all content generated is royalty-free and you can use it for commercial purposes.
      </p>
    </details>

    {/* FAQ Item 4 */}
    <details className="bg-gray-800 rounded-2xl p-5 shadow-md border-2 border-indigo-600 hover:border-purple-500 transition-all duration-300 cursor-pointer">
      <summary className="text-indigo-400 text-xl font-semibold cursor-pointer select-none">
        What languages does the AI support?
      </summary>
      <p className="mt-3 text-indigo-200">
        Currently, we support English content generation with plans to add more languages soon.
      </p>
    </details>
  </div>
</div>


  )
}

export default FAQ