const RecentPosts = () => {
  const secondaryPosts = [
    {
      category: "Learning Strategies",
      title: "Unlocking the Power of Inquiry-Based Learning",
      excerpt: "By flipping the traditional model of education on its head, inquiry-based learning puts students in the driver's seat of their own academic journey.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600",
      date: "Mar 15, 2024"
    },
    {
      category: "Exam Prep",
      title: "Why Mock Exams are Critical for GCSE Success",
      excerpt: "Understanding time management and exam pressure is half the battle. Our mock series prepares students for the real thing.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600",
      date: "Mar 10, 2024"
    },
    {
      category: "Digital Skills",
      title: "The Role of Coding in Modern Education",
      excerpt: "It's not just about computers; it's about logic. Explore why every student should understand the basics of Computer Science.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
      date: "Mar 05, 2024"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Insights & Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#004047] leading-tight">
              Stay ahead with our <br />
              <span className="text-[#2ecc71]">latest news</span>
            </h2>
          </div>
          <button className="bg-white text-[#004047] border-2 border-[#004047] px-8 py-3 rounded-full font-bold hover:bg-[#004047] hover:text-white transition-all duration-300 shadow-sm active:scale-95">
            View All Posts
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Main Featured Post (Left - 7 Columns) */}
          <div className="lg:col-span-7 group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="relative overflow-hidden h-[350px] md:h-[500px]">
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-[#2ecc71] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-tighter">
                  Featured Guide
                </span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600"
                alt="Guide for success"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004047]/80 to-transparent opacity-60"></div>
            </div>
            <div className="p-10">
              <div className="flex items-center gap-4 text-slate-400 text-sm mb-4 font-medium">
                <span>Education</span>
                <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                <span>March 20, 2024</span>
              </div>
              <h3 className="text-3xl font-black text-[#004047] mb-6 group-hover:text-[#2ecc71] transition-colors leading-tight">
                How to Choose the Right Tuition Centre for Long-Term Academic Success
              </h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                Discover the essential factors to consider when choosing a tuition centre to support your child's academic journey, from qualified tutors to personalized methodology.
              </p>
              <div className="flex items-center gap-2 text-[#2ecc71] font-bold group/btn">
                <span className="border-b-2 border-transparent group-hover/btn:border-[#2ecc71] transition-all pb-1">Read Full Article</span>
                <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Side Posts Stack (Right - 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {secondaryPosts.map((post, index) => (
              <div key={index} className="flex gap-6 group cursor-pointer bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[#2ecc71] text-[10px] font-bold uppercase tracking-tight mb-2">
                    {post.category}
                  </span>
                  <h4 className="text-lg font-bold text-[#004047] mb-2 group-hover:text-[#2ecc71] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h4>
                  <p className="hidden md:block text-slate-400 text-xs mb-3 line-clamp-1">
                    {post.excerpt}
                  </p>
                  <span className="text-slate-300 text-[10px] font-medium">{post.date}</span>
                </div>
              </div>
            ))}

            {/* Newsletter CTA Inside Sidebar */}
            <div className="mt-4 bg-[#004047] p-8 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ecc71] rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="text-xl font-bold mb-2 relative z-10">Get Weekly Tips</h4>
              <p className="text-[#eefdf3]/70 text-sm mb-6 relative z-10">Join 200+ parents receiving academic success strategies every Monday.</p>
              <div className="flex gap-2 relative z-10">
                <input type="text" placeholder="Email" className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm outline-none focus:border-[#2ecc71] flex-1" />
                <button className="bg-[#2ecc71] text-white px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform active:scale-95">Join</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentPosts;