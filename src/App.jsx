import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsSection from "./components/JobsSection";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="The Best Solution For Your Learning Experince"
        subtitle="Find and create Road maps for your way to becoming the best Developer,
          DevOps, software engeneer... and many more"
      />
      <HomeCards />
      <JobsSection />
    </>
  );
};

export default App;
