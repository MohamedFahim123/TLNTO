"use client";

import { useState } from "react";
import CandidateDetailsHero from "./CandidateDetailsHero";
import AboutCandidateDetails from "./AboutCandidateDetails";
import NewsletterSection from "../../Home/NewsletterSection";
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
