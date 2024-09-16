import React from 'react';
import ImageWithFallback from './Image';

const PDFViewer: React.FC = () => {
  return (
    <div>
      <ImageWithFallback className='resume' alt="dcdscf" width={1000} height={1000} src="/images/Aniket_fullstack_4yrs_pages-to-jpg-0001.jpg"/>
      <ImageWithFallback className='resume' alt="dcdscf" width={1000} height={1000} src="/images/Aniket_fullstack_4yrs_pages-to-jpg-0002.jpg"/>
    </div>
  );
};

export default PDFViewer;