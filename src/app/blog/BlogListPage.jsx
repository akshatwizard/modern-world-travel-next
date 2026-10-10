import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import Link from 'next/link';
import { Heading } from '@/components/Heading/Heading';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
export default function BlogListPage({ initialData }) {
    if (!Array.isArray(initialData) || initialData.length === 0) {
        return (
            <>
                <BreadcrumbHeader
                    desktopImage="/assets/img/hero/1.png"
                    mobileImage="/assets/img/hero/1.png"
                    shapeImage="/assets/img/hero/1/shape.svg"
                    title="Blog"
                    subtitle=""
                />
                <section className="layout-pt-md layout-pb-xl">
                    <div className="container text-center">
                        <h4>No blog found</h4>
                    </div>
                </section>
            </>
        );
    }
    return (
        <>
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container mx-auto tw:px-2 tw:py-20">
                    <div className="grid items-center gap-2 lg:grid-cols-2 lg:gap-14">
                        <div className="order-1">
                            <h1 className="mb-2 md:tw-mb-4 font-bold leading-tight text-[#004d91] text-25 md:text-18">
                                Blog
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
                                    Blog
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
                                    alt="Blog"
                                    className="hidden h-[420px] w-full object-cover md:block"
                                />
                                <img
                                    src="/assets/img/hero/1.png"
                                    alt="Blog"
                                    className="h-64 w-full object-cover md:hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="layout-pt-md layout-pb-xl">
                <div className="container">
                    <div className="blog-list-container">
                        <div className="row y-gap-30">
                            {initialData.map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.nid}>
                                    <Link href={`/blog/${item.url}`} className="blogCard -type-1">
                                        <div className="blogCard__image ratio ratio-41:30">
                                            <Image
                                                src={item.image || '/assets/modern-img/chitrakoot.jpg'}
                                                alt={item.title}
                                                width={400}
                                                height={300}
                                                sizes="(max-width: 768px) 100vw, 500px"                          
                                                className="img-ratio rounded-12"
                                            />
                                            {Array.isArray(item.blog_heading) && item.blog_heading.length > 0 && (
                                                <div className="blogCard__badge">
                                                    {item.blog_heading[0].title}
                                                </div>
                                            )}
                                        </div>
                                        <div className="blogCard__content mt-15">
                                            {/* <div className="blogCard__info text-14">
                                                    <div className="lh-13">April 06 2023</div>
                                                    <div className="blogCard__line" />
                                                    <div className="lh-13">By Ali Tufan</div>
                                                </div> */}
                                            <Heading
                                                level={3}
                                                text={item.title}
                                                className="blogCard__title blog-list-title  fw-500 mt-10"
                                            />
                                            <p>
                                                {item.blog_intro
                                                    ? item.blog_intro.substring(0, 110) + '...'
                                                    : ''}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))}                            
                        </div>
                    </div>                    
                </div>
            </section>
        </>
    )
}
