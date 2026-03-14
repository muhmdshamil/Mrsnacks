import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";

export const dynamic = "force-dynamic";

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  const version = "draft";
  let story = null;

  try {
    // 1. Try 'products' slug
    const { data } = await storyblokApi.get(`cdn/stories/products`, {
      version: version,
    });
    story = data ? data.story : null;
  } catch (err) {
    // Silently continue to fallback
  }

  if (!story) {
    try {
      // 2. Try 'home' slug
      const { data } = await storyblokApi.get(`cdn/stories/home`, {
        version: version,
      });
      story = data ? data.story : null;
    } catch (err) { }
  }

  if (!story) {
    try {
      // 3. Try finding any story with 'Products' component
      const { data } = await storyblokApi.get("cdn/stories", {
        version: version,
        content_type: "Products",
      });
      if (data.stories && data.stories.length > 0) {
        story = data.stories[0];
      }
    } catch (err) { }
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <div id="products">
        {story ? (
          <StoryblokComponent blok={story.content} limit={3} />
        ) : (
          <Products limit={3} />
        )}
      </div>
      <Footer />
    </main>
  );
}
