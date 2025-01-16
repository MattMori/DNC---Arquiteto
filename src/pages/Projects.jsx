import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import { useContext} from 'react';

//Context
import { AppContext } from '../contexts/AppContext';


function Projects() {
      const appContext = useContext(AppContext);
  
  return (
    <>
    <Banner title={appContext.languages[appContext.language].menu.projects} image='projects.jpg'/>
    <div className="container">
    <ProjectsList />
    </div>
    <Footer />
  </>
);
}

export default Projects;