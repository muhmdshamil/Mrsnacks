import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { staticProducts } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import { getStoryblokApi } from "@/lib/storyblok";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = staticProducts.find((p) => p._uid === id);

    // For Storyblok products, we'd need to fetch metadata here too
    // For now focus on static
    if (product) {
        return {
            title: `${product.title} | Mrsnackz`,
            description: product.description,
        };
    }
    return {
        title: "Product Not Found | Mrsnackz",
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    let product: any = staticProducts.find((p) => p._uid === id);

    if (!product) {
        // Try fetching from Storyblok
        const storyblokApi = getStoryblokApi();
        try {
            // This is a simplified fetch. In a real app, you might search for the product in a list
            // or fetch by slug if _uid is not available in the URL
            const { data } = await storyblokApi.get("cdn/stories", {
                version: "draft",
                // Assuming we can find it somehow. For now, let's just handle static.
            });

            // Search in storyblok products if they have the same ID format
            // ... logic to find product in Storyblok response ...
        } catch (error) {
            console.error("Error fetching Storyblok product:", error);
        }
    }

    if (!product) {
        return (
            <main className="min-h-screen pt-28 bg-[#FEF9F2] flex flex-col items-center justify-center">
                <Header />
                <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                <p className="text-zinc-500 mb-8">We couldn't find the snack you're looking for.</p>
                <a href="/products" className="text-[#F39200] font-bold hover:underline">Back to products</a>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-28 bg-[#FEF9F2]">
            <Header />
            <ProductDetail product={product} />
            <Footer />
        </main>
    );
}
