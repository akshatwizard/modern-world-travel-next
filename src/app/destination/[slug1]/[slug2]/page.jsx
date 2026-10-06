export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from 'react';
import DestinationDetailsPage from './DestinationDetailsPage';
import { redirect } from 'next/navigation';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
async function getDestinationDetails(slug1, slug2) {
    try {
        const res = await fetch(
            `https://admin.modernworldtravel.com/api/destination/${slug1}/${slug2}`,
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
        console.error("Error fetching destination details:", error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug1, slug2 } = await params;
    try {
        const data = await getDestinationDetails(slug1, slug2);
        if (!data?.status) {
            return {
                title: 'Destination not found - Modern World Travel',
                description: 'Destination details not found',
                alternates: {
                    canonical: `${baseUrl}/destination/${slug1}/${slug2}`,
                },  
            };
        }
        return {
            title:
                data.meta_title ||
                `${data.title || decodeURIComponent(slug2)} - Modern World Travel`,
            description:
                data.meta_desc ||
                `Explore ${data.title || decodeURIComponent(slug2)} with Modern World Travel`,
            alternates: {
                canonical: `${baseUrl}/destination/${slug1}/${slug2}`,
            },
        };
    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Explore destinations',
            alternates: {
                canonical: `${baseUrl}/destination/${slug1}/${slug2}`,
            },
        };
    }
}

export default async function Page({ params }) {
    const { slug1, slug2 } = await params;
    const placeData = await getDestinationDetails(slug1, slug2);
    if (!placeData?.status) {
        redirect("/");
    }
    return (
        <DestinationDetailsPage
            initialData={placeData}
            slug1={slug1}
            slug2={slug2}
        />
    );
}
