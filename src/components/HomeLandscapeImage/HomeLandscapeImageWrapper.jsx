export const dynamic = "force-dynamic";
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { HomeLandscapeImage } from "./HomeLandscapeImage";
const LANDSCAPE_API_URL = 'https://admin.modernworldtravel.com/api/home-landscape-img';
export default async function HomeLandscapeImageWrapper() {
    const queryClient = new QueryClient();
    try {
        const response = await queryClient.fetchQuery({
            queryKey: ["landscape-images"],
            queryFn: async () => {
                const res = await axios.get(LANDSCAPE_API_URL);
                return res.data;
            },
            staleTime: 0,
        });
        if (response?.status === true && Array.isArray(response.data)) {
            return (
                <HomeLandscapeImage
                    initialData={response.data || []}
                    sectionInfo={response.section_info || {}}                   
                />
            );
        } else {
            throw new Error("Invalid API response format");
        }

    } catch (error) {
        return (
            <HomeLandscapeImage
                initialData={[]}
                sectionInfo={{
                    title: "Landscape image",
                    heading: "Journeys Our Travelers Will Never Forget",
                    sub_heading: "Memories created, moments cherished, and trips made truly special.",
                    description: " "
                }}
            />
        );
    }
}