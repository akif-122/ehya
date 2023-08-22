import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'

import "../../assets/css/blog.css"



import blogImg1 from "../../assets/images/card1.jpg"
import blogImg2 from "../../assets/images/card2.png"
import blogImg3 from "../../assets/images/card3.jpg"
import blogImg4 from "../../assets/images/card4.png"

import user1 from "../../assets/images/profile1.png"
import user2 from "../../assets/images/profile2.png"
import user3 from "../../assets/images/profile3.png"
import user4 from "../../assets/images/profile4.png"

import BlogCard from '../../components/blogCard/BlogCard'

function Blog() {

    const blogData = [
        {
            cardImg: blogImg1,
            heading: "Future of Work",
            text: "Majority of peole will work in jobs that don’t exist today.",
            userImg: user1,
            username: "Johanna Murray",
            verfied: "Verified writer",
            date: "02 May"
        },
        {
            cardImg: blogImg2,
            heading: "Why Use External It Support",
            text: "Thanks to never-ending piles of data & the amount of insight.",
            userImg: user2,
            username: "Eugene Rodriquez",
            verfied: "Verified writer",
            date: "02 May"
        },
        {
            cardImg: blogImg3,
            heading: "Future of Learning",
            text: "A constant ability to learn will be on the most crucial skills.",
            userImg: user3,
            username: "Helen Hughes",
            verfied: "Verified writer",
            date: "02 May"
        },
        {
            cardImg: blogImg4,
            heading: "Help Finding Information Online",
            text: "Majority of peole will work in jobs that don’t exist today.",
            userImg: user4,
            username: "Bobby Stevens",
            verfied: "Verified writer",
            date: "02 May"
        },
        {
            cardImg: blogImg2,
            heading: "Why Use External It Support",
            text: "Thanks to never-ending piles of data & the amount of insight.",
            userImg: user2,
            username: "Eugene Rodriquez",
            verfied: "Verified writer",
            date: "02 May"
        },
        {
            cardImg: blogImg3,
            heading: "Future of Learning",
            text: "A constant ability to learn will be on the most crucial skills.",
            userImg: user3,
            username: "Helen Hughes",
            verfied: "Verified writer",
            date: "02 May"
        },
        {
            cardImg: blogImg4,
            heading: "Help Finding Information Online",
            text: "Majority of peole will work in jobs that don’t exist today.",
            userImg: user4,
            username: "Bobby Stevens",
            verfied: "Verified writer",
            date: "02 May"
        },
        {
            cardImg: blogImg1,
            heading: "Future of Work",
            text: "Majority of peole will work in jobs that don’t exist today.",
            userImg: user1,
            username: "Johanna Murray",
            verfied: "Verified writer",
            date: "02 May"
        },
        {
            cardImg: blogImg2,
            heading: "Why Use External It Support",
            text: "Thanks to never-ending piles of data & the amount of insight.",
            userImg: user2,
            username: "Eugene Rodriquez",
            verfied: "Verified writer",
            date: "02 May"
        }
    ]


    return (
        <>
            <section id='blog-section'>
                <div className="container">
                    <div className="row">
                        {
                            blogData.map((data, k) => {
                                return (
                                    <div className="col-lg-4 col-md-6 my-4" key={k}>
                                        <BlogCard cardData={data} />
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className='blog-btn'>
                        <button>More articles <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Blog