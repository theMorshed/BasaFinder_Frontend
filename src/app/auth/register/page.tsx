/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "@/redux/features/auth/authAPI"; // Assuming you add a register action in authAPI
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("tenant"); // Default role is 'tenant'
  const [error, setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await dispatch(register(name, email, password, role)); // Pass all fields to the register action
      router.push('/auth/login');
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 py-16 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">

          <h2 className="text-center text-2xl font-bold text-sky-800 dark:text-sky-200">Create Your Account</h2>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      placeholder="Enter your username"
                      required
                  />
              </div>

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

              <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
                  <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      placeholder="Confirm your password"
                      required
                  />
              </div>

              <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">User Role</label>
                  <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                          <input
                              type="radio"
                              id="tenant"
                              name="role"
                              value="tenant"
                              checked={role === "tenant"}
                              onChange={(e) => setRole(e.target.value)}
                              className="h-4 w-4 text-sky-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor="tenant" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Tenant</label>
                      </div>
                      <div className="flex items-center">
                          <input
                              type="radio"
                              id="landlord"
                              name="role"
                              value="landlord"
                              checked={role === "landlord"}
                              onChange={(e) => setRole(e.target.value)}
                              className="h-4 w-4 text-sky-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor="landlord" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Landlord</label>
                      </div>
                  </div>
              </div>

              <button
                  type="submit"
                  className="w-full py-3 bg-sky-800 text-white font-semibold rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                  Register
              </button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-sky-800 hover:text-sky-600">Login</Link>
          </p>
      </div>
  </div>
  );
}
