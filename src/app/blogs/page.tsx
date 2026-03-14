import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heroblog from "./components/Heroblog";
import BlogGrid from "./components/BlogGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "From Our Kitchen - Blogs",
    description: "Read about Kerala's rich culinary traditions, snacking culture, and the secrets behind our crispy artisan treats.",
    openGraph: {
        title: "Mrsnackz Blog - Kerala Food Culture & Stories",
        description: "Stories of spice, tradition, and the perfect crunch from the heart of Kerala.",
    }
};

export default function BlogsPage() {
    return (
        <main className="min-h-screen pt-20 sm:pt-28 bg-[#FEF9F2]">
            <Header />

            {/* Featured Blog Hero Section */}
            <Heroblog />

            {/* More from Our Kitchen Blog Grid */}
            <BlogGrid />

            <Footer />
        </main>
    );
}
