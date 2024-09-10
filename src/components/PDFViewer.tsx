import Image from 'next/image';
import React from 'react';

const PDFViewer: React.FC = () => {
  return (
    <div>
      <Image className='resume' alt="dcdscf" width={1000} height={1000} src="/images/Aniket_fullstack_4yrs_pages-to-jpg-0001.jpg"/>
      <Image className='resume' alt="dcdscf" width={1000} height={1000} src="/images/Aniket_fullstack_4yrs_pages-to-jpg-0002.jpg"/>
    </div>
  );
};

export default PDFViewer;