export default function Programs() {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[420px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588072432836-e10032774350')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-teal-900/60"></div>

        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Our Programs
          </h1>
          <p className="text-lg opacity-90">
            These lessons, classes and ensembles can be tailored to students of
            all ages and skill levels, from beginners to advanced.
          </p>
        </div>
      </section>

      {/* ================= PROGRAM CARDS ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* GCSE */}
          <div className="bg-white shadow-sm hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                GCSE
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our GCSE classes focus on building strong foundations, ensuring
                students are ready to achieve top grades in their exams.
              </p>
              <button className="text-green-600 text-sm font-medium">
                More info
              </button>
            </div>
          </div>

          {/* A-Level */}
          <div className="bg-white shadow-sm hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                A-Level
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Focused guidance in key subjects to help students build solid
                knowledge and prepare confidently for exams and university entry.
              </p>
              <button className="text-green-600 text-sm font-medium">
                More info
              </button>
            </div>
          </div>

          {/* 11 Plus */}
          <div className="bg-white shadow-sm hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1584697964403-0a1b6e7e3e8b"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                11 Plus
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Preparation courses equip students with essential skills and
                strategies needed to excel in entrance exams.
              </p>
              <button className="text-green-600 text-sm font-medium">
                More info
              </button>
            </div>
          </div>

          {/* Secondary */}
          <div className="bg-white shadow-sm hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Secondary
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Supporting Years 7–9 with English, Maths and Science to build
                strong academic foundations.
              </p>
              <button className="text-green-600 text-sm font-medium">
                More info
              </button>
            </div>
          </div>

          {/* Computer Science */}
          <div className="bg-white shadow-sm hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Computer Science
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore programming and discover the endless possibilities of
                technology with our engaging courses.
              </p>
              <button className="text-green-600 text-sm font-medium">
                More info
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-white border-t border-b">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-semibold text-teal-800">6</h2>
            <p className="text-gray-500 text-sm mt-2">Professional Teachers</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-teal-800">20+</h2>
            <p className="text-gray-500 text-sm mt-2">Learning Groups</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-teal-800">999+</h2>
            <p className="text-gray-500 text-sm mt-2">Happy Students (10 years)</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-teal-800">5</h2>
            <p className="text-gray-500 text-sm mt-2">Special Classes</p>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <p className="text-green-600 text-sm mb-2">Testimonials</p>
          <h2 className="text-3xl font-semibold text-gray-800">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-sm">
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-600 text-sm mb-4">
              Seriously amazing! Education provides a comprehensive and flexible
              learning environment.
            </p>
            <p className="text-sm font-medium">Lauren N.</p>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-600 text-sm mb-4">
              Professional tutors and structured lessons. My child improved
              significantly.
            </p>
            <p className="text-sm font-medium">Samantha P.</p>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-600 text-sm mb-4">
              Highly recommended tuition centre with supportive staff and great
              results.
            </p>
            <p className="text-sm font-medium">Jane W.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
