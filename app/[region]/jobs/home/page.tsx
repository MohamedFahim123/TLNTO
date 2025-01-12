import Blogs from '@/app/components/Home/Blogs';
import CategoriesSection from '@/app/components/Home/CategoriesSection';
import ExploreOpportionities from '@/app/components/Home/ExploreOpportionities';
import HeroSection from '@/app/components/Home/HeroSection';
import HomeOverViewSection from '@/app/components/Home/HomeOverViewSection';
import JobOfTheDaySection from '@/app/components/Home/JobOfTheDaySection';
import LocationJobs from '@/app/components/Home/LocationJobs';
import NewsletterSection from '@/app/components/Home/NewsletterSection';
import OurNums from '@/app/components/Home/OurNums';
import TopRecruiters from '@/app/components/Home/TopRecruiters';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SkillNi',
    description: 'Your Favourite Job Portal.',
};

export default function HomePage() {
    return (
        <>
            <div className="bg-homepage1" />
            <HeroSection />
            <div className="mt-100" />
            <CategoriesSection />
            <ExploreOpportionities />
            <JobOfTheDaySection />
            <HomeOverViewSection />
            <OurNums />
            <TopRecruiters />
            <LocationJobs />
            <Blogs />
            <NewsletterSection />
        </>
    );
};