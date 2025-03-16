'use client';

import React, { useEffect, useState } from 'react';
import CImageCard from '../Cards/CImageCard';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function WebTicketPage({ isTsomFest }: { isTsomFest: boolean }) {
  const [error, setError] = useState('');
  const session = useSession();
  const router = useRouter();

  const isLoggedIn = Boolean(session && session.data);

  const initialValues = {
    phoneNumber: '',
    quantity: 1,
  };

  const validationSchema = yup.object({
    phoneNumber: yup
      .string()
      .matches(/^\+?\d{10,15}$/, 'Invalid phone number format')
      .required('Phone number is required'),
    quantity: yup.number().min(1, 'Quantity must be at least 1').required('Quantity is required'),
  });

  const handleSubmit = async () => {
    formik.setSubmitting(true);
    setError('');

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
      router.refresh();
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="mx-auto p-6 bg-gradient-to-br rounded-2xl shadow-2xl py-[150px]">
      {/* Top Header */}
      <div className="text-center bg-[#FF6B35] text-white py-4 rounded-xl mb-8">
        <h1 className="text-xl md:text-2xl font-bold">
          የመግቢያ ትኬት መቁረጫ - 1 ትኬት በ {isTsomFest ? '200' : '150'} ብር ብቻ!
        </h1>
      </div>

      {/* Main Title */}
      <h2 className="text-center text-[#9D4F09] text-3xl md:text-4xl font-bold mb-8">ትኬትዎን ይቁረጡ</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[300px]">
          <CImageCard
            imgSrc={isTsomFest ? '/gebeta_pic' : '/eske_fasika_logo_qm7q1s'}
            alt="Ticket Image"
            className="rounded-2xl shadow-lg object-contain w-full"
            width={0}
            height={0}
            fill={true}
            sizes=""
          />
        </div>
        {/* Right: Form Inputs */}
        <div className="flex-1 p-8 bg-white rounded-2xl shadow-lg">
          <div className="mb-6">
            <label className="block text-lg font-semibold text-[#9D4F09] mb-2">ስልክ ቁጥር</label>
            <input
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="+251912345678"
              className="w-full px-4 py-3 border border-[#FF6B35] rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:outline-none text-[#9D4F09] placeholder-[#FF6B35]"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-2">{formik.errors.phoneNumber}</p>
            )}
          </div>

          <div className="mb-8">
            <label className="block text-lg font-semibold text-[#9D4F09] mb-2">ስንት ትኬት?</label>
            <input
              type="number"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              min="1"
              className="w-full px-4 py-3 border border-[#FF6B35] rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:outline-none text-[#9D4F09] placeholder-[#FF6B35]"
            />
            {formik.touched.quantity && formik.errors.quantity && (
              <p className="text-red-500 text-sm mt-2">{formik.errors.quantity}</p>
            )}
          </div>

          {/* Next Button */}
          <button
            className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-all ${
              formik.isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#FF6B35] hover:bg-[#E65A2B]'
            }`}
            onClick={() => formik.handleSubmit()}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              </div>
            ) : (
              'Next'
            )}
          </button>

          {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}
