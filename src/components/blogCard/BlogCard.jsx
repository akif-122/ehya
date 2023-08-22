import React from 'react'

import "../../assets/css/blogCard.css"

import Card1 from "../../assets/images/card1.jpg"
import Profile1 from "../../assets/images/Profile1.png"
import icon from "../../assets/images/icon.svg"

function BlogCard({cardData}) {
    const {cardImg, heading, text, userImg, username, verfied, date} = cardData;
    return (
        <>
            <div className="card blog-card">
                <img src={cardImg} alt="card img" width={"100%"} />
                <div className="card-body">
                    <h3>{heading}</h3>
                    <p>{text}</p>

                    <div className='user-info d-flex'>
                        <img src={userImg} width={30} alt="User image" />
                        <div className='user-detail d-flex align-items-center justify-content-between'>
                            <div>
                                <h6>{username}</h6>
                                <span><img src={icon} alt="Verfied icon" /> {verfied}</span>
                            </div>
                            <strong>{date}</strong>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlogCard