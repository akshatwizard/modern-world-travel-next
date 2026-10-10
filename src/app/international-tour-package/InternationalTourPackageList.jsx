'use client';
import React from 'react'
import { Heading } from '@/components/Heading/Heading';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export function InternationalTourPackageList({ initialData }) {
    const tours = Array.isArray(initialData) ? initialData : [];
    if (!tours.length) {
        return null;
    }
    return (
        <>
            {/* <BreadcrumbHeader
                desktopImage="/assets/img/hero/1.png"
                mobileImage="/assets/img/hero/1.png"
                shapeImage="/assets/img/hero/1/shape.svg"
                title='International Tour Package'
                subtitle=""
            /> */}
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container mx-auto tw:px-2 tw:py-20">
                    <div className="grid items-center gap-2 lg:grid-cols-2 lg:gap-14">
                        <div className="order-1">
                            <h1 className="mb-2 md:tw-mb-4 font-bold leading-tight text-[#004d91] text-25 md:text-18">
                                International Tour Package
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
                                    International Tour Package
                                </span>
                            </nav>
                            {/* <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-sm font-medium text-[#004d91] transition-colors hover:text-[#eb6605]"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                Back to Home
                            </Link> */}
                        </div>
                        <div className="relative order-2">
                            <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-[#eb6605]/40 lg:block" />
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="/assets/img/hero/1.png"
                                    alt="International Tour Package"
                                    className="hidden h-[420px] w-full object-cover md:block"
                                />
                                <img
                                    src="/assets/img/hero/1.png"
                                    alt="International Tour Package"
                                    className="h-64 w-full object-cover md:hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="layout-pt-xl layout-pb-xl international-tour-container">
                <div className="container">
                    <div className="w-full mb-10 text-center">
                        <p className="text-16 text-light-2 leading-relaxed mb-4">
                            Looking to travel beyond India? Modern World Travel puts together international holidays that mix culture, nature, and comfort, without the stress of planning everything yourself. Every package below is built around a fixed itinerary, so you know your hotels, sightseeing, and transport are sorted before you leave home.
                        </p>
                        <p className="text-16 text-light-2 leading-relaxed mb-4">
                            Our Bhutan and Nepal trips take you through Himalayan monasteries, mountain towns, and quiet valleys, ideal if you want a slower, spiritual kind of holiday. If you'd rather relax on a beach or explore a big city, our Sri Lanka, Thailand, and Vietnam packages cover everything from tea gardens and ancient temples to nightlife and river cruises. For travellers who want a short, glamorous getaway, the Dubai itinerary combines desert safaris with skyline views and shopping.
                        </p>
                        <p className="text-16 text-light-2 leading-relaxed">
                            Each tour can be customised for family trips, honeymoons, or small group travel. Speak to our team to adjust the nights, hotel category, or add extra sightseeing to any of these packages.
                        </p>
                    </div>                
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mobile-css-slider -w-300 gap-3 mt-8!">
                        {initialData && initialData.map((tour) => (
                            <div key={tour.nid} className="w-full h-full shadow-lg hover:shadow-2xl rounded-12">
                                <Link href=
                                    {`/tour-package/${tour.url}`}
                                    className="tourCard -type-1 d-block border bg-white hover-shadow-1 overflow-hidden rounded-12 hover-shadow h-full! group flex! flex-col! justify-between!"
                                >
                                    <div className="tourCard__header">
                                        <div className="tourCard__image -hover-image-scale__image ratio ratio-28:20">
                                            <Image
                                                src={tour.image ?? "/assets/modern-img/varanasi-sarnath.jpg"}
                                                alt={tour.title}
                                                className="img-ratio"
                                                width={200}
                                                height={200}
                                            />
                                        </div>

                                    </div>
                                    <div className="international-tour-card w-full h-full">
                                        <div className="flex! flex-col! justify-between! w-full h-full">
                                            <div className="international-tour-section">
                                                <div className="tourCard__content flex! flex-col! justify-between! gap-2!">
                                                    {/* <div className="tourCard__location d-flex items-center text-13 text-light-2">
                                                        <i className="icon-pin d-flex text-16 text-light-2 mr-5" />
                                                        {tour.location}
                                                    </div> */}
                                                    <h2 className="lg:text-[21px]! text-[18px]! font-medium ttourCard__title  fw-500 mt-5 leading-tight! z-10!" style={{ WebkitTextFillColor: 'unset', fontWeight: 'normal' }}>
                                                        {tour.title}
                                                    </h2>                                                    
                                                    <p className='relative z-10! line-clamp-4 group-hover:text-white! transition-colors'>
                                                        {tour.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='international-tour-section-in'>
                                                <div className="d-flex justify-between items-center home-duration">
                                                    <div className="d-flex items-center duration-content">
                                                        <i className="icon-clock text-16 mr-5" />
                                                        {tour.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}