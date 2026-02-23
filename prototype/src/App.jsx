import { Navbar, Footer, ScrollToTop } from "./components/index"
import { Home, About, ClassesPage, Programs, BookNow } from "./pages/index"
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Main content goes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </>
  )
}

export default App
