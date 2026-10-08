"use client";
import React, { useEffect, useState } from 'react';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import {
    Clock,
    CalendarDays,
    MapPin,
    Map,
    ArrowRight ,
    Sparkles,
    CheckCircle2,
    XCircle,
} from "lucide-react";
import EnquiryModal from '@/components/EnquiryModal/EnquiryModal';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function ItineraryOrTourPackagePage({ initialData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);
    const pathname = usePathname();

    const { title, itinerary_description, duration, desktop_banner_image, mobile_banner_image, highlights, inclusions, exclusions, for_daywise = [], cover_city = [] } = initialData;
    return (
        <>
            {/* <BreadcrumbHeader
                desktopImage={desktop_banner_image || "/assets/img/hero/1.png"}
                mobileImage={mobile_banner_image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={title}
                subtitle={duration}
            /> */}
            {/* ===== Hero: Image + Content ===== */}
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container mx-auto px-2 py-8 md:py-20">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                        <div className="order-1">
                            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#eb6605]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#eb6605]">
                                <Map className="h-3.5 w-3.5" />
                                Tour Package
                            </span>
                            <h1 className="mb-4 text-3xl font-bold leading-tight text-[#004d91] md:text-5xl">
                                {title}
                            </h1>
                            <div className="mb-6 flex flex-wrap gap-3">
                                {duration && (
                                    <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                        <CalendarDays className="h-4 w-4 text-[#eb6605]" />
                                        {duration}
                                    </span>
                                )}
                                {Array.isArray(cover_city) && cover_city.length > 0 && (
                                    <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                        <MapPin className="h-4 w-4 text-[#eb6605]" />
                                        {cover_city.length} Cities Covered
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="relative order-2">
                            <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-[#eb6605]/40 lg:block" />
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src={desktop_banner_image || "/assets/img/hero/1.png"}
                                    alt={title || "Tour package"}
                                    className="hidden h-[420px] w-full object-cover md:block"
                                />
                                <img
                                    src={mobile_banner_image || desktop_banner_image || "/assets/img/hero/1.png"}
                                    alt={title || "Tour package"}
                                    className="h-64 w-full object-cover md:hidden"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                {duration && (
                                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#004d91] shadow backdrop-blur">
                                        <Clock className="h-4 w-4 text-[#eb6605]" strokeWidth={2.25} />
                                        {duration}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tour_package_section">
                <div className="single-tour-section">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-8">
                                <div className="single-tour-inner space-y-8">
                                    {highlights && (
                                        <div className="package-head-text rounded-2xl border border-gray-100 bg-[#f5f4f4] p-3 shadow-sm md:p-4">
                                            <div
                                                className="text-sm leading-relaxed text-gray-600 md:text-base"
                                                dangerouslySetInnerHTML={{ __html: highlights }}
                                            />
                                        </div>
                                    )}

                                    {/* ─── Inclusions ──────────────────────────────── */}
                                    {inclusions && (
                                        <div className="inclusions rounded-2xl border border-gray-100 bg-[#f5f4f4] p-3 shadow-sm md:p-4">
                                            <h5 className="mb-5 flex items-center gap-2 text-2xl font-semibold text-[#eb6605]!">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                    ✓
                                                </span>
                                                Inclusions
                                            </h5>
                                            <div
                                                className="list-disc list-inside space-y-2 text-sm leading-relaxed text-gray-600 md:text-base"
                                                dangerouslySetInnerHTML={{ __html: inclusions }}
                                            />
                                        </div>
                                    )}

                                    {/* ─── Exclusions ──────────────────────────────── */}
                                    {exclusions && (
                                        <div className="exclusions rounded-2xl border border-gray-100 bg-[#f5f4f4] p-3 shadow-sm md:p-4">
                                            <h6 className="mb-5 flex items-center gap-2 text-2xl font-semibold text-[#eb6605]!">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-500">
                                                    ✕
                                                </span>
                                                Exclusions
                                            </h6>
                                            <div
                                                className="list-disc list-inside space-y-2 text-sm leading-relaxed text-gray-600 md:text-base"
                                                dangerouslySetInnerHTML={{ __html: exclusions }}
                                            />
                                        </div>
                                    )}

                                    {/* ─── Itinerary Description ───────────────────── */}
                                    {itinerary_description && (
                                        <div className="itinerary_description rounded-2xl border border-gray-100 bg-[#f5f4f4] p-3 shadow-sm md:p-4">
                                            <div
                                                className="text-sm leading-relaxed text-gray-600 md:text-base"
                                                dangerouslySetInnerHTML={{ __html: itinerary_description }}
                                            />
                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className="col-lg-4 relative">                                
                                <div className="sticky top-20">
                                    {for_daywise.length > 0 && (
                                    <div id="itinerary" className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg mb-3">
                                        <div className="flex items-center gap-3 bg-gradient-to-r from-[#004d91] to-[#0a6cc4] px-3 py-3">                                        
                                            <div>
                                               <h2
                                                    className="text-24 text-white"
                                                    style={{
                                                        color: "#fff",
                                                        backgroundImage: "unset",
                                                        WebkitTextFillColor: "unset",
                                                    }}
                                                    >
                                                    Day Wise Itinerary
                                                </h2>
                                                <p className="text-xs text-white">Your journey, day by day</p>
                                            </div>                                            
                                        </div>
                                        <ul className="divide-y divide-gray-100">
                                        {for_daywise.map((day, index) => (
                                            <li key={day.nid || index}>
                                            <Link
                                                href={`#day-${index + 1}`}
                                                className="group flex items-center gap-4 px-3 py-3 transition-colors hover:bg-orange-50/60"
                                            >
                                                {/* Day number badge */}
                                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-50 text-sm font-bold text-[#eb6605] ring-1 ring-orange-200 transition-all duration-300 group-hover:bg-[#eb6605] group-hover:text-white group-hover:ring-orange-100">
                                                {String(index + 1).padStart(2, "0")}
                                                </span>

                                                {/* Title */}
                                                <div className="min-w-0 flex-1">
                                                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#eb6605]">
                                                        Day {index + 1}
                                                    </div>
                                                    <div className="line-clamp-2 text-sm font-semibold leading-5 text-[#004d91] group-hover:text-[#0a6cc4] md:text-base md:leading-6">
                                                        {day.day_title}
                                                    </div>
                                                </div>

                                                {/* Arrow */}
                                                <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#eb6605]" />
                                            </Link>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                    )}

                                    {Array.isArray(cover_city) && cover_city.length > 0 && (
                                        <div className="sidebar -type-2">
                                            <div className="sidebar__item">
                                                <h3 className="text-24 fw-600 mb-20">Covered Cities</h3>
                                                <div className="d-flex y-gap-20 flex-column">
                                                    {cover_city.map((city, index) => (
                                                        <Link href={`/city/${city.city_url}`} className="d-flex align-center tour-cover-a" key={city.nid || index}>
                                                            <div className="size-70 overflow-hidden rounded-12">
                                                                <img
                                                                    src={city.city_img_path || "/assets/modern-img/Vrindavan.jpg"}
                                                                    alt={city.title || "city"}
                                                                    className="img-cover"
                                                                />
                                                            </div>
                                                            <div className="ml-20">
                                                                <h5 className="text-[#eb6605]! text-18 lh-14 fw-500">
                                                                    {city.title}
                                                                </h5>
                                                                <p className="text-xs md:text-sm">{city.city_details?.slice(0, 30)}...</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="book-this-tour bg-white rounded-xl shadow-lg border border-gray-100 p-2 md:p-2">
                                        <div className="book_form_section">
                                            <div className="contactForm">
                                                <div className="row y-gap-15">
                                                    <div className="col-12">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedTour({
                                                                    title: title,
                                                                    duration: duration,
                                                                });
                                                                setIsModalOpen(true);
                                                            }}
                                                            className="button -md -dark-1 bg-accent-1 text-white col-12">
                                                            Book This Tour
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <EnquiryModal
                isOpen={isModalOpen}
                title={selectedTour?.title}
                duration={selectedTour?.duration}
                currentUrl={typeof window !== "undefined" ? window.location.href : ""}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}
