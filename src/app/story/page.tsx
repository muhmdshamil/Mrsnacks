import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryHero from "./components/StoryHero";
import OurStoryContent from "./components/OurStoryContent";
import HowWeMake from "./components/HowWeMake";
import MissionVision from "./components/MissionVision";
import OurReach from "./components/OurReach";
import WhyChoose from "./components/WhyChoose";

export default function StoryPage() {
    return (
        <main className="min-h-screen pt-20 sm:pt-28 bg-[#FEF9F2]">
            <Header />

            {/* Story Hero Section */}
            <StoryHero />

            {/* Our Story Content Section (with features) */}
            <OurStoryContent />

            {/* How We Make Our Snacks Section */}
            <HowWeMake />

            {/* Mission & Vision Section */}
            <MissionVision />

            {/* Our Reach Section */}
            <OurReach />

            {/* Why Choose & Final CTA Section */}
            <WhyChoose />

            <Footer />
        </main>
    );
}


