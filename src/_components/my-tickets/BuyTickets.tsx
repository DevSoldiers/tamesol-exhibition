'use client';

import { useFormik } from 'formik';
import { paymentService } from '@/lib/payment.service';
import * as yup from 'yup';
import { useState } from 'react';

export default function BuyTickets({ cbeToken, phone }: { cbeToken: string; phone: string }) {
  const [error, setError] = useState('');

  const initialValues = {
    quantity: 1,
    ticketType: 'withOutFood',
  };

  const validationSchema = yup.object({
    quantity: yup.number().min(1, 'Quantity must be at least 1').required('Quantity is required'),
    ticketType: yup
      .string()
      .oneOf(['withOutFood', 'withFood'], 'Invalid ticket type')
      .required('Ticket type is required'),
  });

  const handleSubmit = async () => {
    formik.setSubmitting(true);
    setError('');
    try {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const tickets: any = await paymentService.buyTicket(
        { ...formik.values, phoneNumber: `+${phone}`, token: cbeToken },
        formik.values.ticketType === 'withOutFood'
          ? '67c5a413a95757b028aa57f7'
          : '67c5a3dda95757b028aa57f4'
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
    <div className="max-w-6xl mx-auto px-1">
      {/* Form Section */}
      <div className="p-4 rounded-lg mt-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-BroadcastChannel">
            Addis Neger <span className="font-black text-3xl">Expo 2017</span>
          </h2>

          <div className="text-left flex flex-col gap-2 mt-4">
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

            {/* Radio Buttons for Ticket Type */}
            <div className="flex flex-col gap-2">
              <label className="text-lg font-semibold text-BroadcastChannel">ትኬት አይነት</label>
              <div className="flex gap-4 flex-wrap md:flex-row flex-col justify-start py-5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="ticketType"
                    value="withOutFood"
                    checked={formik.values.ticketType === 'withOutFood'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-BroadcastChannel checked:border-BroadcastChannel transition-colors duration-200"
                  />
                  <span className="text-gray-700">
                    ያለ ምግብ - <span className="font-bold">100 ብር</span>
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="ticketType"
                    value="withFood"
                    checked={formik.values.ticketType === 'withFood'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-BroadcastChannel checked:border-BroadcastChannel transition-colors duration-200"
                  />
                  <span className="text-gray-700">
                    ከምግብ ጋር - <span className="font-bold">150 ብር</span>
                  </span>
                </label>
              </div>
            </div>

            <button
              className={`w-full mb-4 flex items-center justify-center py-2 rounded-md ${
                formik.isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : `bg-secondarybrand hover:bg-secondarybrand`
              } text-white font-semibold`}
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
