import React from 'react';
import Image from 'next/image';
import Logo from "../../../../assets/images/Landing page/Blue Icon_png.png";
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="logo">
            <Image src={Logo} width={100} height={100} alt="Company Logo" />
          </div>
          <p>Some text about the company</p>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
            <Link href="/about">
                About
              </Link>
            </li>
            <li>
            <Link href="/services">
                Services
              </Link>
            </li>
            <li>
            <Link href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Subscribe to our Newsletter</h3>
          <div className="subscription">
            <input type="email" placeholder="Enter your email" size={70}/>
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <a href="#" className="social-icon">Facebook</a>
        <a href="#" className="social-icon">Twitter</a>
        <a href="#" className="social-icon">Instagram</a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: white;
          color: black;
          padding: 40px 0;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .footer-column {
            margin-left: 50px;
          flex: 1 0 300px;
          margin-bottom: 20px;
        }

        .logo img {
          height: 40px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        a {
          color: black;
          text-decoration: none;
          font-weight:bold;
          font-size: 20px
        }

        .subscription input {
          padding: 10px;
          margin-bottom: 10px;
        }

        .subscription button {
          background-color: royalblue;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }

        .footer-social {
          text-align: center;
          margin-top: 20px;
        }

        .social-icon {
          margin: 0 10px;
          color: #fff;
          text-decoration: none;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
