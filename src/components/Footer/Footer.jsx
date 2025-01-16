import { Link } from "react-router-dom";

//Assets
import './Footer.css';
import logo from '../../assets/dnc-logo.svg';
import BrasilIcon from '../../assets/brazil-icon.svg';
import EuaIcon from '../../assets/usa-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import LinkedinIcon from '../../assets/linkedin-icon.svg';

// Context
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext"


function Footer() {

    const appContext = useContext(AppContext);
    const changeLanguage = (country) => {
        appContext.setLanguage(country);
    }


    return (
        <footer className='container'>
            <div className="d-flex jc-space-between mobile-fd-column">
                <div className="Footer-logo-col">
                    <img src={logo} className="footer-logo" />
                    <p className="grey-color">
                    {appContext.languages[appContext.language].general.footerLogoText} 
                    </p>

                    <div className="d-flex social-links">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <img src={InstagramIcon} alt='Instagram' />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <img src={FacebookIcon} alt='Facebook' />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <img src={TwitterIcon} alt='Twitter' />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                            <img src={LinkedinIcon} alt='Linkedin' />
                        </a>
                    </div>
                </div>
                <div className="d-flex mobile-fd-column" >
                    <div className="footer-col">
                        <h3> {appContext.languages[appContext.language].general.pages} </h3>
                        <ul>
                            <li><Link to="/"> {appContext.languages[appContext.language].menu.home} </Link></li>
                            <li><Link to="/about"> {appContext.languages[appContext.language].menu.about} </Link></li>
                            <li><Link to="/projects"> {appContext.languages[appContext.language].menu.projects} </Link></li>
                            <li><Link to="/contact"> {appContext.languages[appContext.language].menu.contact} </Link></li>
                        </ul>
                    </div>
                    <div className="footer-col ">
                        <h3> {appContext.languages[appContext.language].general.contact} </h3>
                        <p className="grey-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                        <p className="grey-color">suporte@escoladnc.com.br</p>
                        <p className="grey-color">(19) 99187-4342</p>

                    </div>
                </div>
            </div>
            <div className="d-flex jc-space-between footer-copy">

                <p className="grey-color">© 2024 Mori. All rights reserved.</p>
                <div className="langs-area d-flex">
                    <img src={BrasilIcon} alt='Brazil' height="29px" onClick={() => changeLanguage('br')}/>
                    <img src={EuaIcon} alt='USA' height="29px" onClick={() => changeLanguage('en')} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;