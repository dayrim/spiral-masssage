import * as React from "react";
import ContactForm from "./ContactForm"; // Adjust the import path as needed

const Footer: React.FC = () => (
    <footer>
        <div className="left-column">
            <div className="contact-info">
                <h2>Location</h2>
                <p>Tallinn, Estonia</p>
                <h2>Contacts</h2>
                <div className="contact-grid">
                    <div><strong>Email:</strong> <a href="mailto:dmitrijs.pavlovs123@gmail.com">dmitrijs.pavlovs123@gmail.com</a></div>
                    <div><strong>Phone:</strong> <a href="tel:+3725803919">+372 58003919</a></div>
                </div>
                <div className="social-icons">
                    <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
                <p>&copy;2023 Privacy policy</p>
            </div>
        </div>
        <div className="right-column">
            <ContactForm />
        </div>
    </footer>
);

export default Footer;
