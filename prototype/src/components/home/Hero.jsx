import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    /* Background color #f4fafa used directly via arbitrary value */
    <section className="bg-[#f4fafa] py-16 px-6 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content Column */}
        <div className="space-y-6">
          {/* Badge with white bg and green text */}
          <span className="inline-block bg-white text-[#2ecc71] px-4 py-1 rounded-md text-sm font-bold shadow-sm border border-gray-100">
            Tutoring services
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-[#004047] leading-tight">
            Unlock Potential <br />
            with <span className="text-[#004047]">Leafclutch</span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
            For over 2 years, Leafclutch Tuition has proudly supported students in
            Dartford & surrounding areas in achieving their academic goals.
            Whether it's preparation for the 11+, GCSE, A-Levels, or beyond,
            our qualified tutors provide tailored guidance.
          </p>

          {/* Action Buttons using Hex Codes */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => navigate('/classes')}
              className="bg-[#2ecc71] text-white px-8 py-4 rounded-md font-bold hover:bg-[#27ae60] transition-all hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Choose Class
            </button>
            <button 
              onClick={() => navigate('/book-now')}
              className="bg-[#004047] text-white px-8 py-4 rounded-md font-bold hover:bg-[#002f35] transition-all hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative">
          {/* Main Top Image - Styled like a Polaroid */}
          <div className="relative z-10 rounded-lg overflow-hidden border-[12px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
              alt="Advanced Classroom"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Overlapping Bottom Image */}
          <div className="absolute -bottom-10 -left-10 w-2/3 z-20 rounded-lg overflow-hidden border-[10px] border-white shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600"
              alt="Tutor helping student"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;