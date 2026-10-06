export const dynamic = 'force-dynamic';
import { redirect } from "next/navigation";
export const revalidate = 0;
import React from 'react';
import CityPage from './CityPage';
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
async function getCityDetails(slug) {
    try {
        const { data: response } = await axios.get(
            `https://admin.modernworldtravel.com/api/city/${slug}`,
            {
                cache: 'no-store',
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching city details:", error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const data = await getCityDetails(slug);
        if (!data?.status || !data.city) {
            return {
                title: 'City not found - Modern World Travel',
                description: 'City details not found',
                alternates: {
                    canonical: `${baseUrl}/city/${slug}`,
                },
            };
        }

        return {
            title: data.city.meta_title || `${data.city.title || "City"} - Modern World Travel`,
            description: data.city.meta_description ||
                data.city.city_details?.substring(0, 160) ||
                `Explore ${data.city.title || "this city"} with Modern World Travel`,
            alternates: {
                canonical: `${baseUrl}/city/${slug}`,
            },
        };
    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Explore city details and packages',
            alternates: {
                canonical: `${baseUrl}/city/${slug}`,
            },
        };
    }
}

export default async function Page({ params }) {
    const { slug } = await params;
    const placeData = await getCityDetails(slug);
    if (!placeData?.status || !placeData.city) {
        redirect("/");
    }
    return <CityPage initialData={placeData} slug={slug} />;
}