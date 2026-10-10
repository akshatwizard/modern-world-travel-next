'use client';
import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
import { Leaf, Star, Droplet, Flame, MapPin, Compass, Circle, Globe,ChevronLeft } from 'lucide-react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Link from 'next/link';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
export default function experienceDetailsPage({ initialData }) {
    if (!initialData) return null;
    useEffect(() => {
        Fancybox.bind('[data-fancybox="experience-gallery"]', {
            Thumbs: false,
            Toolbar: true,
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);
    return (
        <>
            {/* <BreadcrumbHeader
                desktopImage={initialData?.desktop_banner_image || "/assets/img/hero/1.png"}
                mobileImage={initialData?.mobile_banner_image || "/assets/img/hero/1.png"}
                shapeImage="/assets/img/hero/1/shape.svg"
                title={initialData?.title}
                subtitle=""
            /> */}
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container mx-auto tw:px-2 tw:py-20">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                        <div className="order-1">
                            <h1 className="mb-4 font-bold leading-tight text-[#004d91] text-25 md:text-18">
                                {initialData?.title}
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
                                    {initialData?.title}
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
                            {/* <div className="sub-heading text-center">
                                <Heading
                                level={3}
                                text={initialData?.title}
                                className="text-26 text-white fw-500 mb-10"
                                />
                            </div> */}
                            <div className="single-tour-inner blog-section experience-section">
                                <div className="table-formatulli mt-0">
                                    {initialData?.page_intro && (
                                        <div
                                            className="mb-20"
                                            dangerouslySetInnerHTML={{
                                                __html: initialData.page_intro
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="list-data exp-time-section">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {initialData?.page_paragraph?.map((item, index) => {
                                                const hasImage = item?.image && item.image !== '';
                                                const imageOnRight = index % 2 === 0; 
                                                return (
                                                    <div className="padding-bottom" key={item.nid || index}>
                                                        <div className="row align-items-center">

                                                            <div className="col-md-12">
                                                                <div className="destination-time-title">
                                                                    <h4 className="text-xl md:text-2xl font-semibold text-20 text-white fw-500 table-title">
                                                                        {item.title}
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            {hasImage && !imageOnRight && (
                                                                <div className="col-lg-5 d-flex align-items-center">
                                                                    <div className="image paragra-img">
                                                                        <figure className="feature-image1">
                                                                            <img
                                                                                className="rounded shadow-black"
                                                                                src={item.image}
                                                                                alt={item.title || ''}
                                                                            />
                                                                        </figure>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div
                                                                className={
                                                                    hasImage
                                                                        ? "col-lg-7 pagedata table-formatulli"
                                                                        : "col-lg-12 pagedata table-formatulli"
                                                                }
                                                            >
                                                                <div className='mb-10'
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item?.content || ''
                                                                    }}
                                                                />
                                                            </div>
                                                            {hasImage && imageOnRight && (
                                                                <div className="col-lg-5 d-flex align-items-center">
                                                                    <div className="image paragra-img">
                                                                        <figure className="feature-image1">
                                                                            <img
                                                                                className="rounded shadow-black"
                                                                                src={item.image}
                                                                                alt={item.title || ''}
                                                                            />
                                                                        </figure>
                                                                    </div>
                                                                </div>
                                                            )}

                                                        </div>
                                                    </div>
                                                );
                                            })}


                                        </div>
                                    </div>
                                </div>
                                {initialData?.more_img?.length > 0 && (
                                    <div className="more-images-section mt-40">
                                        <div className="row">
                                            {initialData.more_img.map((img, i) => (
                                                <div
                                                    key={img.nid || i}
                                                    className="col-lg-3 col-md-4 col-sm-6 mb-10 pr-2! pl-2!"
                                                >
                                                    <a
                                                        href={img.image}
                                                        data-fancybox="experience-gallery"
                                                        className="d-block image"
                                                    >
                                                        <div className="image">
                                                            <img
                                                                src={img.image}
                                                                alt=""
                                                                className="img-fluid rounded shadow-black"
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
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
