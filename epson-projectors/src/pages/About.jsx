import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import Statistics from "../components/about/Statistics";
import Industries from "../components/about/Industries";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const About = () => {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Statistics />
      <Industries />
      
      
    </main>
  );
};

export default About;