import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsSection from "../components/JobsSection";
import ViewAllJobs from "../components/ViewAllJobs";
import { Footer } from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsSection isHome={true} />
      <ViewAllJobs />
      <Footer />
    </>
  );
};

export default HomePage;
