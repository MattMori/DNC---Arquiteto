import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import { useContext} from 'react';

//Context
import { AppContext } from '../contexts/AppContext';


function Contact() {

    const appContext = useContext(AppContext);

  return (
    <>
      <Banner title={appContext.languages[appContext.language].menu.contact} image='contact.jpg' />
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;