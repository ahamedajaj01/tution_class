const RecentPosts = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="inline-block bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded-md text-sm font-bold mb-4">
              It's Interesting
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004047]">
              Recent Posts
            </h2>
          </div>
          <button className="hidden md:block bg-[#004047] text-white px-8 py-3 rounded font-bold hover:bg-[#002f35] transition-all">
            Read More
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Main Featured Post (Left) */}
          <div className="group cursor-pointer border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="overflow-hidden h-[300px] md:h-[450px]">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dea43f?q=80&w=800" 
                alt="Center Building" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#004047] mb-4 group-hover:text-[#2ecc71] transition-colors">
                How to Choose the Right Tuition Centre for Success
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Discover essential factors to consider when choosing a tuition centre to support your child's academic success, including experience and teaching style.
              </p>
              <span className="text-[#2ecc71] font-bold border-b-2 border-[#2ecc71] pb-1">
                Read More
              </span>
            </div>
          </div>

          {/* Side Posts Stack (Right) */}
          <div className="flex flex-col gap-8">
            
            {/* Small Post 1 */}
            <div className="flex flex-col md:flex-row gap-6 group cursor-pointer">
              <div className="relative w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
                <span className="absolute top-2 left-2 z-10 bg-[#2ecc71] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                  Primary
                </span>
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xl font-bold text-[#004047] mb-2 group-hover:text-[#2ecc71] transition-colors">
                  Unlocking the Power of Inquiry-Based Learning
                </h4>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  By flipping the traditional model of education on its head, inquiry-based learning puts students in the driver's seat.
                </p>
                <span className="text-[#2ecc71] text-sm font-bold">Read More</span>
              </div>
            </div>

            {/* Small Post 2 */}
            <div className="flex flex-col md:flex-row gap-6 group cursor-pointer pt-8 border-t border-slate-100">
              <div className="relative w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
                <span className="absolute top-2 left-2 z-10 bg-[#2ecc71] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                  Technology
                </span>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xl font-bold text-[#004047] mb-2 group-hover:text-[#2ecc71] transition-colors">
                  Why Professional Tutoring is Essential
                </h4>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  Finding the right support can be a daunting task for parents seeking quality education for their children.
                </p>
                <span className="text-[#2ecc71] text-sm font-bold">Read More</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;