'use client'
import { initFlowbite } from 'flowbite';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';


interface CreateCardProps {}


const CreateCard: React.FC<CreateCardProps> = () => {
  const [nom, setNom] = useState<string>('');
  const [prenom, setPrenom] = useState<string>('');
  const [cin, setCin] = useState<string>('');
  const [gender, setGender] = useState<'MR' | 'MMe' | ''>('');

  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <form className="max-w-sm mx-auto my-5">
        <div className="mb-5">
          <label
            htmlFor="lname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom
          </label>
          <input
            type="text"
            onChange={(e) => setNom(e.currentTarget.value)}
            id="lname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Prénom
          </label>
          <input
            type="text"
            onChange={(e) => setPrenom(e.currentTarget.value)}
            id="fname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <select
          id="gender"
          onChange={(e) => setGender(e.currentTarget.value as 'MR' | 'MMe')}
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected disabled value="">
            Select Gender
          </option>
          <option value="MR">MR</option>
          <option value="MMe">MMe</option>
        </select>

        <div className="mb-5">
          <label
            htmlFor="cin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CIN
          </label>
          <input
            type="text"
            onChange={(e) => setCin(e.currentTarget.value)}
            id="cin"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

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
      </form>
    </>
  );
};

export default CreateCard;
