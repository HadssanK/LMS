export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-[90vh] flex items-center justify-center px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Generate AI-Powered Content<br className="hidden md:block" /> in Seconds
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            Instantly create blogs, captions, ads & more using smart AI. Save time and create better content faster.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-lg font-semibold text-lg shadow-lg">
              Try It Free
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11339/11339391.png"
            alt="AI Content"
            className="w-full max-w-md drop-shadow-xl animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
}
