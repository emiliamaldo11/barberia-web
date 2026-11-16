import { BookingProvider } from './context/BookingContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import Location from './components/Location'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  return (
    <BookingProvider>
      <div id="top">
        <Header />
        <main>
          <Hero />
          <Services />
          <Booking />
          <Location />
          <Gallery />
          <Team />
          <Reviews />
          <Faq />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </BookingProvider>
  )
}
