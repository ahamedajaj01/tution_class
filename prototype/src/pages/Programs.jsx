export default function Programs() {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[420px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400')",
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
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600"
              alt="GCSE study"
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
              alt="A level students studying"
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
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
              alt="primary students learning"
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
              src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?w=600"
              alt="secondary school students"
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
              src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="computer programming"
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

    </div>
  );
}