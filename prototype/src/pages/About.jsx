import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Facebook, Instagram, CheckCircle, Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 374; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const reviews = [
    {
      name: "Mrs. Sarah Jenkins",
      title: "11+ Success!",
      text: "The structured approach at Leafclutch was exactly what my daughter needed. She gained so much confidence and eventually cleared her 11+ with flying colors.",
      stars: 5
    },
    {
      name: "James Wilson",
      title: "Highly Professional",
      text: "As a student, I found the A-Level chemistry sessions incredibly helpful. Complex topics were broken down into simple, manageable concepts.",
      stars: 5
    },
    {
      name: "Priya Sharma",
      title: "Brilliant Tutors",
      text: "My son used to struggle with Maths, but the tutors here made it fun and engaging. His school grades have improved from a C to an A.",
      stars: 5
    },
    {
      name: "David Thompson",
      title: "GCSE Preparation",
      text: "The mock exam sessions were a game changer. They really helped me manage my time better and understand the marking schemes.",
      stars: 5
    },
    {
      name: "Elena Rodriguez",
      title: "Personalized Support",
      text: "What sets Leafclutch apart is the personalized attention. They really care about each student's individual progress and learning style.",
      stars: 5
    },
    {
      name: "Robert MacAlister",
      title: "Excellent Science Lab",
      text: "The way they integrate practical examples with theory is unmatched. It made learning Biology and Physics much more interesting for my twins.",
      stars: 5
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-900">

      {/* 1. Hero / About Intro Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400"
            alt="Professional Learning Environment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f4fafa] to-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-black text-[#004047] mb-6">About Leafclutch Technologies</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            Leafclutch Technologies is a respected educational provider located in the heart of Dartford.
            We are committed to delivering exceptional quality tuition to students from Year 4
            through to A-Levels and IB. Our flexible lesson formats allow students to thrive academically.
          </p>
          <Link to="/classes">
            <button className="bg-[#2ecc71] text-white px-10 py-4 rounded-md font-bold hover:bg-[#27ae60] transition-all shadow-lg active:scale-95">
              Choose Class
            </button>
          </Link>
        </div>
      </section>

      {/* 2. Vision & Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-[#004047] mt-4">Learning without borders</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-4 border-[#004047] p-12 text-center rounded-sm hover:bg-[#f4fafa] transition-colors">
            <h3 className="text-3xl font-bold text-[#004047] mb-6">Vision</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              We envision a future where every student receives personalized, high-quality education
              that empowers them to excel and fully realise their potential.
            </p>
          </div>
          <div className="border-4 border-[#004047] p-12 text-center rounded-sm hover:bg-[#f4fafa] transition-colors">
            <h3 className="text-3xl font-bold text-[#004047] mb-6">Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our mission is to make Dartford a hub of academic excellence,
              nurturing students throughout England to achieve their goals and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Features Grid Section */}
      <section className="py-20 px-6 bg-[#f4fafa]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-[#2ecc71] font-bold">What You Get</span>
          <h2 className="text-4xl font-bold text-[#004047] mt-2">See our features</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 items-center">
          <div className="space-y-12">
            {[
              { n: "01", t: "Flexibility", d: "Tutoring sessions that fit around busy schedules." },
              { n: "02", t: "Convenient Location", d: "Located in the heart of Dartford for easy access." },
              { n: "03", t: "Skill Development", d: "Fostering independent learning and self-discipline." }
            ].map(f => (
              <div key={f.n} className="text-left">
                <h4 className="text-xl font-bold text-[#004047] mb-2">{f.n}. {f.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=600" alt="Education" className="rounded-full border-8 border-white shadow-2xl animate-pulse" />
          </div>
          <div className="space-y-12">
            {[
              { n: "04", t: "Personalized Learning", d: "Tailored lessons designed to meet unique needs." },
              { n: "05", t: "Engaging Methods", d: "Innovative teaching using the latest tools." },
              { n: "06", t: "Comprehensive Curriculum", d: "From 11+ to A-Level support across all subjects." }
            ].map(f => (
              <div key={f.n} className="text-left">
                <h4 className="text-xl font-bold text-[#004047] mb-2">{f.n}. {f.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Statistics (Blueprint Style) */}
      <section className="py-20 relative overflow-hidden bg-white border-y border-slate-100">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(#004047 1px, transparent 1px), linear-gradient(90deg, #004047 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { v: "6", l: "Professional Teachers" },
            { v: "20+", l: "Learning Groups" },
            { v: "999+", l: "Students Helped" },
            { v: "5", l: "Special Classes" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-5xl font-black text-[#004047] mb-2">{s.v}</div>
              <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Teachers Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-[#2ecc71] font-bold">Our Team</span>
          <h2 className="text-4xl font-bold text-[#004047] mt-2">Meet Our Teachers</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {['Vijay', 'Nazim', 'Sadik'].map((name, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-64 h-64 rounded-xl overflow-hidden border-8 border-[#f4fafa] transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                <img src={`https://i.pravatar.cc/300?img=${i + 10}`} alt={name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#004047]">{name}</h3>
              <div className="flex gap-4 mt-4">
                <Facebook className="text-[#004047] hover:text-[#2ecc71] cursor-pointer" size={20} />
                <Instagram className="text-[#004047] hover:text-[#2ecc71] cursor-pointer" size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials Slider */}
      <section className="py-20 px-6 bg-[#f4fafa]">
        <div className="max-w-7xl mx-auto flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-[#004047]">What Our Clients Say</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71] hover:text-white transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-[#2ecc71] text-white hover:bg-[#27ae60] shadow-md"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {reviews.map((review, i) => (
            <div key={i} className="min-w-[350px] bg-white p-10 rounded-2xl shadow-sm border border-slate-100 snap-start transition-all hover:shadow-lg">
              <div className="flex text-orange-400 mb-4">
                {[...Array(review.stars)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <h4 className="font-bold text-[#004047] text-xl mb-4">{review.title}</h4>
              <p className="text-slate-500 leading-relaxed italic mb-6">"{review.text}"</p>
              <div className="font-bold text-[#004047]">{review.name}</div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default About;



