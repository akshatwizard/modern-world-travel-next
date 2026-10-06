export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from 'react';
import { redirect } from 'next/navigation';
import ItineraryOrTourPackagePage from './ItineraryOrTourPackagePage';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
async function getItineraryDetails(slug) {
    try {
        const res = await fetch(
            `https://admin.modernworldtravel.com/api/itinerary/${slug}`,
            {
                cache: 'no-store',
            }
        );
        if (!res.ok) {
            return null;
        }
        const response = await res.json();
        return response.data;
    } catch (error) {
        console.error("Error fetching Itinerary details:", error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const data = await getItineraryDetails(slug);
        if (!data?.status) {
            return {
                title: 'Itinerary not found - Modern World Travel',
                description: 'Itinerary details not found',
                alternates: {
                    canonical: `${baseUrl}/tour-package/${slug}`,
                },
            };
        }
        return {
            title:
                data.meta_title ||
                `${data.title || "Itinerary"} - Modern World Travel`,

            description:
                data.meta_description ||
                `Explore ${data.title || "this Itinerary"} with Modern World Travel`,
                alternates: {
                    canonical: `${baseUrl}/tour-package/${slug}`,
                },
        };

    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Explore tour packages',
        };
    }
}

export default async function Page({ params }) {
    const { slug } = await params;
    const placeData = await getItineraryDetails(slug);
    if (!placeData?.status) {
        redirect("/");
    }
    return (
        <ItineraryOrTourPackagePage
            initialData={placeData}
            slug={slug}
        />
    );
}
