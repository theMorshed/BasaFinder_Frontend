"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/features/auth/authSlice";
import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);

    if (!user) {
      // Redirect if user is not logged in
      router.push("/auth/login");
    } else {
      // Role-based access control
      if (
        pathname.startsWith("/dashboard/admin") && user.role !== "admin" ||
        pathname.startsWith("/dashboard/landlord") && user.role !== "landlord" ||
        pathname.startsWith("/dashboard/tenant") && user.role !== "tenant"
      ) {
        router.push(`/dashboard/${user?.role}`); // Redirect to a safe page
      }
    }
  }, [user, pathname, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
  };

  if (!isClient || !user) return null; // Prevent hydration error

  return (
    <div className="flex min-h-screen">
      {/* Use Sidebar Component */}
      <Sidebar user={user} handleLogout={handleLogout} />

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
