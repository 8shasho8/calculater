"use client";

import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="calconic-calculator" data-calculatorid="671bf0c4bea8e6002ab28ec4"></div>
      <Script
        id="calconic-script"
        src="https://cdn.calconic.com/static/js/calconic.min.js"
        strategy="lazyOnload"
        data-calconic="true"
      />
    </>
  );
}