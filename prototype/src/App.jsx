import { useState } from 'react'
import {Navbar, Footer} from "./components/index"
import {Home, About, ClassesPage, Programs} from "./pages/index"
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />

      {/* Main content goes here */}
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/programs" element={<Programs />} />
    </Routes>
    
          {/* Footer */}
      <Footer />
  
    </>
  )
}

export default App
