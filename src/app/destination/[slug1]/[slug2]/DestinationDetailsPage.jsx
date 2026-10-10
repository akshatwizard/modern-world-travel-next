import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
export default function DestinationDetailsPage({ initialData }) {
    if (!initialData) return null;
    return (
        <>
            {/* <BreadcrumbHeader
                desktopImage={initialData.desktop_banner_image || "/assets/img/hero/1.png"}
                mobileImage={initialData.mobile_banner_image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={initialData.title}
                subtitle={initialData.city_title}
            /> */}
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container mx-auto tw:px-2 tw:py-20">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                        <div className="order-1">
                            <h1 className="mb-4 font-bold leading-tight text-[#004d91] text-25 md:text-18">
                                {initialData?.title}
                            </h1>
                            {initialData?.city_title && (
                                <p className="mb-4 text-sm text-gray-600 md:text-base">
                                    {initialData.city_title}
                                </p>
                            )}
                            <nav className="mb-6 hidden flex-wrap items-center gap-2 text-sm md:flex">
                                <Link
                                    href="/"
                                    className="font-medium text-gray-500 transition-colors hover:text-[#eb6605]"
                                >
                                    Home
                                </Link>
                                <span className="text-gray-400">/</span>
                                <span className="line-clamp-1 max-w-[300px] font-semibold text-[#004d91]">
                                    {initialData?.title}
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
                                    src={initialData?.desktop_banner_image || "/assets/img/hero/1.png"}
                                    alt={initialData?.title || "Banner"}
                                    className="hidden h-[420px] w-full object-cover md:block"
                                />
                                <img
                                    src={
                                        initialData?.mobile_banner_image ||
                                        initialData?.desktop_banner_image ||
                                        "/assets/img/hero/1.png"
                                    }
                                    alt={initialData?.title || "Banner"}
                                    className="h-64 w-full object-cover md:hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="single-tour-section city_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {initialData.dest_sub_heading && (
                                <div className="sub-heading text-center">
                                    <Heading
                                        level={2}
                                        text={initialData.dest_sub_heading || ''}
                                        className="text-24 md:text-22 text-white fw-500 mb-10"
                                    />
                                </div>
                            )}
                            <div className="single-tour-inner blog-section">
                                {initialData.destination_content && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: initialData.destination_content
                                        }}
                                    />
                                )}
                                {initialData.opening_closing_time_days && (
                                    <div className="destination-table">
                                        <div className="destination-time-title">
                                            <Heading
                                                level={4}
                                                text="Important Timings"
                                                className="text-20 text-white fw-500 table-title"
                                            />
                                        </div>
                                        <div className="table-format"
                                            dangerouslySetInnerHTML={{
                                                __html: initialData.opening_closing_time_days
                                            }}
                                        />
                                    </div>
                                )}
                                {initialData.booking_entry_fees && (
                                    <div className="destination-table">
                                        <div className="destination-time-title">
                                            <Heading
                                                level={4}
                                                text="Booking and Entry Fees"
                                                className="text-20 text-white fw-500 table-title"
                                            />
                                        </div>

                                        <div
                                            className="table-formatulli"
                                            dangerouslySetInnerHTML={{
                                                __html: initialData.booking_entry_fees
                                            }}
                                        />
                                    </div>
                                )}

                                {/* History & Legacy */}
                                {initialData.history_legacy && (
                                    <div className="destination-table">
                                        <div className="destination-time-title">
                                            <Heading
                                                level={4}
                                                text="History and Legacy"
                                                className="text-20 text-white fw-500 table-title"
                                            />
                                        </div>

                                        <div
                                            className="history_legacy"
                                            dangerouslySetInnerHTML={{
                                                __html: initialData.history_legacy
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Nearby Destinations */}
                                {initialData.nearby_destination && (
                                    <div className="destination-table">
                                        <div className="destination-time-title">
                                            <Heading
                                                level={4}
                                                text="Nearby Destinations"
                                                className="text-20 text-white fw-500 table-title"
                                            />
                                        </div>

                                        <div
                                            className="table-formatulli"
                                            dangerouslySetInnerHTML={{
                                                __html: initialData.nearby_destination
                                            }}
                                        />
                                    </div>
                                )}
                                {/* Tourist Guidelines */}
                                {initialData.tourist_guidelines && (
                                    <div className="destination-table">
                                        <div className="destination-time-title">
                                            <Heading
                                                level={4}
                                                text="Tourist Guidelines & Tips"
                                                className="text-20 text-white fw-500 table-title"
                                            />
                                        </div>

                                        <div
                                            className="table-formatulli"
                                            dangerouslySetInnerHTML={{
                                                __html: initialData.tourist_guidelines
                                            }}
                                        />
                                    </div>
                                )}
                                {/* Top things to buy */}
                                {initialData.top_things_to_buy && (
                                    <div className="destination-table">
                                        <div className="destination-time-title">
                                            <Heading
                                                level={4}
                                                text={`Top Things to Buy Near ${initialData.city_title}`}
                                                className="text-20 text-white fw-500 table-title"
                                            />
                                        </div>

                                        <div
                                            className="table-formatulli"
                                            dangerouslySetInnerHTML={{
                                                __html: initialData.top_things_to_buy
                                            }}
                                        />
                                    </div>
                                )}
                                {/* Places to eat nearby */}
                                {initialData.places_to_eat_nearby && (
                                    <div className="destination-table">
                                        <div className="destination-time-title">
                                            <Heading
                                                level={4}
                                                text="Top Things and Places to Eat Nearby"
                                                className="text-20 text-white fw-500 table-title"
                                            />
                                        </div>

                                        <div
                                            className="table-formatulli"
                                            dangerouslySetInnerHTML={{
                                                __html: initialData.places_to_eat_nearby
                                            }}
                                        />
                                    </div>
                                )}
                                {initialData.tour_cover && initialData.tour_cover.length > 0 && (
                                    <div className="destination-tour-cover yu-se">
                                        <h6 className="main-title">Tours Covering {initialData.title}</h6>
                                        <hr />
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {initialData.tour_cover.map((tour, index) => (
                                                <Link
                                                    key={tour.nid || index}
                                                    href={`/tour-package/${tour.tour_page_url}`}
                                                    className="group block"
                                                >
                                                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:border-amber-300 transition-all duration-300 h-full">
                                                        <div className="relative h-48 overflow-hidden">
                                                            {tour.image ? (
                                                                <Image
                                                                    src={tour.image}
                                                                    alt={tour.title}
                                                                    fill
                                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                                                                    <span className="text-amber-600 text-lg font-medium">
                                                                        {tour.title}
                                                                    </span>
                                                                </div>
                                                            )}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                        </div>

                                                        {/* Tour Info */}
                                                        <div className="p-6">
                                                            <Heading
                                                                level={5}
                                                                text={tour.title}
                                                                className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2"
                                                            />
                                                            <div className="flex items-center justify-between mt-4">
                                                                <span className="text-amber-600 font-medium">
                                                                    View Tour Details
                                                                </span>
                                                                <svg className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
