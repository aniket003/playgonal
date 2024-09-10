import Image from 'next/image';
import React from 'react';

const PDFViewer: React.FC<any> = () => {
  return (
    <div className='main-container'>
      <Image className='resume' alt="dcdscf" width={1000} height={1000} src="/images/Aniket_fullstack_4yrs_pages-to-jpg-0001.jpg"/>
      <Image className='resume' alt="dcdscf" width={1000} height={1000} src="/images/Aniket_fullstack_4yrs_pages-to-jpg-0002.jpg"/>

    </div>
  );
};

export default PDFViewer;