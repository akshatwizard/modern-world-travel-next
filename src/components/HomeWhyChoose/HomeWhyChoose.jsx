import React from 'react'
import { Heading } from '../Heading/Heading';
import Link from 'next/link';
export const HomeWhyChoose = () => {
    return (
        <section className="chooseus-section pt_100 pb_100">
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="content_block_one">
                            <div className="content-box mr_30">
                                <div className="sec-title mb-3">
                                    <h2></h2>
                                    <Heading
                                        level={2}
                                        text="Why Choose the Best Travel Agency in Varanasi ?"
                                        className="text-30 md:text-24 mb-1"
                                    /> 
                                    <p>
                                       The focus is simple: helping you find the right travel experience at the best value. You get access to a wide range of customized tour packages and well-planned itineraries for family trips, group tours, and corporate travel. With strong attention to reliability, comfort, and smooth execution, your journey stays stress-free, organized, and truly memorable.
                                    </p>
                                    
                                </div>
                                <ul className="list-style-one clearfix pb-5">
                                    <li>
                                        <a className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" /> Professional Tour Guides
                                        </a>
                                    </li>
                                    <li>
                                        <a  className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" />
                                            Trusted & Quality Travel Services
                                        </a>
                                    </li>
                                    <li>
                                        <a className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" /> Flexible & Customized Packages
                                        </a>
                                    </li>
                                    <li>
                                        <a className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" /> Dedicated Support Throughout
                                        </a>
                                    </li>
                                    <li>
                                        <a className="gradient-color">
                                            <i className="icon-arrow-right gradient-color" /> 
                                            Reliable & Hassle-Free Planning
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <Link 
                                        href="/about-us" 
                                        className="py-2! px-5! inline-block tracking-wide align-middle duration-500 text-base text-center bg-logo-color1 text-white rounded-md hover:!text-white">
                                        About Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offer-box">
                <div
                    className="bg-layer"
                    style={{
                        backgroundImage: "url(/assets/modern-img/chooseus-bg.jpg)"
                    }}
                />
                <div className="content_block_two">
                    <div className="content-box">
                        <span className="sub-title">discover</span>
                        <p>EXPERIENCE THE SPIRITUAL SOUL OF Varanasi</p>
                        <Heading
                            level={3}
                            text="Explore Timeless Ghats, Temples & Sacred Journeys"
                            className="text-white! why-head"
                        />
                        <Heading
                            level={4}
                            text="Seamless Travel Experiences Crafted for Every Traveler"
                            className="text-20 text-white!"
                            allowHTML={true}
                        />
                        <div className="btn-box mt-3">
                            <Link href="/tour-package/kashi-prayagraj-ayodhya-spiritual-tour" className="py-2! px-5! inline-block tracking-wide align-middle duration-500 text-base text-center bg-logo-color1 text-white rounded-md hover:!text-white">
                                Enquire Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
