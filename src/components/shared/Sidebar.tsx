/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

type SidebarProps = {
  user: any;
  handleLogout: () => void;
};

const Sidebar: FC<SidebarProps> = ({ user, handleLogout }) => {
  const links = [
    { role: "admin", name: "Manage Users", href: "/dashboard/admin/users" },
    { role: "admin", name: "Manage Rental House", href: "/dashboard/admin/house" },
    { role: "admin", name: "Create House", href: "/dashboard/admin/create-house" },
    { role: "landlord", name: "Manage Properties", href: "/dashboard/landlord/house" },
    { role: "landlord", name: "Create House", href: "/dashboard/landlord/create-house" },
    { role: "landlord", name: "View Tenants", href: "/dashboard/landlord/tenants" },
    { role: "tenant", name: "View Rentals", href: "/dashboard/tenant/rentals" },
    { role: "tenant", name: "My Bookings", href: "/dashboard/tenant/bookings" },
  ];

  return (
    <>
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex md:w-64 h-screen bg-gray-900 text-white fixed">
        <div className="w-full p-4">
          <h2 className="text-xl font-bold text-center py-4">Dashboard</h2>
          <Separator className="bg-gray-600" />
          <nav className="mt-4">
            <ul className="space-y-2">
              {links
                .filter(link => link.role === user.role) // Show only relevant links
                .map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="block px-4 py-2 hover:bg-gray-700 rounded">
                      {link.name}
                    </Link>
                  </li>
                ))}
              <li>
                <Link onClick={handleLogout} href="/auth/login" className="block px-4 py-2 hover:bg-gray-700 rounded">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Sidebar for Mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 bg-gray-800 text-white rounded fixed top-4 left-4 z-50">
              ☰
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-gray-900 text-white">
            <h2 className="text-xl font-bold text-center py-4">Dashboard</h2>
            <Separator className="bg-gray-600" />
            <nav className="mt-4">
              <ul className="space-y-2">
                {links
                  .filter(link => link.role === user.role)
                  .map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className="block px-4 py-2 hover:bg-gray-700 rounded">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link onClick={handleLogout} href="/auth/login" className="block px-4 py-2 hover:bg-gray-700 rounded">
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;