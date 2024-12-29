"use client";

import { Gap } from "@/components";
import SectionInfo from "./(section)/SectionInfo";
import SectionProductList from "./(section)/SectionProductList";

export default function Home() {
  return (
    <>
      <SectionInfo />
      <Gap height={25} />
      <SectionProductList />
    </>
  );
}
