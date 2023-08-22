import React from 'react'
import "../../assets/css/hero.css"

import Search from '../../components/search/Search';

import LiveChat from "../../assets/images/live Chat.svg"

function Hero() {
    return (
        <>
            <section id='hero'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h1>Read the most interesting articles</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                                <Search />

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img src={LiveChat} alt="Live Chat" width={"100%"} />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero