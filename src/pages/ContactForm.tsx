import React, { useState } from 'react';
import axios from 'axios';

interface FormState {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}
interface AlertMessage {
    type: 'success' | 'error';
    message: string;
}
const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [alertMessage, setAlertMessage] = useState<AlertMessage | null>(null);

    const validateForm = (): boolean => {
        let isValid = true;
        let errors: FormErrors = {};

        if (!formState.name) {
            isValid = false;
            errors.name = 'Name is required.';
        }

        if (!formState.email) {
            isValid = false;
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            isValid = false;
            errors.email = 'Email is invalid.';
        }

        if (!formState.message) {
            isValid = false;
            errors.message = 'Message is required.';
        }

        setErrors(errors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
        if (alertMessage) setAlertMessage(null);

    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('https://mailerlite.connection-tribe.net/send-email', formState);
                setAlertMessage({ type: 'success', message: 'Message sent successfully!' });
                setFormState({ name: '', email: '', message: '' });
            } catch (error: any) {
                setAlertMessage({ type: 'error', message: 'Failed to send email. Please try again.' });

            }
        }
    };

    return (
        <div className="contact-form">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={formState.name}
                    onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
                <input
                    type="email"
                    name="email"
                    placeholder="Enter a valid email address"
                    value={formState.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={formState.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && <p>{errors.message}</p>}
                <button type="submit">Submit</button>
            </form>
            {alertMessage && (
                <p className={alertMessage.type === 'success' ? 'alert-success' : 'alert-error'}>
                    {alertMessage.message}
                </p>
            )}
        </div>
    );
};

export default ContactForm;
