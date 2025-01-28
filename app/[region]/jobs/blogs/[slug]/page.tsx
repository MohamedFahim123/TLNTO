import BlogDetailsContent from "@/app/components/Blogs/BlogDetails/BlogDetailsContent";
import BlogDetailsHero from "@/app/components/Blogs/BlogDetails/BlogDetailsHero";
import BlogDetailsText from "@/app/components/Blogs/BlogDetails/BlogDetailsText";
import NewsletterSection from "@/app/components/Home/NewsletterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Blog Details",
  description: "Blog Details on Tlnto, our Job Portal",
};
export default function page() {
  return (
    <>
      <BlogDetailsHero />
      <BlogDetailsContent />
      <BlogDetailsText />
      <NewsletterSection />
    </>
  );
}
