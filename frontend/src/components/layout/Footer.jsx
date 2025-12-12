import { Link } from 'react-router-dom';
import AnimatedLogo from '../animations/AnimatedLogo';
import { contactInfo, clients } from '../../data/mock';
import { Twitter, Linkedin, Dribbble, Github, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    twitter: Twitter,
    linkedin: Linkedin,
    dribbble: Dribbble,
    github: Github
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <AnimatedLogo />
            <p className="footer-tagline">
              Crafting digital experiences that feel like the future.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-title">Navigation</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Contact</h3>
              <ul className="footer-contact">
                <li>
                  <Mail size={16} />
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </li>
                <li>
                  <Phone size={16} />
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>{contactInfo.address}</span>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Clients</h3>
              <ul>
                {clients.slice(0, 5).map((client, index) => (
                  <li key={index}>{client}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} tækni. All rights reserved.
          </p>

          <div className="footer-social">
            {Object.entries(contactInfo.social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;