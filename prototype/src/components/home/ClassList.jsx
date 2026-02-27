import { useNavigate } from "react-router-dom";

const ClassList = () => {
  const navigate = useNavigate();
  const classes = [
    {
      name: "GCSE",
      description: "Our GCSE classes focus on building strong foundations, ensuring students are ready to achieve top grades in their exams.",
      bg: "bg-white"
    },
    {
      name: "Secondary",
      description: "Our Secondary Program, covering Years 7 to 9, is essential for students' foundational development. We offer subjects like English, Maths, and Science",
      bg: "bg-[#f4fafa]",
    },
    {
      name: "A-level",
      description: "Our A-Level sessions offer focused guidance in key subjects, helping students build solid knowledge and prepare confidently for exams and university entry.",
      bg: "bg-white",
      highlight: true
    },
    {
      name: "11 Plus",
      description: "Our 11+ preparation courses equip students with the essential skills and strategies needed to excel in entrance exams for top grammar and independent schools.",
      bg: "bg-[#f4fafa]",
    },
    {
      name: "Computer Science",
      description: "Explore the world of computer science and discover the endless possibilities of technology with our engaging courses.",
      bg: "bg-white"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <span className="inline-block bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded-md text-sm font-bold mb-4">
          Our Classes
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#004047] mb-12">
          Choose Your Class
        </h2>

        {/* List Container */}
        <div className="text-left rounded-xl overflow-hidden shadow-sm border border-slate-100">
          {classes.map((item, index) => (
            <div 
              key={index} 
              className={`${item.bg} p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 last:border-none transition-colors hover:bg-slate-50`}
            >
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-3 ${item.highlight ? 'text-[#2ecc71]' : 'text-[#004047]'}`}>
                  {item.name}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* Schedule Info (if available) */}
              {item.schedule && (
                <div className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest text-right whitespace-pre-line">
                  {item.schedule.split('|').join('\n')}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <button 
          onClick={() => navigate('/classes')}
          className="mt-12 bg-[#004047] text-white px-10 py-4 rounded-md font-bold transition-all hover:bg-[#002f35] hover:shadow-lg active:scale-95 cursor-pointer"
        >
          Read More
        </button>

      </div>
    </section>
  );
};

export default ClassList;