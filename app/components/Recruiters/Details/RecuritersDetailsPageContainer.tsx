"use client";

import { useState } from "react";
import HeroSectionRecruiterDetails from "./HeroSectionRecruiterDetails";
import RecruiterDetailsContent from "./RecruiterDetailsContent";
import NewsletterSection from "../../Home/NewsletterSection";

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
