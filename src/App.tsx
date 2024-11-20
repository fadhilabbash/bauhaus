import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchProperty from "./components/SearchProperty";
import HeroWrapper from "./components/HeroWrapper";
import Footer from "./components/Footer";
import HelpPartner from "./components/HelpPartner";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import DiscoverChances from "./components/DiscoverChances";

function App() {
  return (
    <>
    

      <HeroWrapper>
        <Navbar />
        <Hero />
      </HeroWrapper>
      <SearchProperty />
      <DiscoverChances/>
      <WhyUs/>
      <Services/>
      <HelpPartner/>
    
      <Footer/>
    </>
  );
}

export default App;
