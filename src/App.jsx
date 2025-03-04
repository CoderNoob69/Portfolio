import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
<Router>
    <div>
        <Navbar />
<Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
</Router>
  )
}

export default App
