'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center px-8 py-4 bg-white border-b border-gray-200">
      {/* Logo - Positioned on the left */}
      <div className="flex items-center gap-2 absolute left-8">
        <Image
          src="/Navbar_logo.svg"
          alt="Statera Logo"
          width={32}
          height={32}
        />
        <span className="text-xl font-bold text-gray-900 font-poppins">Statera</span>
      </div>

      {/* Navigation Links - Centered */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className={`px-6 py-2 rounded-lg font-bold transition-colors font-inter ${
            pathname === '/' 
              ? 'bg-cyan-100 text-cyan-700' 
              : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-600'
          }`}
        >
          Behavior Test
        </Link>
        <Link
          href="/how-it-works"
          className={`px-6 py-2 rounded-lg font-bold transition-colors font-inter ${
            pathname === '/how-it-works' 
              ? 'bg-cyan-100 text-cyan-700' 
              : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-600'
          }`}
        >
          Meet the Team
        </Link>
      </div>
    </nav>
  );
}
