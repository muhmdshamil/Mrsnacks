import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Products from "@/components/Products";

export const getStoryblokApi = storyblokInit({
    // accessToken: process.env.STORYBLOK_TOKEN || "891nvEKD0scXWZkXMg0myQtt",
    accessToken: "2WMCe689teideD4IppCiTQtt",
    use: [apiPlugin],
    components: {
        Products: Products,
    },
});
