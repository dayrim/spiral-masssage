import * as React from "react"
import { type HeadFC, type PageProps, graphql } from "gatsby"
import './styles.scss'; // Assuming you have a SASS file for styles
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./Footer";
import MassageCard from "./MassageCard";
import Navbar from "./Navbar";



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
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
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


      </ParallaxProvider>
      <Footer />
    </>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
