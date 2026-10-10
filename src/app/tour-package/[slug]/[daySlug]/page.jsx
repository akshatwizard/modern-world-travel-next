import { notFound } from "next/navigation";
import DaysWise from "./DaysWise";

const API_BASE = "https://admin.modernworldtravel.com";

/* ─── Fetch full day-wise data ─────────────────── */
async function getDayWiseData(itinerarySlug, daySlug) {
    try {
        const res = await fetch(
            `${API_BASE}/api/itinerary/day-wise-detail/${itinerarySlug}/${daySlug}`,
            { cache: "no-store" }
        );
        if (!res.ok) return null;
        const json = await res.json();
        return json?.data?.status ? json.data : null;
    } catch (err) {
        console.error("API fetch error:", err);
        return null;
    }
}

/* ─── Metadata ─────────────────────────────────── */
export async function generateMetadata({ params }) {
    const { slug, daySlug } = await params;
    const data = await getDayWiseData(slug, daySlug);
    if (!data) return { title: "Day not found" };

    const dayNumber = parseInt(daySlug.replace("day-", ""), 10);
    const day = data.for_daywise?.[dayNumber - 1];
    if (!day) return { title: "Day not found" };

    return {
        title: `${day.day_title} | ${data.title}`,
        description:
            day.day_description?.replace(/<[^>]*>/g, "").slice(0, 160) ||
            data.meta_description,
        alternates: {
            canonical: `/tour-package/${slug}/${daySlug}`,
        },
    };
}

/* ─── Page ─────────────────────────────────────── */
export default async function DayWiseDetailPage({ params }) {
    const { slug, daySlug } = await params;

    const match = daySlug?.match(/^day-(\d+)$/);
    if (!match) notFound();

    const dayNumber = parseInt(match[1], 10);
    if (isNaN(dayNumber) || dayNumber < 1) notFound();

    const data = await getDayWiseData(slug, daySlug);
    if (!data) notFound();

    const totalDays = data.for_daywise?.length || 0;
    const currentDay = data.for_daywise?.[dayNumber - 1];
    if (!currentDay || dayNumber > totalDays) notFound();

    // Full itinerary object passed to client
    const itinerary = {
        nid: data.nid,
        title: data.title,
        alias: slug,
        duration: data.duration,
        desktop_banner_image: data.desktop_banner_image,
        mobile_banner_image: data.mobile_banner_image,
        highlights: data.highlights,
        inclusions: data.inclusions,
        exclusions: data.exclusions,
        itinerary_description: data.itinerary_description,
        cover_city: data.cover_city || [],
        for_daywise: data.for_daywise || [],
    };

    const day = {
        ...currentDay,
        day_number: dayNumber,
        total_days: totalDays,
        prev_day: dayNumber > 1 ? dayNumber - 1 : null,
        next_day: dayNumber < totalDays ? dayNumber + 1 : null,
    };

    return (
        <DaysWise
            day={day}
            itinerary={itinerary}
            slug={slug}
            allDays={data.for_daywise || []}
        />
    );
}