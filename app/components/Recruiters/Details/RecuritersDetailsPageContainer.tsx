"use client";

import { RecuiterInterface } from "@/app/[region]/jobs/recruiters/page";
import { useState } from "react";
import HeroSectionRecruiterDetails from "./HeroSectionRecruiterDetails";
import RecruiterDetailsContent from "./RecruiterDetailsContent";

export default function RecuritersDetailsPageContainer({
  recruiterDetailsData,
}: {
  recruiterDetailsData: RecuiterInterface;
}) {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleOnClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <HeroSectionRecruiterDetails
        recruiterDetailsData={recruiterDetailsData}
        activeIndex={activeIndex}
        handleOnClick={handleOnClick}
      />
      <RecruiterDetailsContent
        recruiterDetailsData={recruiterDetailsData}
        activeIndex={activeIndex}
      />
    </>
  );
}
