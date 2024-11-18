import About from "./components/About"
import Footer from "./components/Footer"
import FooterMobile from "./components/FooterMobile"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="bg-bgColor">
      <Header />
      <About />
      <Footer />
      <FooterMobile />
    </div>
  )
}

export default App