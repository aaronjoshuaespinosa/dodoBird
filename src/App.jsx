import Nav from "./components/Nav"
import Hero from "./views/Hero"
import History from "./views/History"
import Random from "./views/Random"
import Roadmap from "./views/Roadmap"
import Tokenomics from "./views/Tokenomics"
import Fossil from "./views/Fossil"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="fixed w-full z-50">
        <Nav />
      </div>
      <div className="font-flamenco overflow-x-hidden">
        <Hero />
        <History />
        <Random />
        <Tokenomics />
        <Roadmap />
        <Fossil />
        <Footer />
      </div>
    </>
  )
}

export default App
