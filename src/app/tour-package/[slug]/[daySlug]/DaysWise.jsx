"use client";
import Link from "next/link";
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
    Building2,
} from "lucide-react";

export default function DaysWise({ day, itinerary, slug, allDays }) {
    return (
        <>
            <section className="relative">
                <div className="relative h-[280px] w-full overflow-hidden md:h-[400px]">
                    <img
                        src={itinerary.desktop_banner_image || "/assets/img/hero/1.png"}
                        alt={itinerary.title || "Tour banner"}
                        className="hidden h-full w-full object-cover md:block"
                    />
                    <img
                        src={
                            itinerary.mobile_banner_image ||
                            itinerary.desktop_banner_image ||
                            "/assets/img/hero/1.png"
                        }
                        alt={itinerary.title || "Tour banner"}
                        className="h-full w-full object-cover md:hidden"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                    <div className="absolute inset-0 flex flex-col justify-end">
                        <div className="container mx-auto max-w-6xl px-4 pb-6 md:pb-10">
                            <Link
                                href={`/tour-package/${slug}`}
                                className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25 md:text-sm"
                            >
                                <ChevronLeft className="h-3.5 w-3.5" />
                                Back to {itinerary.title}
                            </Link>
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eb6605] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                                    <Sparkles className="h-3 w-3" />
                                    {day.day}
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                                    <CalendarDays className="h-3 w-3" />
                                    Day {day.day_number} of {day.total_days}
                                </span>
                                {itinerary.duration && (
                                    <span className="hidden items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md sm:inline-flex">
                                        <Clock className="h-3 w-3" />
                                        {itinerary.duration}
                                    </span>
                                )}
                            </div>
                            <h1
                                className="leading-tight text-white drop-shadow-lg text-30 md:text-24"
                                style={{
                                    color: "#fff",
                                    backgroundImage: "unset",
                                    WebkitTextFillColor: "unset",
                                }}
                            >
                                {day.day_title}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container px-3 md:px-4 py-8 md:py-14">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                        <div className="space-y-6">
                            {day.day_description && (
                                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
                                    <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-white px-3 py-3">
                                        <div>
                                            <h2 className="text-base font-bold text-[#004d91] text-3xl md:text-4xl font-bold text-30 md:text-24">
                                                Day Overview
                                            </h2>
                                            <p className="text-xs text-gray-500">
                                                What to expect today
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-3 md:p-4">
                                        <div
                                            className="text-sm leading-relaxed text-gray-600 md:text-base [&_p]:mb-3 [&_p:last-child]:mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html: day.day_description,
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                            {day.destination?.length > 0 && (
                                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
                                    <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white px-3 py-3">                                        
                                        <div>                                           
                                            <h3 className="text-base font-bold text-[#004d91] text-3xl md:text-4xl font-bold text-30 md:text-24">
                                                Places You&apos;ll Visit Today
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                {day.destination.length} destination
                                                {day.destination.length > 1 ? "s" : ""} covered
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 p-3 md:p-4">
                                        {day.destination.map((dest) => (
                                            <Link
                                                key={dest.nid}
                                                href={`/destination/${dest.city_url}/${dest.destination_url}`}
                                                className="group block overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                            >
                                                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                                    {dest.destination_image ? (
                                                        <img
                                                            src={dest.destination_image}
                                                            alt={dest.title || "destination"}
                                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center bg-gray-100">
                                                            <MapPin className="h-8 w-8 text-gray-300" />
                                                        </div>
                                                    )}

                                                    {/* Visit badge — always visible */}
                                                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#004d91] shadow-sm backdrop-blur">
                                                        <MapPin className="h-3 w-3 text-[#eb6605]" />
                                                        Visit
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between gap-2 border-t border-gray-100 bg-white px-4 py-3">                                                    
                                                   <div className="text-20 md:text-18 leading-snug text-[#004d91]">
                                                        {dest.title}
                                                    </div>
                                                    <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-[#eb6605] transition-all group-hover:gap-2">
                                                        <ArrowRight className="h-3.5 w-3.5" />
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {itinerary.inclusions && (
                                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
                                    <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-green-50 to-white px-3 py-3">                                         
                                        <h3 className="text-base font-bold text-[#004d91] text-3xl md:text-4xl font-bold text-30 md:text-24">
                                            Inclusions
                                        </h3>
                                    </div>
                                    <div
                                        className="p-3 md:p-4 text-sm leading-relaxed text-gray-600 md:text-base [&_ul]:space-y-2 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:before:mt-1.5 [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:shrink-0 [&_li]:before:rounded-full [&_li]:before:bg-green-500"
                                        dangerouslySetInnerHTML={{ __html: itinerary.inclusions }}
                                    />
                                </div>
                            )}
                            {itinerary.exclusions && (
                                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
                                    <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-r from-red-50 to-white px-3 py-3">
                                        <h3 className="text-[#004d91] text-30 md:text-24">
                                            Exclusions
                                        </h3>
                                    </div>
                                    <div
                                        className="p-3 md:p-4 text-sm leading-relaxed text-gray-600 md:text-base [&_ul]:space-y-2 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:before:mt-1.5 [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:shrink-0 [&_li]:before:rounded-full [&_li]:before:bg-red-500"
                                        dangerouslySetInnerHTML={{ __html: itinerary.exclusions }}
                                    />
                                </div>
                            )}
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {day.prev_day ? (
                                    <Link
                                        href={`/tour-package/${slug}/day-${day.prev_day}`}
                                        className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-x-1 hover:border-[#eb6605] hover:shadow-md"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#eb6605] ring-1 ring-orange-200 transition-all group-hover:bg-[#eb6605] group-hover:text-white">
                                            <ArrowLeft className="h-5 w-5" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#eb6605]!">
                                                Previous
                                            </p>
                                            <p className="truncate text-sm font-bold text-[#004d91] group-hover:text-[#eb6605] md:text-base">
                                                Day {day.prev_day}
                                                {allDays?.[day.prev_day - 1]?.day_title
                                                    ? ` - ${allDays[
                                                        day.prev_day - 1
                                                    ].day_title
                                                        .replace(/^Day \d+ - /, "")
                                                        .slice(0, 40)}...`
                                                    : ""}
                                            </p>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="hidden sm:block" />
                                )}
                                {day.next_day ? (
                                    <Link
                                        href={`/tour-package/${slug}/day-${day.next_day}`}
                                        className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:translate-x-1 hover:border-[#eb6605] hover:shadow-md sm:flex-row-reverse sm:text-right"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#eb6605] ring-1 ring-orange-200 transition-all group-hover:bg-[#eb6605] group-hover:text-white">
                                            <ArrowRight className="h-5 w-5" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#eb6605]!">
                                                Next
                                            </p>
                                            <p className="truncate text-sm font-bold text-[#004d91] group-hover:text-[#eb6605] md:text-base">
                                                Day {day.next_day}
                                                {allDays?.[day.next_day - 1]?.day_title
                                                    ? ` - ${allDays[
                                                        day.next_day - 1
                                                    ].day_title
                                                        .replace(/^Day \d+ - /, "")
                                                        .slice(0, 40)}...`
                                                    : ""}
                                            </p>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="hidden sm:block" />
                                )}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="sticky top-20 space-y-4">
                                {itinerary.cover_city?.length > 0 && (
                                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
                                        <div className="flex items-center gap-2 bg-gradient-to-r from-[#eb6605] to-[#ff8c42] px-3 py-3">
                                            <h4 className="text-26 md:text-20 text-white"
                                            style={{
                                                color: "#fff",
                                                backgroundImage: "unset",
                                                WebkitTextFillColor: "unset",
                                            }}>
                                                Covered Cities
                                            </h4>                                            
                                        </div>
                                        <div className="divide-y divide-gray-100">
                                            {itinerary.cover_city.map((city) => (
                                                <Link
                                                    key={city.nid}
                                                    href={`/city/${city.city_url}`}
                                                    className="group flex items-center gap-3 p-3 transition-colors hover:bg-orange-50/60"
                                                >
                                                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-100">
                                                        {city.city_img_path ? (
                                                            <img
                                                                src={city.city_img_path}
                                                                alt={city.title || "city"}
                                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                        ) : (
                                                            <div className="flex h-full w-full items-center justify-center bg-gray-100">
                                                                <Building2 className="h-4 w-4 text-gray-300" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="truncate font-bold text-22 md:text-18 text-[#004d91] group-hover:text-[#eb6605]">
                                                            {city.title}
                                                        </div>
                                                        <p className="truncate text-xs text-gray-500">
                                                            {city.city_details?.slice(0, 40)}...
                                                        </p>
                                                    </div>

                                                    <ArrowRight className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#eb6605]" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <Link
                                    href={`/tour-package/${slug}`}
                                    className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-[#004d91]! shadow-sm transition-all hover:border-[#eb6605] hover:text-[#eb6605]"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                    View Full Package
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}