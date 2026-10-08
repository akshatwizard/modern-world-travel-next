export const dynamic = "force-dynamic";
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Header } from "./Header";
export default async function HeaderWrapper() {
  const queryClient = new QueryClient();
  try {
    const menuList = await queryClient.fetchQuery({
      queryKey: ["header-menu"],
      queryFn: async () => {
        const res = await axios.get(
          "https://admin.modernworldtravel.com/api/header-menu"
        );
        return res.data?.data;
      },
      staleTime: 0,
    });
    return <Header menuList={menuList} />;
  } catch (error) {
    console.error("Failed to fetch header menu:", error);
    return <Header menuList={[]} />;
  }
}
