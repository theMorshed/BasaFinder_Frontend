/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { login } from "@/redux/features/auth/authAPI";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(login(email, password));
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 py-16 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">

          <h2 className="text-center text-2xl font-bold text-sky-800 dark:text-sky-200">Login to Your Account</h2>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      placeholder="Enter your email"
                      required
                  />
              </div>

              <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                  <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      placeholder="Enter your password"
                      required
                  />
              </div>

              <div className="flex items-center justify-between">
                  <div className="flex items-center">
                      <input
                          type="checkbox"
                          id="remember"
                          className="h-4 w-4 text-sky-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="remember" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                  </div>
                  <a href="#" className="text-sm text-sky-800 hover:text-sky-600">Forgot password?</a>
              </div>

              <button
                  type="submit"
                  className="w-full py-3 bg-sky-800 text-white font-semibold rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                  Login
              </button>
          </form>

          

          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Do not have an account?{' '}
              <Link href="/auth/register" className="text-sky-800 hover:text-sky-600">Sign Up</Link>
          </p>
      </div>
  </div>
  );
}
