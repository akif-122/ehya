import React from 'react'

import "../../assets/css/artical.css"

import articalImg from "../../assets/images/artical.png"
import wave from "../../assets/images/Wave.svg"
function Artical() {
    return (
        <>
            <section id='artical'>
                <img src={wave} alt="wave image" class='waveImg' />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="artical-content">
                                <h4>Get our stories delivered From us to your inbox weekly.</h4>
                                <form>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className='form-group'>
                                                <input type="text" className='form-control' placeholder='Your Email' />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <button className='btn btn-primary'>Get Started</button>
                                        </div>
                                    </div>
                                    <p>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>

                                </form>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <img src={articalImg} alt="Artical Img" width={"100%"} />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Artical