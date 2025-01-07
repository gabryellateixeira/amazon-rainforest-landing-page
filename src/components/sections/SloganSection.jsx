"use client";

import Paragraph from "../scroll-opacity/Character";
export default function SloganSection() {
  return (
    <section className="h-screen relative z-20 bg-black grid place-items-center  text-white">
      <Paragraph
        paragraph={
          "Enter the world of the Amazon Rainforest, a world where you can freely explore the most amazing species that exist in the wonders of the forest."
        }
      />
    </section>
  );
}
