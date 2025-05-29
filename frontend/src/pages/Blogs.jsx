import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'How AI is Changing Content Writing',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we write blogs and articles.',
    date: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1581091012184-7e0cdfbb679e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Top 5 AI Tools for Writers in 2025',
    excerpt: 'Here’s a list of top-rated AI tools that help content creators write better and faster.',
    date: 'May 12, 2025',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Can AI Replace Human Writers?',
    excerpt: 'AI is powerful, but will it ever completely replace human creativity? Let’s explore.',
    date: 'May 10, 2025',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
];

const Blogs = () => {
  return (
    <div className="w-full">
      
      {/* 🏞 Hero Banner */}
      <div className="relative h-[50vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1470&q=80')` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Latest Blogs</h1>
          <p className="mt-2 text-lg max-w-xl mx-auto">Stay updated with the newest articles and insights on AI-generated content</p>
        </div>
      </div>

      {/* 📚 Blog Cards */}
      <div className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a href={`/blog/${blog.id}`} className="text-indigo-600 font-medium hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Blogs;
