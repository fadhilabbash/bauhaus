import DiscoverChances from "../components/DiscoverChances";
import HelpPartner from "../components/HelpPartner";
import Hero from "../components/Hero";
import SearchProperty from "../components/SearchProperty";
import Services from "../components/Services/Services";
import WhyUs from "../components/WhyUs";

const Home = () => {
    return (
      <>
      <Hero/>
      <SearchProperty/>
      <DiscoverChances/>
      <WhyUs/>
      <Services/>
      <HelpPartner/>
      </>
    );
  };
  
  export default Home;