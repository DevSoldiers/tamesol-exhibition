'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { paymentService } from '@/lib/payment.service';
import * as yup from 'yup';

export default function MiniTicketPage({ cbeToken, phone }: { cbeToken: string; phone: string }) {
  const [error, setError] = useState('');

  const initialValues = {
    quantity: 1,
  };

  const validationSchema = yup.object({
    quantity: yup.number().min(1, 'Quantity must be at least 1').required('Quantity is required'),
  });

  const handleSubmit = async () => {
    formik.setSubmitting(true);
    setError('');
    try {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const tickets: any = await paymentService.buyTicket(
        { ...formik.values, phoneNumber: `+${phone}`, token: cbeToken },
        '66adb95237cf6e1235893e5d'
      );
      (window as any).myJsChannel.postMessage(tickets.checkout_url);
      /* eslint-disable @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      setError(error.message);
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Image Section */}
      <div className="mt-4 w-full">
        <img src="CBE_Birr.webp" alt="" className="w-full" />
      </div>

      {/* Form Section */}
      <div className="p-4 rounded-lg shadow-md mt-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#8C2D85]">Addis Neger Expo 2017</h2>

          <div className="text-left flex flex-col gap-5 mt-4">
            <label className={'text-lg text-BroadcastChannel font-semibold'}>ስንት ትኬት</label>
            <input
              type="number"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              min="1"
              required
              className="w-full border border-green-950 rounded-md px-4 py-2"
            />
            <button
              className={`w-full mb-4 flex items-center justify-center py-2 rounded-md ${
                formik.isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : `bg-secondarybrand hover:bg-secondarybrand`
              } text-black`}
              onClick={() => {
                formik.handleSubmit();
              }}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
              ) : (
                'ትኬት ይግዙ'
              )}
            </button>
          </div>

          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
