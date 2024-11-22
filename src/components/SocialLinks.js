import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    { id: "facebook", url: "https://www.facebook.com/", icon: <FaFacebook /> },
    { id: "twitter", url: "https://twitter.com/", icon: <FaTwitter /> },
    { id: "instagram", url: "https://www.instagram.com/", icon: <FaInstagram /> },
    { id: "linkedin", url: "https://www.linkedin.com/", icon: <FaLinkedin /> },
];

export default function SocialLinks() {
    return (
        <section
            className="d-flex align-items-center"
            id="intro"
        >
            <div className="intro_text">
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="hero-content-box">
                            <div className="button-box d-flex flex-wrap align-items-center">
                                <a
                                    href="#"
                                    className="btn tj-btn-secondary wow fadeInLeft"
                                    data-wow-delay="1.5s"
                                >
                                    Download CV
                                </a>
                                <ul
                                    className="ul-reset social-icons wow fadeInLeft"
                                    data-wow-delay="1.6s"
                                >
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-light fa-basketball"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-github"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
