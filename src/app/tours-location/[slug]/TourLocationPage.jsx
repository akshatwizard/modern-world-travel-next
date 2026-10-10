import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import Link from 'next/link';
import {
    ArrowLeft,
    ArrowRight,
    MapPin,
    ChevronRight,
    Sparkles,
    CalendarDays,
    Clock,
    ChevronLeft,
    XCircle,
} from "lucide-react";

export default function TourLocationPage({ initialData }) {
    const {
        tour_location = [],
        title,
        image,
        tour_category_des = ''
    } = initialData;
    return (
        <>
            {/* <BreadcrumbHeader
                desktopImage={image || "/assets/img/hero/1.png"}
                mobileImage={image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={title}
                subtitle=""
            /> */}
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container mx-auto tw:px-2 tw:py-20 md:tw:py-20">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                        {/* ═══ LEFT: Content ═══ */}
                        <div className="order-1">
                            <h1 className="mb-4 font-bold leading-tight text-[#004d91] text-25 md:text-18">
                               {title}
                            </h1>
                            <nav className="mb-6 hidden flex-wrap items-center gap-2 text-sm md:flex">
                                <Link
                                    href="/"
                                    className="font-medium text-gray-500 transition-colors hover:text-[#eb6605]"
                                >
                                    Home
                                </Link>
                                <span className="text-gray-400">/</span>
                                <span className="line-clamp-1 max-w-[300px] font-semibold text-[#004d91]">
                                    {title}
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
                                    src={image || "/assets/img/pageHeader/1.jpg"}
                                    alt={title || "Page banner"}
                                    className="hidden h-[420px] w-full object-cover md:block"
                                />
                                <img
                                    src={image || "/assets/img/pageHeader/1.jpg"}
                                    alt={title || "Page banner"}
                                    className="h-64 w-full object-cover md:hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="layout-pt-xl layout-pb-xl destination-list-section">
                <div className="container animated">
                    <div className="w-full mb-10 text-center">
                        {tour_category_des && (
                            <div
                                className="tour-category-description"
                                dangerouslySetInnerHTML={{
                                    __html: tour_category_des
                                }}
                            />
                        )}
                    </div>                       
                    <div className="row y-gap-30 pt-40 sm:pt-20">
                        {tour_location.map((tour, index) => (
                            <div className="col-lg-4 col-sm-6 is-in-view" key={tour.nid || index}>
                                <Link href={`/tour-package/${tour.url}`}  className="tourCard -type-3 -hover-image-scale">
                                    <div className="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image">
                                        <img
                                            src={tour.image || "/assets/modern-img/Prayagraj.jpg"}
                                            alt={tour.title}
                                            className="img-ratio rounded-12"
                                        />
                                    </div>
                                    <div className="tourCard__wrap">
                                        <div className="tourCard__header d-flex justify-between items-center text-13 text-white">
                                            <div className="d-flex items-center package-price">
                                                <i className="icon-clock text-16 mr-5" />
                                                {tour.duration}
                                            </div> 
                                                                                  
                                        </div>
                                        <div className="tourCard__content">
                                            <div>
                                                <Heading
                                                    level={3}
                                                    text= {tour.title}
                                                    className="tourCard__title text-20 text-white fw-500 mt-5"
                                                />  
                                                {Array.isArray(tour.covered_city) && tour.covered_city.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mt-3">
                                                        {tour.covered_city.slice(0, 3).map((city, i) => (
                                                            <span
                                                                key={i}
                                                                className="inline-flex items-center rounded
                                                                        bg-white/90 text-black text-xs
                                                                        px-3 py-1 font-medium"
                                                            >
                                                                {city}
                                                            </span>
                                                        ))}

                                                        {tour.covered_city.length > 3 && (
                                                            <span
                                                                className="inline-flex items-center rounded
                                                                        bg-[#eb6605] text-white text-xs
                                                                        px-3 py-1 font-medium"
                                                            >
                                                                +{tour.covered_city.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

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
