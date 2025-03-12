"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { changePassword } from "@/redux/features/auth/authAPI";

type PasswordFormValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PasswordFormValues>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: PasswordFormValues) => {
    setLoading(true);
    setError(null);

    try {
      await dispatch(changePassword(data.currentPassword, data.newPassword, data.confirmPassword));
      reset();
      router.push("/auth/login"); // Redirect to login after password change
    } catch (err) {
      console.error("Error changing password:", err);
      setError("Failed to change password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Change Password</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700">Current Password</label>
          <input
            type="password"
            {...register("currentPassword", { required: "Current password is required" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.currentPassword && <p className="text-red-500">{errors.currentPassword.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            {...register("newPassword", { required: "New password is required" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">Confirm New Password</label>
          <input
            type="password"
            {...register("confirmPassword", { required: "Please confirm your new password" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg"
        >
          {loading ? "Changing..." : "Change Password"}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;