"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const user = useSelector((state: RootState) => state.auth.user);
    console.log(user?.role);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        router.push("/auth/login");
    };

    if (!hydrated) return null; // Prevents SSR issues
    

    return (
        <nav className="bg-white text-sky-800 p-4 py-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">BasaFinder</Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-6 font-bold">                     
                    {user? (
                        <>
                            <Link href="/" className="hover:text-sky-950">Home</Link>
                            <Link href="/about" className="hover:text-sky-950">About Us</Link>
                            <Link href="/rental" className="hover:text-sky-950">All Rentals</Link>
                            <Link href="/dashboard" className="hover:text-sky-950">Dashboard</Link>
                            <Link href="/dashboard/profile" className="hover:text-sky-950">My Profile</Link>
                            <Link onClick={handleLogout} href="/auth/login" className="hover:text-sky-950">Logout</Link>
                        </>
                    ): (
                        <>
                            <Link href="/" className="hover:text-sky-950">Home</Link>
                            <Link href="/about" className="hover:text-sky-950">About Us</Link>
                            <Link href="/rental" className="hover:text-sky-950">All Rentals</Link>
                            <Link href="/auth/login" className="hover:text-sky-950">Login</Link>
                            <Link href="/auth/register" className="hover:text-sky-950">Register</Link>
                        </>
                    )}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="sm:hidden text-xl">
                    {isMenuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white p-4 shadow-md">
                    <ul className="space-y-4 font-bold">                   
                        {user? (
                            <>
                                <Link href="/" className="block hover:text-sky-950">Home</Link>
                                <Link href="/about" className="block hover:text-sky-950">About Us</Link>
                                <Link href="/rental" className="block hover:text-sky-950">All Rentals</Link>
                                <Link href="/dashboard" className="block hover:text-sky-950">Dashboard</Link>
                                <Link href="/dashboard/profile" className="block hover:text-sky-950">My Profile</Link>
                                <Link onClick={handleLogout} href="/auth/login" className="block hover:text-sky-950">Logout</Link>                                
                            </>
                        ): (
                            <>
                                <Link href="/" className="block hover:text-sky-950">Home</Link>
                                <Link href="/about" className="block hover:text-sky-950">About Us</Link>
                                <Link href="/rental" className="block hover:text-sky-950">All Rentals</Link>
                                <Link href="/auth/login" className="block hover:text-sky-950">Login</Link>
                                <Link href="/auth/register" className="block hover:text-sky-950">Register</Link>
                            </>
                        )}                        
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;