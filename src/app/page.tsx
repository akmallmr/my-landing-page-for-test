'use client';

import { Gap } from '@/components';
import SectionInfo from './(section)/SectionInfo';
import SectionProductList from './(section)/SectionProductList';
import SectionPartner from './(section)/SectionPartner';

export default function Home() {
  return (
    <>
      <SectionInfo />
      <Gap height={75} />
      <SectionProductList />
      <Gap height={75} />
      <SectionPartner />
      <Gap height={125} />
    </>
  );
}
