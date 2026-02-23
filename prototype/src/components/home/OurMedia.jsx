const OurMedia = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header Label */}
        <span className="inline-block bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded-md text-sm font-bold mb-4">
          Our Media
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-[#004047] mb-6">
          Engaging Our Students
        </h2>

        <p className="text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
          Watch how our interactive environment helps students thrive.
          Our sessions are designed to be vibrant, supportive, and highly effective.
        </p>

        {/* Video Container - Aspect Ratio 16:9 */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-_uS9h_7Ehc"
              title="The Importance of Education"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>


        </div>

        {/* Text Stats Overlay (Recreating the text from your image) */}
        <div className="mt-8">
          <h3 className="text-[#004047] text-xl md:text-3xl font-black uppercase italic">
            Empowering More Than <span className="text-[#2ecc71]">5000+</span> Students
          </h3>
        </div>

      </div>
    </section>
  );
};

export default OurMedia;