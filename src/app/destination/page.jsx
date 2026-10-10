import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
export default function DestinationListPage() {
    return (
        <>
            {/* <BreadcrumbHeader
                desktopImage="/assets/img/hero/1.png"
                mobileImage="/assets/img/hero/1.png"
                shapeImage="/assets/img/hero/1/shape.svg"
                title="Destination"
                subtitle=""
            /> */}
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container mx-auto tw:px-2 tw:py-20">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                        <div className="order-1">
                            <h1 className="mb-4 font-bold leading-tight text-[#004d91] text-25 md:text-18">
                                Destination
                            </h1>
                            <nav className="mb-6 hidden flex-wrap items-center gap-2 text-sm md:flex">
                                <Link
                                    href="/"
                                    className="font-medium text-gray-500 transition-colors hover:text-[#eb6605]"
                                >
                                    Home
                                </Link>
                                <span className="text-gray-400">/</span>
                                <span className="font-semibold text-[#004d91]">
                                    Destination
                                </span>
                            </nav>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-sm font-medium text-[#004d91] transition-colors hover:text-[#eb6605]"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                Back to Home
                            </Link>
                        </div>
                        <div className="relative order-2">
                            <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-[#eb6605]/40 lg:block" />
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="/assets/img/hero/1.png"
                                    alt="Destination"
                                    className="hidden h-[420px] w-full object-cover md:block"
                                />
                                <img
                                    src="/assets/img/hero/1.png"
                                    alt="Destination"
                                    className="h-64 w-full object-cover md:hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="layout-pt-xl layout-pb-xl destination-list-section">
                <div className="container animated">                    
                    <div className="row y-gap-30 pt-40 sm:pt-20">
                        <div className="col-lg-4 col-sm-6 is-in-view">
                            <a href="/destination/slug" className="tourCard -type-3 -hover-image-scale">
                                <div className="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image">
                                    <img
                                        src="/assets/modern-img/Prayagraj.jpg"
                                        alt="image"
                                        className="img-ratio rounded-12"
                                    />
                                </div>
                                <div className="tourCard__wrap">
                                    <div className="tourCard__header d-flex justify-between items-center text-13 text-white">
                                        <div className="d-flex items-center">
                                            <i className="icon-clock text-16 mr-5" />4 days
                                        </div>                                       
                                    </div>
                                    <div className="tourCard__content">
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Centipede Tour - Guided Arizona Desert Tour by ATV"
                                                className="tourCard__title text-20 text-white fw-500 mt-5"
                                            />   
                                            
                                        </div>
                                        {/* <div className="text-right text-white">
                                            <div className="text-13 lh-14">From</div>
                                            <div className="text-18 fw-500">$189,25</div>
                                        </div> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6 is-in-view">
                            <a href="/destination/slug" className="tourCard -type-3 -hover-image-scale">
                                <div className="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image">
                                    <img
                                        src="/assets/modern-img/chitrakoot.jpg"
                                        alt="image"
                                        className="img-ratio rounded-12"
                                    />
                                </div>
                                <div className="tourCard__wrap">
                                    <div className="tourCard__header d-flex justify-between items-center text-13 text-white">
                                        <div className="d-flex items-center">
                                            <i className="icon-clock text-16 mr-5" />4 days
                                        </div>
                                        
                                    </div>
                                    <div className="tourCard__content">
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Centipede Tour - Guided Arizona Desert Tour by ATV"
                                                className="tourCard__title text-20 text-white fw-500 mt-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6 is-in-view">
                            <a href="/destination/slug" className="tourCard -type-3 -hover-image-scale">
                                <div className="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image">
                                    <img
                                        src="/assets/modern-img/chitrakoot.jpg"
                                        alt="image"
                                        className="img-ratio rounded-12"
                                    />
                                </div>
                                <div className="tourCard__wrap">
                                    <div className="tourCard__header d-flex justify-between items-center text-13 text-white">
                                        <div className="d-flex items-center">
                                            <i className="icon-clock text-16 mr-5" />4 days
                                        </div>
                                        
                                    </div>
                                    <div className="tourCard__content">
                                        <div>
                                            <Heading
                                                level={3}
                                                text="Centipede Tour - Guided Arizona Desert Tour by ATV"
                                                className="tourCard__title text-20 text-white fw-500 mt-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>    
                                            
                    </div>
                </div>
            </section>


        </>
    )
}
