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
            <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="container mx-auto tw:px-2 tw:py-20 md:tw:py-20">
                    <div className="grid items-center gap-3 lg:grid-cols-2 lg:gap-14">
                        <div className="order-1">                            
                            <h1 className="mb-2 md:tw-mb-4 font-bold leading-tight text-[#004d91] text-25 md:text-18">
                                {day.day_title}
                            </h1>
                            <div className="mb-6 flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                    <CalendarDays className="h-4 w-4 text-[#eb6605]" />
                                    Day {day.day_number} of {day.total_days}
                                </span>
                                {itinerary.duration && (
                                    <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                        <Clock className="h-4 w-4 text-[#eb6605]" />
                                        {itinerary.duration}
                                    </span>
                                )}
                                {itinerary.cover_city?.length > 0 && (
                                    <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                        <MapPin className="h-4 w-4 text-[#eb6605]" />
                                        {itinerary.cover_city.length} Cities Covered
                                    </span>
                                )}
                            </div>
                            
                            <Link
                                href={`/tour-package/${slug}`}
                                className="inline-flex items-center gap-2 text-sm font-medium text-[#004d91] transition-colors hover:text-[#eb6605]"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                Back to {itinerary.title}
                            </Link>
                        </div>
                        <div className="relative order-2">
                            <div className="relative">
                                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-[#eb6605]/40 lg:block" />
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                    <img
                                        src={itinerary.desktop_banner_image || "/assets/img/hero/1.png"}
                                        alt={itinerary.title || "Tour banner"}
                                        className="hidden h-[420px] w-full object-cover md:block"
                                    />
                                    <img
                                        src={
                                            itinerary.mobile_banner_image ||
                                            itinerary.desktop_banner_image ||
                                            "/assets/img/hero/1.png"
                                        }
                                        alt={itinerary.title || "Tour banner"}
                                        className="h-64 w-full object-cover md:hidden"
                                    />
                                </div>
                            </div>
                            {allDays?.length > 0 && (
                                <div className="tw:mt-5">                                    
                                    <div className="flex flex-wrap gap-2">
                                        {allDays.map((d, index) => {
                                            const dayNum = index + 1;
                                            const isActive = dayNum === day.day_number;
                                            return (
                                                <Link
                                                    key={d.nid || index}
                                                    href={`/tour-package/${slug}/day-${dayNum}`}
                                                    className={`group flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                                                        isActive
                                                            ? "bg-[#eb6605] text-white shadow-md ring-2 ring-orange-200"
                                                            : "bg-white text-[#004d91] ring-1 ring-gray-200 hover:bg-orange-50 hover:text-[#eb6605] hover:ring-[#eb6605]"
                                                    }`}
                                                >                                                    
                                                    Day {dayNum}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
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
                                {allDays?.length > 0 && (
                                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
                                        <div className="flex items-center gap-3 bg-gradient-to-r from-[#004d91] to-[#0a6cc4] px-4 py-3">
                                            <div>
                                                <h3
                                                    className="text-base font-bold text-24 md:text-18 tw:mb-0! text-white"
                                                    style={{
                                                        color: "#fff",
                                                        backgroundImage: "unset",
                                                        WebkitTextFillColor: "unset",
                                                    }}
                                                >
                                                    Day Wise Itinerary
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Days list */}
                                        <ul className="divide-y divide-gray-100">
                                            {allDays.map((d, index) => {
                                                const dayNum = index + 1;
                                                const isActive = dayNum === day.day_number;

                                                return (
                                                    <li key={d.nid || index}>
                                                        <Link
                                                            href={`/tour-package/${slug}/day-${dayNum}`}
                                                            className={`group flex items-center gap-3 px-3 py-3 transition-colors ${
                                                                isActive
                                                                    ? "bg-orange-50/80"
                                                                    : "hover:bg-orange-50/60"
                                                            }`}
                                                        >
                                                            {/* Number badge */}
                                                            <span
                                                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
                                                                    isActive
                                                                        ? "bg-[#eb6605] text-white ring-4 ring-orange-100"
                                                                        : "bg-orange-50 text-[#eb6605] ring-1 ring-orange-200 group-hover:bg-[#eb6605] group-hover:text-white group-hover:ring-orange-100"
                                                                }`}
                                                            >
                                                                {String(dayNum).padStart(2, "0")}
                                                            </span>

                                                            {/* Title */}
                                                            <div className="min-w-0 flex-1">
                                                                <div
                                                                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                                                                        isActive
                                                                            ? "text-[#eb6605]"
                                                                            : "text-[#eb6605]"
                                                                    }`}
                                                                >
                                                                    Day {dayNum}
                                                                </div>
                                                                <div
                                                                    className={`line-clamp-2 text-sm font-semibold leading-5 transition-colors md:text-[15px] md:leading-6 ${
                                                                        isActive
                                                                            ? "text-[#eb6605]"
                                                                            : "text-[#004d91] group-hover:text-[#0a6cc4]"
                                                                    }`}
                                                                >
                                                                    {d.day_title}
                                                                </div>
                                                            </div>

                                                            {/* Arrow / Active dot */}
                                                            {isActive ? (
                                                                <span className="flex h-2 w-2 shrink-0 rounded-full bg-[#eb6605]" />
                                                            ) : (
                                                                <ArrowRight className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#eb6605]" />
                                                            )}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
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