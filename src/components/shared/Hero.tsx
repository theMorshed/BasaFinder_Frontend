"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

const HeroBanner = () => {
  const [role, setRole] = useState<string | null>(null);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (user?.role) {
      setRole(user.role);
    }
  }, [user]);

  // if (role === null) return null; // Avoid rendering until role is known

  return (
    <div className="md:grid md:grid-cols-2 md:items-center gap-[30px] min-h-screen container mx-auto py-16 px-6">
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h4 className="text-indigo-800 dark:text-body-color text-[22px] md:text-[25px] lg:text-[4xl] lg:leading-[1.5] font-bold mb-[1rem] xl:mb-[10px]">
          Find Your Perfect Rental House Today!
        </h4>
        <h1 className="text-[35px] md:text-[38px] lg:text-[50px] xl:text-[6xl] 2xl:text-[65px] bg-gradient-to-r from-indigo-800 to-indigo-950 bg-clip-text xl:leading-[1.2] text-transparent mb-[15px] font-bold">
          Explore, Compare, <br /> & Secure Your Dream Home.
        </h1>
        <p className="text-xl leading-[1.5] text-primary-color-light dark:text-body-color max-w-[540px] mx-auto md:mx-0">
          Discover the best rental properties in your area with ease. Compare listings, view amenities, and secure your ideal home hassle-free.
        </p>
        {/* Action Button */}
        <div className="mt-6">
          {role === "landlord" ? (
            <Link href="/dashboard/landlord/create-house"><Button className="bg-indigo-600 text-white hover:bg-indigo-500 px-6 py-3 rounded-lg text-lg cursor-pointer">
              Post Rental House
            </Button></Link>
          ) : (
            <Link href="/rental"><Button className="bg-indigo-600 text-white hover:bg-indigo-500 px-6 py-3 rounded-lg text-lg cursor-pointer">
              All Rental House
            </Button></Link>
          )}

        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex md:justify-center md:items-center relative">
        <Image
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
          alt="Rental House"
          className="rounded-[20px] border-2 border-indigo-800 hover:border-indigo-950 rotate-[4.29deg] hover:rotate-0 transition-all duration-300"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default HeroBanner;