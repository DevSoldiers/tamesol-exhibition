"use client"
import { AppContext } from '@/lib/context/userform.context';
import { registerUserSchema } from '@/lib/schema.auth';
import api from '@/lib/services.api';
import { useFormik } from 'formik';
import { useContext } from 'react';

export default function RegisterForm() {
    const { setState } = useContext(AppContext);
    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            images: null,
        },
        validationSchema: registerUserSchema,
        onSubmit: async (values) => {
            try {
                console.log("on submit called!")
                const { phoneNumber, password, images } = values ?? {};
                const response = await api.post(`/otp/sendOtp?phoneNumber=${(values.phoneNumber)}`);
                if (response.data) {
                    setState({
                        phoneNumber,
                        password,
                        images,
                        flipped: true
                    })
                }
            } catch (error) {
                console.error('Registration failed:', error);
                alert('Registration failed. Please try again.');
            }
        },
    });

    return (
        <div className="w-full min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-r from-[#f28f37] to-[#f7a838]">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-[#f28f37] mb-6">
                    Register
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    {/* Phone Number Field */}
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
                            className={`mt-1 block w-full px-3 py-2 border ${formik.touched.phoneNumber && formik.errors.phoneNumber
                                ? 'border-[#b51f1b]'
                                : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:border-[#f28f37]`}
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                            <p className="mt-2 text-sm text-[#b51f1b]">
                                {formik.errors.phoneNumber}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
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
                            className={`mt-1 block w-full px-3 py-2 border ${formik.touched.password && formik.errors.password
                                ? 'border-[#b51f1b]'
                                : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:border-[#f28f37]`}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="mt-2 text-sm text-[#b51f1b]">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password Field */}
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
                            className={`mt-1 block w-full px-3 py-2 border ${formik.touched.confirmPassword && formik.errors.confirmPassword
                                ? 'border-[#b51f1b]'
                                : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:border-[#f28f37]`}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <p className="mt-2 text-sm text-[#b51f1b]">
                                {formik.errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Image Upload Field */}
                    <div className="mb-6">
                        <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                            Upload Images
                        </label>
                        <input
                            type="file"
                            id="images"
                            name="images"
                            onChange={(event) => {
                                if (event.currentTarget.files) {
                                    formik.setFieldValue("images", event.currentTarget.files[0]);
                                }
                            }}
                            onBlur={formik.handleBlur}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:border-[#f28f37]"
                        />
                        {formik.touched.images && formik.errors.images && (
                            <p className="mt-2 text-sm text-[#b51f1b]">
                                {formik.errors.images}
                            </p>
                        )}
                    </div>

                    {/* Register Button */}
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