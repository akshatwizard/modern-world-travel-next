'use client';
import React from 'react'
import { Heading } from '@/components/Heading/Heading';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import Link from 'next/link';
import Image from 'next/image';
export function InternationalTourPackageList({ initialData }) {
    const tours = Array.isArray(initialData) ? initialData : [];
    if (!tours.length) {
        return null;
    }
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/hero/1.png"
                mobileImage="/assets/img/hero/1.png"
                shapeImage="/assets/img/hero/1/shape.svg"
                title='International Tour Package'
                subtitle=""
            />
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