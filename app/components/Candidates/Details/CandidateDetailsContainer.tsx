"use client";

import { useState } from "react";
import NewsletterSection from "../../Home/NewsletterSection";
import AboutCandidateDetails from "./AboutCandidateDetails";
import CandidateDetailsHero from "./CandidateDetailsHero";
export default function CandidateDetailsContainer() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleOnClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <CandidateDetailsHero handleOnClick={handleOnClick} />
      <AboutCandidateDetails activeIndex={activeIndex} />
      <NewsletterSection />
    </>
  );
}
