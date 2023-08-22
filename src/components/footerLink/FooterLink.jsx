import React from 'react'
import "../../assets/css/footerLinks.css"

function FooterLink({ ftLink }) {

    return (
        <>
            <div className='ft-links'>
                <h5>{ftLink.heading}</h5>

                <ul>
                    {
                        ftLink.links.map((link, i) => (
                            <li key={i}><a href={link.url}>{link.text}</a></li>
                        ))
                    }

                </ul>

            </div>
        </>
    )
}

export default FooterLink