import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Products from "@/components/Products";

export const getStoryblokApi = storyblokInit({
    accessToken: "891nvEKD0scXWZkXMg0myQtt",
    use: [apiPlugin],
    components: {
        Products: Products,
    },
});
