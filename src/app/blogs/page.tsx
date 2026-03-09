import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Heroblog from "./components/Heroblog";
import BlogGrid from "./components/BlogGrid";

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
