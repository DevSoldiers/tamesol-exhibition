'use client';
import { ModalContext } from '@/lib/context/modal.context';
import { sanitizer } from '@/lib/utils';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { useContext, useState } from 'react';

export default function SignInForm({ isModal = false }: { isModal: boolean }) {
  const [message, setMessage] = useState<string>('');
  const [isSigning, setIsSigning] = useState<boolean>(false);

  const {
    modalState: { onClose },
  } = useContext(ModalContext);

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: '',
    },
    onSubmit: async (values) => {
      // eslint-disable-next-line prefer-const
      let { phoneNumber, password } = values ?? {};
      phoneNumber = sanitizer(phoneNumber);
      try {
        setIsSigning(true);
        const result = await signIn('Signin', {
          redirect: false,
          phoneNumber,
          password,
        });

        if (result?.error) {
          setIsSigning(false);
          setMessage('incorrect phonenumber or password!');
        } else {
          setIsSigning(false);
          onClose();
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setMessage('An error occurred. Please try again.');
      }
    },
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-r">
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
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#f28f37] mb-6">Sign In</h1>
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

          <div className="mb-6">
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
              <p className="mt-2 text-sm text-[#b51f1b]">{message || formik.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#f28f37] text-white py-2 px-4 rounded-md hover:bg-[#f7a8389c] focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:ring-offset-2 transition-colors duration-300"
          >
            {isSigning ? 'Signing...' : 'Sign In'}
          </button>
          {message ? <small className="text-redishcolor">{message}</small> : null}
        </form>
      </div>
    </div>
  );
}
