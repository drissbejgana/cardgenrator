'use client'
import React, { useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import { CardToPrint } from './CardToPrint';

const CardVip = () => {
  const componentRef = useRef();
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
     <div>
        <CardToPrint ref={componentRef} />
        <button  class="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handlePrint}>Print all cards</button>
    </div>
  );
};
export default CardVip