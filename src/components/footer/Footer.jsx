import React from 'react'
import "../../assets/css/footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'

import logoLight from "../../assets/images/Logo light.svg"
import FooterLink from '../footerLink/FooterLink'

function Footer() {

    const productLink = {
        heading: "Product",
        links: [
            {
                text: "Landingpage",
                url: "#"
            },
            {
                text: "Features",
                url: "#"
            },
            {
                text: "Documentation",
                url: "#"
            },
            {
                text: "Referral Program",
                url: "#"
            },
            {
                text: "Pricing",
                url: "#"
            }
        ]
    };

    const servicesLink= {
        heading: "Services",
        links: [
            {
                text: "Documentation",
                url: "#"
            },
            {
                text: "Design",
                url: "#"
            },
            {
                text: "Themes",
                url: "#"
            },
            {
                text: "Illustrations",
                url: "#"
            },
            {
                text: "UI Kit",
                url: "#"
            }
        ]
    };

    const companyLinks= {
        heading: "Company",
        links: [
            {
                text: "About",
                url: "#"
            },
            {
                text: "Terms",
                url: "#"
            },
            {
                text: "Privacy Policy",
                url: "#"
            },
            {
                text: "Careers",
                url: "#"
            }
        ]
    };

    const moreLinks= {
        heading: "More",
        links: [
            {
                text: "Documentation",
                url: "#"
            },
            {
                text: "License",
                url: "#"
            },
            {
                text: "Changelog",
                url: "#"
            }
        ]
    };
    
    return (
        <>
            <footer id='footer'>
                <div className="container">
                    <div className='row'>

                        <div className='col-lg col-md-4 my-4 col-6 col-sm-8 col-12 '>
                            <div className='ft-content' >
                                <img className='f-logo' src={logoLight} alt="logo" />
                                <p>Build a modern and creative website with moonfo</p>
                                <ul className='d-flex align-items-center'>
                                    <li><a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg col-md-4 my-4 col-6 col-sm-6'>
                            <FooterLink ftLink={productLink} />
                        </div>

                        <div className='col-lg col-md-4 my-4 col-6 col-sm-6'>
                            <FooterLink ftLink={servicesLink} />
                        </div>

                        <div className='col-lg col-md-4 my-4 col-6 col-sm-6'>
                            <FooterLink ftLink={companyLinks} />
                        </div>

                        <div className='col-lg col-md-4 my-4 col-6 col-sm-6'>
                            <FooterLink ftLink={moreLinks} />
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer