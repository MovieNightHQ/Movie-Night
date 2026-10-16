import { unstable_cache } from "next/cache";
import { supabaseClient } from "../supabase";

// Cached so every page render (including bot crawls) doesn't hit Supabase.
const getAppConfig = unstable_cache(
  async () => {
    const { data } = await supabaseClient
      .from("app_config")
      .select("force_stop,force_message,platform")
      .maybeSingle();
    return data;
  },
  ["app-config"],
  { revalidate: 60 }
);

export default async function AppConfig() {
  try {
    const data = await getAppConfig();

    if (
      data?.force_stop &&
      (data?.platform === "website" || data?.platform === "all")
    ) {
      if (data.force_message) {
        return data.force_message;
      }
    }
  } catch (error) {
    console.error("Error checking maintenance status in layout:", error);
  }
}
