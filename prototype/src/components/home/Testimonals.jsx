import { useRef } from 'react';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust based on card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const reviews = [
    {
      name: "Anish B.",
      title: "Absolutely Brilliant!",
      text: "I can't recommend Leafclutch Technologies enough! The tutors truly understand my child's needs, and the results have been amazing."
    },
    {
      name: "Liam J.",
      title: "Excellent tutors!",
      text: "The tutors have a deep understanding of the curriculum, which has helped me immensely with my exams."
    },
    {
      name: "Thomas S.",
      title: "Professional and friendly!",
      text: "Leafclutch Technologies offers a welcoming atmosphere and effective teaching strategies, helping my child excel in school."
    },
    {
      name: "Daniel H.",
      title: "Worth every penny!",
      text: "The one-on-one tutoring sessions have been a game changer for my daughter's A-Level prep."
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <span className="inline-block bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded-md text-sm font-bold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004047]">
              What Our Clients Say
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-[#2ecc71] text-[#2ecc71] flex items-center justify-center hover:bg-[#2ecc71] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-[#2ecc71] text-white flex items-center justify-center hover:bg-[#27ae60] shadow-lg transition-all duration-300 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid/Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[400px] bg-[#f4fafa] p-10 rounded-3xl border border-white shadow-sm snap-start transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <h4 className="text-[#004047] font-bold text-2xl mb-4 group-hover:text-[#2ecc71] transition-colors">
                {review.title}
              </h4>

              <p className="text-slate-600 leading-relaxed mb-10 italic">
                "{review.text}"
              </p>

              <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                <span className="text-[#004047] font-extrabold tracking-tight">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
