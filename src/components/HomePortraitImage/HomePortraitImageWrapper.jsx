export const dynamic = "force-dynamic";
export const revalidate = 0;
import { HomePortraitImage } from "./HomePortraitImage";
const PORTRAIT_API_URL = 'https://admin.modernworldtravel.com/api/home-portrait-img';
export default async function HomePortraitImageWrapper() {
    try {
        const res = await fetch(PORTRAIT_API_URL, {
            cache: "no-store",
        });
        const response = await res.json();
        if (response?.status === true && Array.isArray(response.data)) {
            return (
                <HomePortraitImage
                    initialData={response.data || []}
                    sectionInfo={response.section_info || {}}
                />
            );
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (error) {
        return (
            <HomePortraitImage
                initialData={[]}
                sectionInfo={{
                    title: "Portrait image",
                    heading: "Travel Stories That Speak From the Heart",
                    sub_heading: "Real experiences shared by travelers who trusted us with their journeys.",
                    description: " "
                }}
            />
        );
    }
}