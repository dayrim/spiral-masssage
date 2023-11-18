import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import './styles.scss'; // Assuming you have a SASS file for styles
import SvgLogo from "./logo";

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
                <p>- MASSAGES -</p>
              </div>
            </div>
          </Link>
        </div>
        <ul className="navigation">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const HeroImage = ({ title }: { title: string }) => (
  <div className={"heroImage"}>
    <h1>{title}</h1>
  </div>
);

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <HeroImage title="Welcome to Spiral Sanctuary" />

    </>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
