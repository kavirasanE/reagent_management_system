import About from "./components/Aboutus";
import Designs from "./components/Designs";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
    <Navbar/>
    <main className=" bg-black text-white">
      <div >
      <Hero/>
      </div>
        <div >
        <FeatureCard/>
        </div>
        <div>
          <Designs/>
        </div>
        <div id="about">
          <About/>
        </div>
        <Footer/>
    </main>
  </>
  )
}