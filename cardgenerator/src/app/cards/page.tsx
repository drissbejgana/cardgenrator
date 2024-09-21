'use client'
import { initFlowbite } from 'flowbite';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';




export default function Page() {
    const searchParams = useSearchParams();
    const gender = searchParams.get('gender');
    const prenom = searchParams.get('prenom');
    const nom = searchParams.get('nom');
    const cin = searchParams.get('cin');
  
    const componentRef = useRef<HTMLDivElement>(null);
  
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    useEffect(() => {
      initFlowbite();
    }, []);
  
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div ref={componentRef} className="cardFront">
          <div className="text">
            <div>
              {gender} {prenom} {nom}
            </div>
            <div>{cin}</div>
          </div>
        </div>
  
        <button
          type="button"
          onClick={handlePrint}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Print
        </button>
      </div>
    );
  }
  



Page.getInitialProps = async ({ query }:any) => {
    const {gender,prenom,nom,cin} = query
    
    return {gender,prenom,nom,cin}
  }