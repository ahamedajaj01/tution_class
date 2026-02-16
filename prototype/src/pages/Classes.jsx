import { Link } from 'react-router-dom';

const ClassesPage = () => {
  const courses = [
    { name: "GCSE", desc: "Our GCSE classes focus on building strong foundations, ensuring students are ready to achieve top grades in their exams." },
    { name: "A-level", desc: "Our A-Level sessions offer focused guidance in key subjects, helping students build solid knowledge and prepare confidently for exams and university entry." },
    { name: "11 Plus", desc: "Our 11+ preparation courses equip students with the essential skills and strategies needed to excel in entrance exams for top grammar and independent schools." },
    { name: "Secondary", desc: "Our Secondary Program, covering Years 7 to 9, is essential for students' foundational development. We offer subjects like English, Maths, and Science." },
    { name: "Computer Science", desc: "Explore the world of computer science and discover the endless possibilities of technology with our engaging courses." }
  ];

  return (
    <div className="bg-white font-sans text-slate-900">
      
      {/* 1. Page Header (Hero) */}
      <section className="bg-[#004047] py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Classes</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Welcome to our center! We offer a wide variety of classes 
            taught by highly experienced and passionate teachers.
          </p>
        </div>
      </section>

      {/* 2. Choose Your Course Section */}
      <section className="py-20 px-6 bg-[#f4fafa]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded text-sm font-bold uppercase">Our Classes</span>
            <h2 className="text-4xl font-bold text-[#004047] mt-4">Choose Your Course</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="p-8 md:p-12 border-b border-slate-50 last:border-none hover:bg-slate-50 transition-colors group"
              >
                <h3 className="text-2xl font-bold text-[#004047] mb-4 group-hover:text-[#2ecc71] transition-colors">
                  {course.name}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  {course.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Statistics & Popular Classes */}
      <section className="py-20 px-6">
        {/* Stats Grid Background */}
        <div className="max-w-7xl mx-auto mb-20 relative overflow-hidden py-12 border-y border-slate-100">
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ backgroundImage: 'linear-gradient(#004047 1px, transparent 1px), linear-gradient(90deg, #004047 1px, transparent 1px)', backgroundSize: '25px 25px' }}
          ></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div><div className="text-4xl font-black text-[#004047]">6+</div><div className="text-[10px] uppercase font-bold text-slate-400">Teachers</div></div>
            <div><div className="text-4xl font-black text-[#004047]">20+</div><div className="text-[10px] uppercase font-bold text-slate-400">Groups</div></div>
            <div><div className="text-4xl font-black text-[#004047]">999+</div><div className="text-[10px] uppercase font-bold text-slate-400">Students</div></div>
            <div><div className="text-4xl font-black text-[#004047]">5</div><div className="text-[10px] uppercase font-bold text-slate-400">Specialities</div></div>
          </div>
        </div>

        {/* Popular Classes Cards */}
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#004047] mb-12">Our Popular Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "11 Plus", i: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400" },
              { t: "Secondary", i: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400" },
              { t: "Computer Science", i: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400" }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-xl overflow-hidden mb-6 h-64 shadow-md">
                  <img src={item.i} alt={item.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold text-[#004047] group-hover:text-[#2ecc71]">{item.t}</h4>
                <Link to="/contact" className="text-[#2ecc71] text-xs font-bold uppercase mt-2 inline-block border-b border-transparent hover:border-[#2ecc71]">More info</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ClassesPage;