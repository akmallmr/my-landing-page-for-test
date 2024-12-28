import {
  ILBorcelle,
  ILForkSpoon,
  ILOrganLeaf,
  ILTeamUp,
  ILVegan,
  ILOrganic,
} from "@/assets";
import { Gap } from "@/components";
import React from "react";

const SectionInfo = () => {
  return (
    <div className="m-2 py-5 px-24 bg-rose-500 rounded-md shadow-xl">
      <div className="grid tablet:grid-cols-2 grid-cols-1 gap-5">
        <div className="py-20 flex flex-row justify-center">
          <ILTeamUp width={400} height={400} />
        </div>
        <div className="py-20">
          <h1 className="text-4xl font-bold text-white">CartX</h1>
          <p className="text-white">
            {`Shop smarter, not harder—discover CartX's exclusive collection.`}
          </p>
          <Gap height={50} />
          <p className="text-white text-justify">
            At CartX, we believe in quality, style, and affordability. Our
            carefully curated collection of CartX ensures you find something for
            every occasion. With easy returns, secure payments, and fast
            shipping, we make online shopping a breeze. Explore our latest
            arrivals and experience shopping the way it should be.
          </p>
          <Gap height={75} />
          <div>
            <h1 className="text-xl text-white">Our official partner:</h1>
            <div className="flex flex-row align-middle">
              <ILVegan height={75} width={75} />
              <ILBorcelle height={75} width={75} />
              <ILForkSpoon height={75} width={75} />
              <ILOrganLeaf height={75} width={75} />
              <ILOrganic height={75} width={75} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
