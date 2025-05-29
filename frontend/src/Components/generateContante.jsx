import React, { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

//  const API_URL = process.env.REACT_APP_API_URL;

const handleGenerate = async () => {
  if (!topic) return;

  setLoading(true);
  setContent("");
  setCopied(false);

  try {
    const response = await axios.post(
      `http://localhost:5000/api/generate`,
      { topic }
    );
    setContent(response.data.generated_text);
  } catch (error) {
    console.error("Error:", error);
    setContent("❌ Error generating content. Please check your API or server.");
  } finally {
    setLoading(false);
  }
};

  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="generate" className="w-full bg-gray-900 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Create Smarter Content with{" "}
            <span className="text-indigo-300">AI</span>
          </h1>
          <p className="mt-4 text-indigo-200 text-lg max-w-md">
            Just give us your topic and let AI generate high-quality blog content in seconds.
          </p>
        </div>

        {/* Right Input Section */}
        <div className="bg-transparent backdrop-blur-md shadow-xl rounded-xl p-6 space-y-4 border border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-padding">
          <input
            type="text"
            placeholder="Enter your blog topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-4 py-3 border border-indigo-400 rounded-full focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 text-sm bg-white bg-opacity-20 placeholder-indigo-200 text-indigo-100 transition"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3 rounded-full hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
          >
            {loading ? "Generating..." : "🚀 Generate Content"}
          </button>
        </div>
      </div>

      {/* Loading Message */}
      {loading && (
        <div className="mt-8 text-center text-indigo-300 font-semibold">
          Generating content, please wait...
        </div>
      )}

      {/* Show Output Box */}
      {!loading && content && (
        <div className="mt-12 max-w-4xl mx-auto bg-gray-900 text-white border border-gray-700 shadow-lg rounded-xl p-6 relative">
          <h2 className="text-xl font-semibold text-indigo-500 mb-2">
            Generated Content:
          </h2>
          <p className="text-gray-300 whitespace-pre-line">{content}</p>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-1 rounded-full shadow-md transition"
          >
            {copied ? "✅ Copied!" : "📋 Copy"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
