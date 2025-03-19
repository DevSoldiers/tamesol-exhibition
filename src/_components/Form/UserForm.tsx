'use client';
import { ModalContext } from '@/lib/context/modal.context';
import { AppContext } from '@/lib/context/userform.context';
import { registerUserSchema } from '@/lib/schema.auth';
import api from '@/lib/services.api';
import { sanitizer } from '@/lib/utils';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';

export default function RegisterForm({ isModal }: { isModal: boolean }) {
  const [hasError, setHasError] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState<boolean>(false);
  const { setState } = useContext(AppContext);
  const {
    modalState: { onClose, setAuthType },
  } = useContext(ModalContext);

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      images: [] as File[],
    },
    validationSchema: registerUserSchema,
    onSubmit: async (values) => {
      try {
        setHasError(false);
        setIsSendingOTP(true);
        const { phoneNumber, password, images } = values ?? {};
        const response = await api.post(`/otp/sendOtp?phoneNumber=${phoneNumber}`);
        if (response.data) {
          setIsSendingOTP(false);
          setState({
            phoneNumber,
            password,
            images,
            flipped: true,
          });
        }
      } catch (error) {
        setIsSendingOTP(false);
        setHasError(true);
        console.error('Registration failed:', error);
      }
    },
  });

  return (
    <div className="relative bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xl">
      {isModal && (
        <button
          className="absolute right-5 top-3 w-10 h-10 flex flex-col justify-center items-center gap-1 lg:hidden"
          onClick={() => onClose()}
        >
          <span
            className={`w-8 h-1 bg-black rounded block transition-transform duration-300 rotate-45 translate-y-2`}
          ></span>
          <span
            className={`w-8 h-1 bg-black rounded block transition-opacity duration-300 opacity-0`}
          ></span>
          <span
            className={`w-8 h-1 bg-black rounded block transition-transform duration-300 -rotate-45 -translate-y-2`}
          ></span>
        </button>
      )}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-[#f28f37] mb-6">Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={sanitizer(formik.values.phoneNumber)}
            // onChange={formik.handleChange}
            onChange={(e) => {
              const sanitizedValue = e.target.value.replace(/\s+/g, ''); // Remove all spaces
              formik.setFieldValue('phoneNumber', sanitizedValue);
            }}
            onBlur={formik.handleBlur}
            placeholder="Enter your phone number"
            className={`mt-1 block w-full px-3 py-2 border ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? 'border-[#b51f1b]'
                : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:border-[#f28f37]`}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="mt-2 text-sm text-[#b51f1b]">{formik.errors.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your password"
            className={`mt-1 block w-full px-3 py-2 border ${
              formik.touched.password && formik.errors.password
                ? 'border-[#b51f1b]'
                : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:border-[#f28f37]`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="mt-2 text-sm text-[#b51f1b]">{formik.errors.password}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Confirm your password"
            className={`mt-1 block w-full px-3 py-2 border ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'border-[#b51f1b]'
                : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:border-[#f28f37]`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="mt-2 text-sm text-[#b51f1b]">{formik.errors.confirmPassword}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={(event) => {
              if (event.currentTarget.files) {
                formik.setFieldValue('images', Array.from(event.currentTarget.files));
              }
            }}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:border-[#f28f37]"
          />
          {/* {formik.touched.images && formik.errors.images && (
              <p className="mt-2 text-sm text-[#b51f1b]">{formik.errors.images}</p>
            )} */}
        </div>

        <button
          type="submit"
          className="w-full bg-[#f28f37] text-white py-2 px-4 rounded-md hover:bg-[#f7a8389c] focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:ring-offset-2 transition-colors duration-300"
          disabled={isSendingOTP}
        >
          {isSendingOTP ? '...Sending OTP' : 'Register'}
        </button>
        {hasError && <p>Registration failed, please try again.</p>}
        <p className="text-gray-700 mt-3">
          Already have an account?{' '}
          <button
            className="text-blue-600 hover:text-blue-800 underline"
            onClick={() => setAuthType('signIn')}
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
}
