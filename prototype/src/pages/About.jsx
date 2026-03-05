import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Facebook, Instagram, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 374;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const teachers = [
    {
      name: "Vijay",
      role: "Maths Lead",
      img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400"
    },
    {
      name: "Nazim",
      role: "Science Specialist",
      img: "https://images.unsplash.com/photo-1608391957733-08caeb461b57?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Sadik",
      role: "English Expert",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
    }
  ];

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

      {/* Hero Section */}
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
          <h1 className="text-5xl md:text-6xl font-black text-[#004047] mb-6">
            About Leafclutch Technologies
          </h1>

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

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="bg-[#eefdf3] text-[#2ecc71] px-4 py-1 rounded text-sm font-bold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-[#004047] mt-4">
            Learning without borders
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="border-4 border-[#004047] p-12 text-center rounded-sm hover:bg-[#f4fafa]">
            <h3 className="text-3xl font-bold text-[#004047] mb-6">Vision</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              We envision a future where every student receives personalized,
              high-quality education that empowers them to excel and realise their potential.
            </p>
          </div>

          <div className="border-4 border-[#004047] p-12 text-center rounded-sm hover:bg-[#f4fafa]">
            <h3 className="text-3xl font-bold text-[#004047] mb-6">Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our mission is to make Dartford a hub of academic excellence,
              nurturing students throughout England to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-[#2ecc71] font-bold">Our Team</span>
          <h2 className="text-4xl font-bold text-[#004047] mt-2">
            Meet Our Teachers
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {teachers.map((teacher, i) => (
            <div key={i} className="flex flex-col items-center group">

              <div className="w-64 h-64 rounded-xl overflow-hidden border-8 border-[#f4fafa] transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#004047]">
                {teacher.name}
              </h3>

              <p className="text-slate-500 text-sm">
                {teacher.role}
              </p>

              <div className="flex gap-4 mt-4">
                <Facebook className="text-[#004047] hover:text-[#2ecc71] cursor-pointer" size={20} />
                <Instagram className="text-[#004047] hover:text-[#2ecc71] cursor-pointer" size={20} />
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#f4fafa]">
        <div className="max-w-7xl mx-auto flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-[#004047]">
            What Our Clients Say
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-[#2ecc71] text-[#2ecc71]"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-[#2ecc71] text-white"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review, i) => (
            <div key={i} className="min-w-[350px] bg-white p-10 rounded-2xl shadow-sm">

              <div className="flex text-orange-400 mb-4">
                {[...Array(review.stars)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <h4 className="font-bold text-[#004047] text-xl mb-4">
                {review.title}
              </h4>

              <p className="text-slate-500 leading-relaxed italic mb-6">
                "{review.text}"
              </p>

              <div className="font-bold text-[#004047]">
                {review.name}
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;