import React from 'react';

const HowItWorks = () => {

  return (
  <div id='howitworks' className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">How It Works</h2>
    <p className="text-gray-400 mb-12">Just 3 simple steps to generate high-quality content using AI</p>
  </div>

  <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
    {/* Step 1 */}
    <div className="bg-gray-800 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
      <div className="text-4xl mb-4 text-blue-400">📝</div>
      <h3 className="text-xl font-semibold mb-2">Enter Your Idea</h3>
      <p className="text-gray-400">Type a topic, sentence, or idea you want content about.</p>
    </div>

    {/* Step 2 */}
    <div className="bg-gray-800 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
      <div className="text-4xl mb-4 text-green-400">⚙️</div>
      <h3 className="text-xl font-semibold mb-2">Click Generate</h3>
      <p className="text-gray-400">Our AI writes for you instantly with smart & relevant content.</p>
    </div>

    {/* Step 3 */}
    <div className="bg-gray-800 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition">
      <div className="text-4xl mb-4 text-yellow-400">📋</div>
      <h3 className="text-xl font-semibold mb-2">Copy & Use</h3>
      <p className="text-gray-400">Review, copy, or edit the generated content as you like.</p>
    </div>
  </div>
</div>

  );
};

export default HowItWorks;
