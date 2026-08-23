import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Doctors from './components/Doctors'
import TreatmentProcess from './components/TreatmentProcess'
import BeforeAfter from './components/BeforeAfter'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import AppointmentCTA from './components/AppointmentCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-porcelain">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctors />
        <TreatmentProcess />
        <BeforeAfter />
        <Stats />
        <Testimonials />
        <AppointmentCTA />
      </main>
      <Footer />
    </div>
  )
}
