export const dynamic = 'force-dynamic';
import { redirect } from 'next/navigation';
export const revalidate = 0;
import React from 'react';
import ExperienceDetailsPage from './ExperienceDetailsPage';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
async function getExperienceDetails(slug) {
    try {
        const res = await fetch(
            `https://admin.modernworldtravel.com/api/experience/${slug}`,
            {
                cache: 'no-store',
            }
        );
        
        if (!res.ok) {
            return null;
        }
        const response = await res.json();
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching Experience details:", error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const data = await getExperienceDetails(slug);
        if (!data?.status) {
            return {
                title: 'Experience not found - Modern World Travel',
                description: 'Experience details not found',
                alternates: {
                    canonical: `${baseUrl}/experience/${slug}`,
                },
            };
        }
        return {
            title:
                data.meta_title ||
                `${data.title}`,
            description:
                data.meta_description ||
                `Explore ${data.title || "this Experience"} with Modern World Travel`,
                alternates: {
                    canonical: `${baseUrl}/experience/${slug}`,
                },
        };
    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Explore experiences',
            alternates: {
                canonical: `${baseUrl}/experience/${slug}`,
            },
        };
    }
}

export default async function Page({ params }) {
    const { slug } = await params;
    const placeData = await getExperienceDetails(slug);
    if (!placeData?.status) {
        redirect("/");
    }
    return (
        <ExperienceDetailsPage
            initialData={placeData}
            slug={slug}
        />
    );
}
