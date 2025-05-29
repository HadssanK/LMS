import React from 'react';

const Testimonials = () => {
 ;

  return (
  <div id='testimonials' className="bg-gray-900 py-20 px-6 text-white">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-5xl font-extrabold mb-4 text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]">
      What Our Users Say
    </h2>
    <p className="text-pink-300 text-lg tracking-wide">Trusted by thousands of content creators worldwide</p>
  </div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
    {/* Testimonial 1 */}
    <div className="bg-gray-800 rounded-3xl p-8 shadow-lg
                    border-4 border-pink-600
                    hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]
                    hover:border-pink-400
                    transition-all duration-300 cursor-pointer">
      <div className="flex items-center mb-6 space-x-4">
        <img
          className="w-16 h-16 rounded-full border-2 border-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.7)]"
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Sara Ahmed"
        />
        <div>
          <h3 className="text-xl font-semibold text-pink-400">Sara Ahmed</h3>
          <p className="text-pink-300 text-sm">Content Marketer</p>
        </div>
      </div>
      <p className="text-pink-200 italic drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
        "This AI content generator saved me hours of writing! The quality is amazing and it’s so easy to use."
      </p>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-gray-800 rounded-3xl p-8 shadow-lg
                    border-4 border-pink-600
                    hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]
                    hover:border-pink-400
                    transition-all duration-300 cursor-pointer">
      <div className="flex items-center mb-6 space-x-4">
        <img
          className="w-16 h-16 rounded-full border-2 border-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.7)]"
          src="https://randomuser.me/api/portraits/men/44.jpg"
          alt="Ali Khan"
        />
        <div>
          <h3 className="text-xl font-semibold text-pink-400">Ali Khan</h3>
          <p className="text-pink-300 text-sm">Freelance Writer</p>
        </div>
      </div>
      <p className="text-pink-200 italic drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
        "Highly recommend this tool for anyone looking to boost their content game. Easy, fast, and reliable."
      </p>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-gray-800 rounded-3xl p-8 shadow-lg
                    border-4 border-pink-600
                    hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]
                    hover:border-pink-400
                    transition-all duration-300 cursor-pointer">
      <div className="flex items-center mb-6 space-x-4">
        <img
          className="w-16 h-16 rounded-full border-2 border-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.7)]"
          src="https://randomuser.me/api/portraits/women/24.jpg"
          alt="Zara Noor"
        />
        <div>
          <h3 className="text-xl font-semibold text-pink-400">Zara Noor</h3>
          <p className="text-pink-300 text-sm">Blogger</p>
        </div>
      </div>
      <p className="text-pink-200 italic drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
        "The best AI writing assistant I’ve used so far. It helps me create content that connects with my readers."
      </p>
    </div>
  </div>
</div>


  );
};

export default Testimonials;
