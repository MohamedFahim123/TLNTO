"use client";

import { useState } from "react";
import NewsletterSection from "../../Home/NewsletterSection";
import HeroSectionRecruiterDetails from "./HeroSectionRecruiterDetails";
import RecruiterDetailsContent from "./RecruiterDetailsContent";

export default function RecuritersDetailsPageContainer() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleOnClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <HeroSectionRecruiterDetails handleOnClick={handleOnClick} />
      <RecruiterDetailsContent activeIndex={activeIndex} />
      <NewsletterSection />
    </>
  );
}
