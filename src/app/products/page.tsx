import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getStoryblokApi } from "@/lib/storyblok";
import ProductList from "@/components/ProductList";
import ProductHero from "@/components/ProductHero";

export default async function ProductsPage() {
    const storyblokApi = getStoryblokApi();
    let story = null;

    try {
        // 1. Try 'products' slug
        const { data } = await storyblokApi.get(`cdn/stories/products`, {
            version: "draft",
        });
        story = data ? data.story : null;
    } catch (error) {
        // Continue to next fallback
    }

    if (!story) {
        try {
            // 2. Try finding any story with 'Products' component
            const { data } = await storyblokApi.get("cdn/stories", {
                version: "draft",
                content_type: "Products",
            });
            if (data.stories && data.stories.length > 0) {
                story = data.stories[0];
            }
        } catch (err) { }
    }

    if (!story) {
        try {
            // 3. Fallback to home if products block is there
            const { data } = await storyblokApi.get(`cdn/stories/home`, {
                version: "draft",
            });
            story = data ? data.story : null;
        } catch (err) { }
    }


    return (
        <main className="min-h-screen pt-28 bg-[#FEF9F2]">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
                <ProductHero />
                <div className="flex flex-col items-center text-center mt-8 sm:mt-16 mb-6 sm:mb-12">
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-[#EAB308]/30 rounded-full bg-white mb-4 sm:mb-6 shadow-sm">
                        <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#F39200] animate-pulse"></span>
                        <span className="text-[#F39200] font-bold text-xs sm:text-sm tracking-wide uppercase">Handcrafted Selection</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.1] tracking-tight mb-4 sm:mb-6">
                        Our Snack <br className="sm:hidden" />
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#DF3920_0%,#F39200_100%)]">
                            Collection
                        </span>
                    </h1>

                    <p className="text-sm sm:text-lg lg:text-xl text-zinc-500 max-w-2xl leading-relaxed font-medium px-4">
                        Explore all our crispy delights, from traditional banana chips
                        to fiery mixtures, made with recipes passed down through generations.
                    </p>

                    <div className="w-16 sm:w-24 h-2 sm:h-1.5 bg-[#F39200] rounded-full mt-6 sm:mt-8 opacity-20"></div>
                </div>
                <ProductList blok={story?.content} />
            </div>
            <Footer />
        </main>
    );
}
