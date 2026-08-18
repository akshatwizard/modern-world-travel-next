import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import Link from 'next/link';
import Image from 'next/image';
export default function BlogDetailsPage({ initialData }) {
    if (!initialData) return null;
    const {
        title,
        intro,
        desktop_banner_image,
        mobile_banner_image,
        sections,
        associated_itinarery
    } = initialData;
    return (
        <>
            <BreadcrumbHeader
                desktopImage={desktop_banner_image || "/assets/img/hero/1.png"}
                mobileImage={mobile_banner_image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={title || "Blog Details"}
                subtitle=""
            />
            <section className="layout-pt-md layout-pb-xl">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-lg-8">
                            <div className="blog_details_page blog-details-contact blog-single">
                                {/* <Heading
                                    level={2}
                                    text="The Brazen Head"
                                    className="text-30 md:text-24"
                                /> */}

                                {intro && (
                                    <p
                                        className="mt-0"
                                        dangerouslySetInnerHTML={{ __html: intro }}
                                    />
                                )}
                                {Array.isArray(sections) && sections.length > 0 && (
                                    sections.map((section, index) => (
                                        <div key={index} className="mt-10 paragraph-content mt-3 blog-post-data">
                                            {section.heading && (
                                                <Heading
                                                    level={2}
                                                    text={section.heading}
                                                    className="fw-600 blog-de-h2"
                                                />
                                            )}

                                            {section.image && (
                                                <div className="mt-3">
                                                    <div className="para-img featureCard__image ratio ratio-19:22 rounded-24 -hover-image-scale__image">
                                                        <Image
                                                        src={section.image}
                                                        alt={section.heading || 'image'}
                                                        className="img-ratio paragraph-image rounded! mb-2" 
                                                        width={500}
                                                        height={300}
                                                        sizes="(max-width: 768px) 100vw, 500px"                                                    
                                                        />
                                                    </div>
                                                </div>
                                            )}                                           
                                            {section.message && (
                                                <div
                                                    className="mt-15"
                                                    dangerouslySetInnerHTML={{ __html: section.message }}
                                                />
                                            )}
                                            {Array.isArray(associated_itinarery) && associated_itinarery.length > 0 && (
                                                <div className="md:mt-5 mt-[10px]">
                                                    <h5 className="text-xl md:text-2xl font-semibold text-[#004d91]! mb-4 font-bold!">
                                                        Related Itineraries
                                                    </h5>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                        {associated_itinarery.map((itinerary, i) => (
                                                            <Link
                                                                key={itinerary.nid || i}
                                                                href={`/tour-package/${itinerary.url}`}
                                                                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
                                                            >
                                                                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                                                                    {itinerary.image ? (
                                                                        <Image
                                                                            src={itinerary.image}
                                                                            alt={itinerary.title || "Itinerary"}
                                                                            fill
                                                                            sizes="(max-width: 768px) 100vw, 400px"
                                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                                        />
                                                                    ) : (
                                                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-100 text-gray-400">
                                                                            <svg
                                                                                className="w-10 h-10"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={1.5}
                                                                                    d="M3 16.5V6a2 2 0 012-2h14a2 2 0 012 2v10.5M3 16.5l4.5-4.5a2 2 0 012.8 0l2.2 2.2m0 0l2-2a2 2 0 012.8 0L21 16.5M3 16.5V18a2 2 0 002 2h14a2 2 0 002-2v-1.5"
                                                                                />
                                                                                <circle cx="8" cy="8.5" r="1.5" strokeWidth={1.5} />
                                                                            </svg>
                                                                            <span className="text-xs font-medium">No image available</span>
                                                                        </div>
                                                                    )}
                                                                    {itinerary.duration && (
                                                                        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 px-3 py-1 rounded-full shadow">
                                                                            {itinerary.duration}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <div className="flex flex-col flex-1 p-[10px]">
                                                                    <div className="text-[#eb6605] text-18 md:truncate text-18 md:text-16 font-semibold mb-1">
                                                                        {itinerary.title}
                                                                    </div>
                                                                    {itinerary.description && (
                                                                        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                                                                            {itinerary.description}
                                                                        </p>
                                                                    )}
                                                                    <div className="mt-[5px] pt-[5px] border-t border-gray-100 text-center">
                                                                        <span className="inline-flex items-center gap-1.5 text-[#004d91] text-sm font-semibold group-hover:text-[#eb6605] transition-colors duration-300">
                                                                            View Itinerary
                                                                            <svg
                                                                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M9 5l7 7-7 7"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}                                     
                                        </div>
                                    ))
                                )}
                            </div>
                            {/* <div className="line mt-60 mb-30" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
