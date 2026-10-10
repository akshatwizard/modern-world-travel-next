'use client';

import React, { useEffect, useRef } from 'react';
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
export default function GallerySlugPage({ initialData }) {
    const section = initialData?.section_info;
    const items = initialData?.data || [];
    const mediaType = section?.media_type;
    const masonryRef = useRef(null);
    const masonryInstance = useRef(null);
    useEffect(() => {
        NativeFancybox.bind('[data-fancybox]', {});

        return () => {
            NativeFancybox.destroy();
        };
    }, []);
    /* ---------------------------
        Masonry (client only)
    --------------------------- */
    useEffect(() => {
        if (!masonryRef.current) return;
        let destroyed = false;
        const initMasonry = async () => {
            const MasonryModule = await import('masonry-layout');
            const imagesLoadedModule = await import('imagesloaded');
            const Masonry = MasonryModule.default;
            const imagesLoaded = imagesLoadedModule.default;
            if (destroyed) return;
            if (masonryInstance.current) {
                masonryInstance.current.destroy();
                masonryInstance.current = null;
            }
            imagesLoaded(masonryRef.current, () => {
                if (destroyed) return;
                masonryInstance.current = new Masonry(masonryRef.current, {
                    itemSelector: '.masonry-item',
                    percentPosition: true,
                    transitionDuration: 0,
                });
            });
        };
        initMasonry();
        return () => {
            destroyed = true;
            if (masonryInstance.current) {
                masonryInstance.current.destroy();
                masonryInstance.current = null;
            }
        };

    }, [items, mediaType]);
    return (
        <>
            {/* <BreadcrumbHeader
                desktopImage="/assets/img/pageHeader/1.jpg"
                mobileImage="/assets/img/pageHeader/1.jpg"
                shapeImage="/assets/img/hero/1/shape.svg"
                title={section?.heading || 'Gallery'}
                subtitle={section?.sub_heading || ''}
            /> */}
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container mx-auto tw:px-2 tw:py-20">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                        <div className="order-1">
                            <h1 className="mb-4 font-bold leading-tight text-[#004d91] text-25 md:text-18">
                                {section?.heading || "Gallery"}
                            </h1>
                            {section?.sub_heading && (
                                <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                                    {section.sub_heading}
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
                                    {section?.heading || "Gallery"}
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
                                    src="/assets/img/pageHeader/1.jpg"
                                    alt={section?.heading || "Gallery"}
                                    className="hidden h-[420px] w-full object-cover md:block"
                                />
                                <img
                                    src="/assets/img/pageHeader/1.jpg"
                                    alt={section?.heading || "Gallery"}
                                    className="h-64 w-full object-cover md:hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-lg layout-pb-lg section-gallery">
                <div className="container">
                    {/* {section?.title && (
                        <div className="text-center mb-40">
                            <Heading
                                level={4}
                                text={section.title}
                                className="ttourCard__title fw-600 mt-5 leading-tight!"
                            />
                        </div>
                    )} */}
                    <div className="gallery-masonry-container home-landscape-img-se">
                        <div className="row masonry-grid" ref={masonryRef}>
                            {items.map((item, index) => {
                                const image = item.gallery_url;
                                const videoUrl = item.video_url;
                                const title = item.title;
                                const externalUrl = item.external_url;
                                if (mediaType === 'landscape_image') {
                                    return (
                                        <div
                                            key={item.id}
                                            className="col-xl-4 col-lg-4 col-sm-6 col-12  masonry-item"
                                        >
                                            <div className="mb-5 p-2 pb-4">
                                                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 mb-3">
                                                    <div className="relative h-80 overflow-hidden">
                                                        {externalUrl && externalUrl.trim() ? (
                                                            <a
                                                                href={externalUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="block w-full h-full relative"
                                                            >
                                                                <img
                                                                    src={image}
                                                                    alt={title || `Image ${item.id}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                    loading="lazy"
                                                                    onError={(e) => {
                                                                        e.currentTarget.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                                    }}
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                            </a>
                                                        ) : (
                                                            <a
                                                                href={image}
                                                                data-fancybox="gallery"
                                                                data-caption={title || `Image ${item.id}`}
                                                                className="block w-full h-full relative"
                                                            >
                                                                <img
                                                                    src={image}
                                                                    alt={title || `Image ${item.id}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                    loading="lazy"
                                                                    onError={(e) => {
                                                                        e.currentTarget.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                                    }}
                                                                />
                                                            </a>
                                                        )}
                                                    </div>                                                
                                                </div>
                                                <div className="text-center px-2">
                                                    {title && title.trim() && (
                                                        <div className="text-[#eb6605] font-semibold text-center mb-1 text-18  p-landscape-img-title">
                                                            {title}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                /* ============================
                                    LANDSCAPE VIDEO
                                ============================ */
                                if (mediaType === 'landscape_video') {
                                return (
                                    <div
                                        key={item.id}
                                        className="col-xl-4 col-lg-4 col-sm-6 col-12 mb-5 masonry-item p-2"
                                    >
                                        <div className="group">
                                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-3">
                                                <div className="relative h-56 md:h-64 overflow-hidden rounded-2xl bg-black">

                                                    <video
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        controls
                                                        controlsList="nodownload"
                                                    >
                                                        <source src={videoUrl} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>

                                                </div>
                                            </div>

                                            <div className="text-center px-2">
                                                {title && title.trim() && (
                                                    <h6 className="text-[#555555] text-18 font-semibold mb-1 truncate">
                                                        {title}
                                                    </h6>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                                /* ============================
                                    PORTRAIT IMAGE
                                ============================ */
                                if (mediaType === 'portrait_image') {
                                    return (
                                        <div
                                            key={item.id}
                                            className="col-xl-4 col-lg-4 col-sm-6 col-12 mb-5 masonry-item p-2"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 box-sd">
                                                <div className="relative aspect-[3/4] overflow-hidden">

                                                    {externalUrl && externalUrl.trim() ? (
                                                        <a
                                                            href={externalUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block w-full h-full"
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={title || `Portrait ${index + 1}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.currentTarget.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                                }}
                                                            />
                                                        </a>
                                                    ) : (
                                                        <a
                                                            href={image}
                                                            data-fancybox="portrait-gallery"
                                                            data-caption={title || `Portrait ${index + 1}`}
                                                            className="block w-full h-full"
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={title || `Portrait ${index + 1}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.currentTarget.src = '/assets/modern-img/varanasi-sarnath.jpg';
                                                                }}
                                                            />
                                                        </a>
                                                    )}

                                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                                        {title && title.trim() && (
                                                            <div className="text-white font-semibold text-center mb-1 truncate text-18 p-portrait-img-title">
                                                                {title}
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                /* ============================
                                    PORTRAIT VIDEO
                                ============================ */
                                if (mediaType === 'portrait_video') {
                                    return (
                                        <div
                                            key={item.id}
                                            className="col-xl-3 col-lg-3 col-sm-6 col-12 mb-5 masonry-item p-2"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl shadow-lg mb-3">
                                                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black">

                                                    <video
                                                        className="w-full h-full object-cover transition-transform duration-700"
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        controls
                                                        controlsList="nodownload"
                                                    >
                                                        <source src={videoUrl} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>

                                                </div>
                                            </div>

                                            <div className="text-center px-2">
                                                {title && title.trim() && (
                                                    <h6 className="text-[#555555] text-18 font-semibold mb-1 truncate">
                                                        {title}
                                                    </h6>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
