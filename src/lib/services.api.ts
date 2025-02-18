import { options } from "@/api/auth/[...nextauth]/options";
import axios from "axios";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export const api = axios.create({
    baseURL: "https://iw2kq4i5clj6anz5amme62nb540fwlit.lambda-url.us-east-1.on.aws/api/v2",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
});


// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

api.interceptors.request.use(
    async (config) => {
        const session = await getServerSession(options);
        //@ts-expect-error token does not exist on user.
        const token = session?.user.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
export default api;