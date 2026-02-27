import { useNavigate } from "react-router-dom";

const OurClass = () => {
  const navigate = useNavigate();
  const classData = [
    {
      title: "GCSE",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500",
      desc: "Our GCSE classes focus on building strong foundations, ensuring students are ready to achieve top grades in their exams."
    },
    {
      title: "A-level",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500",
      desc: "Our A-Level sessions offer focused guidance in key subjects, helping students build solid knowledge and prepare confidently for exams and university entry."
    },
    {
      title: "11 Plus",
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=500",
      desc: "Our 11+ preparation courses equip students with the essential skills and strategies needed to excel in entrance exams for top grammar and independent schools."
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <span className="inline-block bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded-md text-sm font-bold mb-4">
          Our Classes
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#004047] mb-6">
          Our Engaging Classes
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          We provide a wide variety of interactive classes designed to foster curiosity and a love for learning, 
          covering Primary, Secondary, GCSE, A-Level, IB, Computer Science, and more upon request.
        </p>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classData.map((item, index) => (
            <div 
              key={index}
              onClick={() => navigate('/classes')}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl group cursor-pointer"
            >
              {/* Card Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col items-center text-center">
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="mt-auto">
                  <span className="text-[#2ecc71] text-xs font-bold uppercase tracking-widest block mb-1">
                    More info
                  </span>
                  <h3 className="text-2xl font-bold text-[#004047] transition-colors group-hover:text-[#2ecc71]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16">
          <button 
            onClick={() => navigate('/classes')}
            className="bg-[#004047] text-white px-10 py-4 rounded-md font-bold transition-all duration-300 hover:bg-[#002f35] hover:shadow-xl active:scale-95 cursor-pointer"
          >
            View All
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurClass;