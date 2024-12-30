import { ILBorcelle, ILForkSpoon, ILOrganic, ILOrganLeaf, ILVegan } from '@/assets';
import React from 'react';

const SectionPartner = () => {
  return (
    <div>
      <h1 className='text-2xl text-center font-bold'>Our Partner</h1>
      <div className='flex flex-row flex-wrap justify-center'>
        <ILVegan height={175} width={175} />
        <ILBorcelle height={175} width={175} />
        <ILForkSpoon height={175} width={175} />
        <ILOrganLeaf height={175} width={175} />
        <ILOrganic height={175} width={175} />
      </div>
    </div>
  );
};

export default SectionPartner;
