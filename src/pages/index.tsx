import * as React from "react"
import { Link, type HeadFC, type PageProps, graphql } from "gatsby"
import './styles.scss'; // Assuming you have a SASS file for styles
import SvgLogo from "./logo";
import { useEffect } from "react";
import { Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { getImage } from "gatsby-plugin-image";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactForm from "./ContactForm";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* You would replace the text below with your logo component or image */}
          <Link to="/">
            <div className="logo-container">
              <SvgLogo />

              <div className="logo-text">
                <h1>SPIRAL SANCTUARY</h1>
                <p>MASSAGES</p>
              </div>
            </div>
          </Link>
        </div>
        <ul className="navigation">
          <li><Link to="/massages">Massages</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const HeroImage = ({ title }: { title: string }) => {
  useEffect(() => {
    const handleScroll = () => {
      const heroImage = document.querySelector('.heroImage') as any;
      const scrollPosition = window.pageYOffset;
      heroImage.style.backgroundPosition = `10% ${50 - scrollPosition * 0.1}%`; // Adjust the speed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="heroImage">
      <h1>{title}</h1>
    </div>
  );
};
type MassageCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};
const massages = [
  {
    title: "Deep Tissue Massage",
    description: "Deep Tissue Massage  is a slow, meditative but deep and powerful bodywork that releases trapped tensions. It's a combination of deep muscle and connective tissue massage, releasing joint tension and balancing energy.",
    imageUrl: "/images/mer.jpeg" // Replace with your actual image path
  },
  {
    title: "Lomi Lomi Nui Massage",
    description: "Lomi lomi nui - the flow of love from the hands - is a traditional Hawaiian massage performed with plenty of oil. The hands, elbows and forearms are used for dynamic, deep, long movements.",
    imageUrl: "/images/lomi.png" // Replace with your actual image path
  },
  {
    title: "Intuitive Massage",
    description: "Intuitive Massage combines the focused depth of Deep Tissue Massage with the rhythmic fluidity of Lomi Lomi Nui. It's a responsive, adaptive treatment, promoting holistic balance and deep relaxation. Each session is a personalized healing experience, attuned to the individual's physical and energetic needs.",
    imageUrl: "/images/intuitive.png" // Replace with your actual image path
  }
];
const MassageCard: React.FC<MassageCardProps & { index: number }> = ({
  title,
  description,
  imageUrl,
  index
}) => {
  const isOdd = index % 2 !== 0;
  console.log(isOdd, 'isOdd')
  return (
    <div className={`massage-card ${isOdd ? 'odd' : 'even'}`}>
      {isOdd && <img src={imageUrl} alt={title} className="massage-image" />}
      <div className="massage-text">
        <h2 className="massage-title">{title}</h2>
        <p className="massage-description">{description}</p>
      </div>
      {!isOdd && <img src={imageUrl} alt={title} className="massage-image" />}
    </div>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        {/* <Parallax speed={-10} translateY={[0, 0]}>
          <HeroImage title="Welcome to Spiral Sanctuary" />
        </Parallax> */}
        <ParallaxBanner className={"heroImage"}>
          <ParallaxBannerLayer image="/images/hero-4.png" speed={-40} />

          <ParallaxBannerLayer>
            {/* This layer will serve as a gradient overlay */}
            <div className="gradient-overlay"></div>
          </ParallaxBannerLayer>
          <ParallaxBannerLayer>
            <div className={"heroImageContent"}>
              <h1>Welcome to Spiral Sanctuary</h1>

              <h1>Massages</h1>


            </div>

          </ParallaxBannerLayer>
        </ParallaxBanner>
        <div className="secion-1">
          <div className="content">
            <div className="masages">
              {/* Inside IndexPage component */}
              {massages.map((massage, index) => (
                <MassageCard
                  key={index}
                  index={index}
                  title={massage.title}
                  description={massage.description}
                  imageUrl={massage.imageUrl}
                />
              ))}
            </div>
          </div>

        </div>

        <div className="secion-2">

          <div className="content">
            <h1 className="about-me-title">About me</h1>
            <div className="images-layout">
              <div className="large-image">
                <img src={"/images/about-me-1.png"} alt={"about-me"} className="about-image" />
              </div>
              <div className="small-images">
                <img src={"/images/about-me-3.jpg"} alt={"about-me"} className="aboaboutut-image small" />
                <img src={"/images/about-me-6.jpg"} alt={"about-me"} className="about-image small" />
              </div>
            </div>

            <p className='about-me-text'>My name is Dmitrijs Pavlovs, a body practitioner and massage therapist. My path to massage therapy started with exploring myself through tantric practices, dancing, and yoga. Dancing has been a gateway for me to explore the profound connection between body, soul, and essence. This connection I seek to share with you through touch.
            </p>
            <p className='about-me-text'>
              I approach each session with care and gentleness, recognizing that your body is a sacred space deserving of respect and attentive touch. My goal is to create a safe and nurturing environment where you can fully relax, release tension, and reconnect with your inner self.
            </p>
            <p className='about-me-text'>My practice is enriched by techniques learned in Lomi Lomi Nui, Myofascial Energetic Release (MER), Tantric Energetic Massage, and Reiki. These modalities are not just massage techniques to me; they are pathways to healing, balance, and rejuvenation,
              I invite you to embark on a journey of relaxation, healing, and reconnection with the essence of who you are.</p>
          </div>

        </div>
        <footer>

          <div className="left-column">
            <div className="contact-info">
              <h2>Location</h2>
              <p>Tallinn, Estonia</p>
              <h2>Contacts</h2>
              <div className="contact-grid">
                <div><strong>Email:</strong> <a href="mailto:dmitrijs.pavlovs123@gmail.com">dmitrijs.pavlovs123@gmail.com</a></div>
                <div><strong>Phone:</strong> <a href="tel:+37258003919">+372 58003919</a></div>
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

      </ParallaxProvider>
    </>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
