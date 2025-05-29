import React from 'react';

const Footer = () => {
  return (
   <footer className="bg-gray-900  text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Logo & Tagline */}
    <div>
      <h2 className="text-2xl font-bold text-indigo-500">AIContent</h2>
      <p className="mt-2 text-sm text-gray-400">Smarter content creation, faster than ever.</p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#" className="hover:text-white transition">Home</a></li>
        <li><a href="#" className="hover:text-white transition">Features</a></li>
        <li><a href="#" className="hover:text-white transition">Pricing</a></li>
        <li><a href="#" className="hover:text-white transition">Generate</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Resources</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#" className="hover:text-white transition">FAQs</a></li>
        <li><a href="#" className="hover:text-white transition">Support</a></li>
        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
      <p className="text-sm text-gray-400 mb-2">Get latest AI content tips & updates.</p>
      <form className="flex flex-col sm:flex-row gap-2">
        <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded-md text-black" />
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">Subscribe</button>
      </form>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
    &copy; {new Date().getFullYear()} AIContent. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
