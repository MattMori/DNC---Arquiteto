import Footer from "../components/Footer/Footer";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import Hero from "../components/Hero/Hero";


function Home() {
  return (
    <>
      <div className="container">
      <Hero/>
      <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Home;