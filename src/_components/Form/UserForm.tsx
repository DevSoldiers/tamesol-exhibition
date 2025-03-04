'use client';
import { ModalContext } from '@/lib/context/modal.context';
import { AppContext } from '@/lib/context/userform.context';
import { registerUserSchema } from '@/lib/schema.auth';
import api from '@/lib/services.api';
import { useFormik } from 'formik';
import { useContext } from 'react';

export default function RegisterForm({ isModal }: { isModal: boolean }) {
  const { setState } = useContext(AppContext);
  const {
    modalState: { onClose },
  } = useContext(ModalContext);

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      images: [],
    },
    validationSchema: registerUserSchema,
    onSubmit: async (values) => {
      try {
        const { phoneNumber, password, images } = values ?? {};
        const response = await api.post(`/otp/sendOtp?phoneNumber=${values.phoneNumber}`);
        if (response.data) {
          setState({
            phoneNumber,
            password,
            images,
            flipped: true,
          });
        }
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    },
  });

  return (
    <div className="w-full flex items-center justify-center md:px-4 md:py-8 bg-gradient-to-r from-[#f28f37] to-[#b3aea7]">
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
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
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
            {formik.touched.images && formik.errors.images && (
              <p className="mt-2 text-sm text-[#b51f1b]">{formik.errors.images}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#f28f37] text-white py-2 px-4 rounded-md hover:bg-[#f7a8389c] focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:ring-offset-2 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
