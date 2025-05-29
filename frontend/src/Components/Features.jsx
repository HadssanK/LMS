import React from 'react';

const Features = () => {
 

  return (
 <div id='features' className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
    <p className="text-gray-400">Boost your productivity with AI-driven content in seconds</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Feature 1 */}
    <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div className="text-green-400 text-3xl mb-4">⚡</div>
      <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
      <p className="text-gray-400">Get content in seconds with lightning-fast AI responses.</p>
    </div>

    {/* Feature 2 */}
    <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div className="text-blue-400 text-3xl mb-4">🧠</div>
      <h3 className="text-xl font-semibold mb-2">Smart AI</h3>
      <p className="text-gray-400">Powered by cutting-edge language models for better output.</p>
    </div>

    {/* Feature 3 */}
    <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div className="text-yellow-400 text-3xl mb-4">✍️</div>
      <h3 className="text-xl font-semibold mb-2">Multiple Content Types</h3>
      <p className="text-gray-400">Write blogs, captions, ads, emails, and much more easily.</p>
    </div>

    {/* Feature 4 */}
    <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div className="text-pink-400 text-3xl mb-4">🎯</div>
      <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
      <p className="text-gray-400">AI knows how to write for Google & your audience.</p>
    </div>

    {/* Feature 5 */}
    <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div className="text-purple-400 text-3xl mb-4">🔒</div>
      <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
      <p className="text-gray-400">Your data is safe – nothing is stored or reused.</p>
    </div>

    {/* Feature 6 */}
    <div className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition">
      <div className="text-red-400 text-3xl mb-4">💡</div>
      <h3 className="text-xl font-semibold mb-2">Creative Support</h3>
      <p className="text-gray-400">Stuck? Let AI give you topic ideas and creative sparks.</p>
    </div>
  </div>
</div>

  );
};

export default Features;
