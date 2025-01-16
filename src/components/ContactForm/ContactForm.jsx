import { useContext, useState, useEffect } from 'react';
import './ContactForm.css';

//components
import Button from '../Button/Button';

//Context
import { AppContext } from '../../contexts/AppContext';

function ContactForm() {
    const appContext = useContext(AppContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isformValid, setIsFormValid] = useState(false);
    const [formSubmitLoading, setFormSubmitLoading] = useState(false);
    const [formSubitted, setFormSubmitted] = useState(false);

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (isformValid) {
            setFormSubmitLoading(true);
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({ ...formData, access_key: "0038b04e-ad9e-4bd7-bc85-b1a97551a235" }),
                });
                if (response.ok) {
                    setFormSubmitted(true);

                } else {
                    console.log('Failed to submit');
                }
            }
            catch (e) {
                alert('error:', e.message);
            } finally {
                setFormSubmitLoading(false);

            }
        }
    };

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return emailRegex.test(email);
        }

        const isvalid = formData.name.trim() !== '' &&
            isValidEmail(formData.email) &&
            formData.message.trim() !== '';

        setIsFormValid(isvalid);
    }, [formData]);

    const handleChange = (e) => {
        const [name, value] = [e.target.name, e.target.value];
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <div className='contact-form d-flex fd-column ai-center'>
            <h2>{appContext.languages[appContext.language].contact.title}</h2>
            <form onSubmit={handlesubmit}>
                <div className='d-flex form-group'>
                    <input
                        className='form-input'
                        type='text'
                        id='name'
                        name='name'
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        onChange={handleChange} />
                    <input
                        className='form-input'
                        type='email'
                        id='email'
                        name='email'
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        onChange={handleChange} />
                </div>
                <div className='d-flex form-group'>
                    <textarea
                        className='form-input'
                        id='message'
                        name='message'
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        rows="4"
                        onChange={handleChange} ></textarea>
                </div>
                <div className=' al al-center d-flex jc-end form-group '>
                    {formSubitted && <p className='text-primary'>
                    {appContext.languages[appContext.language].contact.sucessMsg}</p>}
                    <Button
                        type="submit"
                        buttonStyle="secondary"
                        disabled={!isformValid || formSubmitLoading}>
                        {appContext.languages[appContext.language].general.send}
                    </Button>
                </div>
            </form>
        </div>
    )

}


export default ContactForm;