import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { HomeTourPackage } from "./HomeTourPackage";
export default async function HomeTourPackageWrapper() {
    const queryClient = new QueryClient();
    try {
        const response = await queryClient.fetchQuery({
            queryKey: ["home-tour-package-in-varanasi"],
            queryFn: async () => {
                const res = await axios.get(
                    "https://admin.modernworldtravel.com/api/home-tour-package-in-varanasi"
                );
                return res.data;
            },
        });
        return (
            <HomeTourPackage
                initialData={response}
            />
        );
    } catch (error) {
        console.error("Failed to fetch tour packages:", error);
        return (
            <HomeTourPackage
                initialData={{
                    status: false,
                    title: "",
                    details: "",
                    data: []
                }}
            />
        );
    }
}
