import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const features = [
    "Flexibility", "Qualified Tutors",
    "Variety of courses", "Engaging Classrooms",
    "Proven Success", "Friendly Support"
  ];

  const stats = [
    { number: "6", label: "Professional Teachers" },
    { number: "20+", label: "Learning Groups" },
    { number: "999+", label: "Happy Students (10 years)" },
    { number: "5", label: "Special Classes" },
  ];

  return (
    <div className="bg-white">
      {/* Why Choose Us Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-[#2ecc71] font-bold text-sm bg-[#eefdf3] px-3 py-1 rounded">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-[#004047]">
              Why Leafclutch Technologies?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We pride ourselves on a decade-long commitment to student success.
              Leafclutch Technologies is renowned for its expert tutoring across a variety of subjects.
              We believe every student deserves personalized attention, and our
              dedicated tutors craft lessons tailored to individual needs.
            </p>

            {/* Features Grid */}
            <ul className="grid grid-cols-2 gap-y-4 pt-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-slate-700 font-medium">
                  <span className="w-2 h-2 bg-[#004047] rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => navigate('/about')}
              className="mt-8 bg-[#004047] text-white px-8 py-3 rounded shadow-md hover:bg-[#002f35] transition-all active:scale-95 cursor-pointer"
            >
              More About Us
            </button>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#004047] rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
              alt="Engaged students"
              className="relative z-10 rounded-xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section with Grid Background */}
      <section className="relative py-20 border-t border-slate-100 overflow-hidden">
        {/* Decorative Grid Background - Simple CSS trick for the graph look */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#004047 1px, transparent 1px), linear-gradient(90deg, #004047 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2 group">
                <div className="text-5xl font-bold text-[#004047] group-hover:text-[#2ecc71] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-500 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;