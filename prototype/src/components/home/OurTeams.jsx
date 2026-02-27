import { useNavigate } from "react-router-dom";
import { Facebook, Instagram } from 'lucide-react'

const OurTeams = () => {
  const navigate = useNavigate();
  const teachers = [
    { name: "Vijay", role: "Maths Lead", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400" },
    { name: "Nazim", role: "Science Specialist", img: "https://images.unsplash.com/photo-1556157382-97dee2dcbfe?q=80&w=400" },
    { name: "Sadik", role: "English Expert", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded-md text-sm font-bold mb-4">
          Our Team
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#004047] mb-6">
          Meet Our Teachers
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          Our passionate and experienced educators are committed to inspiring students and fostering a love for learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {teachers.map((teacher, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-64 h-64 rounded-xl overflow-hidden border-8 border-[#f4fafa] shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#004047]">{teacher.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{teacher.role}</p>

              {/* Updated Social Icons using Lucide */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#004047] text-white flex items-center justify-center cursor-pointer transition-colors hover:bg-[#2ecc71]">
                  <Facebook size={18} /> {/* [2] Facebook Icon */}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#004047] text-white flex items-center justify-center cursor-pointer transition-colors hover:bg-[#2ecc71]">
                  <Instagram size={18} /> {/* [3] Instagram Icon */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={() => navigate('/programs')}
          className="mt-16 bg-[#004047] text-white px-10 py-4 rounded-md font-bold transition-all hover:bg-[#002f35] hover:shadow-xl active:scale-95 cursor-pointer"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default OurTeams;