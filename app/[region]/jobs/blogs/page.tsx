import BlogsHeroSection from "@/app/components/Blogs/BlogsHeroSection";
import BlogsLatest from "@/app/components/Blogs/BlogsLatest";
import MainBlogsSection from "@/app/components/Blogs/MainBlogsSection";
import NewsletterSection from "@/app/components/Home/NewsletterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Blogs",
  description: "Blogs on Tlnto, our Job Portal",
};

export default function page() {
  return (
    <>
      <BlogsHeroSection />
      <MainBlogsSection />
      <BlogsLatest />
      <NewsletterSection />
    </>
  );
}
