import Link from "next/link";
import React, { useEffect, useState } from "react";

function BackToTop() {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    if (window.scrollY > 100 && !hasScrolled) {
      setHasScrolled(true);
    } else if (window.scrollY < 100) {
      setHasScrolled(false);
    }
  };

  return (
    <>
      {hasScrolled && (
        <Link
          id="scrollUp"
          href="#top"
          style={{ position: "fixed", zIndex: 2147483647 }}
        >
          <i className="fi-rr-arrow-small-up" />
        </Link>
      )}
    </>
  );
}
export default React.memo(BackToTop);
