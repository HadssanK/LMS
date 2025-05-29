import React from 'react';

const About = () => {
  return (
    <div className="w-full">

      {/* 🔥 Hero Banner */}
      <div className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091012184-7e0cdfbb679e?auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-indigo-400">AI Writer</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            The future of content writing is here — create smarter, faster, and better with AI.
          </p>
        </div>
      </div>

      {/* 🧠 What is AI Writer */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">What is AI Writer?</h2>
            <p className="text-gray-600 leading-relaxed">
              AI Writer is an AI-powered content generation tool that helps users create blog posts, articles, and professional content in seconds. Just enter your topic and our system generates quality text instantly. It's ideal for bloggers, marketers, students, and businesses.
            </p>
          </div>
          <div>
            <img
              src="https://illustrations.popsy.co/gray/artificial-intelligence.svg"
              alt="AI"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ⚡ Why Use It */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose AI Writer?</h2>
            <p className="text-gray-600 leading-relaxed">
              AI Writer saves you time, boosts creativity, and helps overcome writer’s block. No more staring at a blank screen — let AI do the thinking for you! It’s smart, simple, and constantly improving with advanced language models.
            </p>
          </div>
          <div>
            <img
              src="https://illustrations.popsy.co/gray/blogging.svg"
              alt="Writing"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </section>

      {/* 📢 Call To Action */}
      <section className="py-16 bg-indigo-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Generate Amazing Content?</h2>
        <p className="text-lg mb-6">Start writing with AI now. It’s fast, easy, and free to try!</p>
        <a
          href="/write"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          ✍️ Try AI Writer
        </a>
      </section>
    </div>
  );
};

export default About;
