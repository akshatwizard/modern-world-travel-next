export const dynamic = 'force-dynamic';
import { redirect } from "next/navigation";
export const revalidate = 0;
import React from 'react';
import TourLocationPage from './TourLocationPage';
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
async function getTourLocationDetails(slug) {
    try {
        const { data: response } = await axios.get(
            `https://admin.modernworldtravel.com/api/tour-location/${slug}`,
            {
                cache: 'no-store',
            }
        );
        return response.data;

    } catch (error) {
        console.error("Error fetching tour location details:", error);
        return null;
    }
}
export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const data = await getTourLocationDetails(slug);        
        if (!data?.status) {
            return {
                title: 'Tour Location not found - Modern World Travel',
                description: 'Tour location details not found',
                alternates: {
                    canonical: `${baseUrl}/tours-location/${slug}`,
                },
            };
        }
        return {
            title:
                data.meta_title ||
                `${data.title || "Tour Location"} - Modern World Travel`,

            description:
                data.meta_description ||
                `Explore ${data.title || "this tour location"} with Modern World Travel`,
            alternates: {
                canonical: `${baseUrl}/tours-location/${slug}`,
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
    const placeData = await getTourLocationDetails(slug);
    if (!placeData?.status) {
        redirect("/");
    }
    return <TourLocationPage initialData={placeData} slug={slug} />;
}
