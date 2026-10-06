
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from 'react';
import { redirect } from 'next/navigation';
import BlogDetailsPage from './BlogDetailsPage';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

async function getBlogDetails(slug) {
    try {
        const res = await fetch(
            `https://admin.modernworldtravel.com/api/blog/${slug}`,
            {
                cache: 'no-store',
            }
        );
        if (!res.ok) {
            return null;
        }
        const response = await res.json();
        return response;

    } catch (error) {
        console.error('Error fetching blog details:', error);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const response = await getBlogDetails(slug);
        if (!response?.status || !response?.data) {
            return {
                title: 'Blog not found - Modern World Travel',
                description: 'Blog details not found',
                alternates: {
                    canonical: `${baseUrl}/blog/${slug}`,
                },
            };
        }
        const blog = response.data;
        return {
            title:
                blog.meta_title ||
                blog.title ||
                'Blog - Modern World Travel | Latest Travel Insights and Stories',

            description:
                blog.meta_description ||
                'Explore the Modern World Travel Blog for the latest travel insights, tips, and stories. Stay updated on domestic and international travel trends, destination guides, and expert advice.',
            alternates: {
                canonical: `${baseUrl}/blog/${slug}`,
            },
        };

    } catch (error) {
        return {
            title: 'Modern World Travel',
            description: 'Modern World Travel Blog',
            alternates: {
                canonical: `${baseUrl}/blog/${slug}`,
            },
        };
    }
}

export default async function Page({ params }) {
    const { slug } = await params;
    const response = await getBlogDetails(slug);
    if (!response?.status || !response?.data) {
        redirect("/");
    }
    return (
        <BlogDetailsPage
            initialData={response.data}
            slug={slug}
        />
    );
}
