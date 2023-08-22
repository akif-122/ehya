import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "../../assets/css/header.css"

import logo from "../../assets/images/logo.svg";
const Header = () => {

    const navLink = [
        {
            text: "Home",
            url: "#",
            class: "nav-link"

        },

        {
            text: "Artical",
            url: "#",
            class: "nav-link"

        },

        {
            text: "Pages",
            url: "#",
            class: "nav-link",
            pages: [
                {
                    text: "Page 1",
                    url: "#"
                },
                {
                    text: "Page 2",
                    url: "#"
                }
            ]

        },

        {
            text: "Pricing",
            url: "#",
            class: "nav-link"

        },
        {
            text: "Faq",
            url: "#",
            class: "nav-link"

        },
        {
            text: "Sign In",
            url: "#",
            class: "nav-link h-btn"

        },

    ]

    return (
        <>
            <header id='header'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a href='#' className='navbar-brand'>
                            <img src={logo} alt="logo" width={"100"} />
                        </a>

                        <button className='navbar-toggler' data-bs-target="#myNav" data-bs-toggle="collapse">
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className="collapse navbar-collapse" id='myNav'>
                            <ul className='nav navbar-nav ms-auto'>
                                {
                                    navLink.map((link, i) => {
                                        return(
                                        
                                         link.pages ? <li className='dropdown'><a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href={link.url}> Pages
                                            <div className='dropdown-menu'>
                                                {
                                                    link.pages.map((link, i)=>(
                                                        <a key={i} className='dropdown-item' href={link.url}>{link.text}</a>
                                                    ))
                                                }
                                            </div>
                                            </a></li> 
                                        : 
                                        <li><a className={link.class} href={link.url}>{link.text}</a></li> 
                                        )

                                    })
                                }
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header