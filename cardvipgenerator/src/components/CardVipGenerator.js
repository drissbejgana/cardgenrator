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
      <button className='btn' onClick={handlePrint}>Print</button>
    </div>
  );
};
export default CardVip