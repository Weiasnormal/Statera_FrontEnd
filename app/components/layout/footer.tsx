import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 relative" style={{backgroundImage: 'url(/Footer.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', paddingTop: '120px', paddingBottom: '60px'}}>
      <div className="max-w-full mx-0 pl-6 font-inter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
          {/* Left Column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/Navbar_logo.svg"
                alt="Statera Logo"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold text-gray-900">Statera</span>
            </div>

            {/* Description */}
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              Machine Learning-Driven Student Behavior Analysis
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Statera analyzes academic performance and mobile app usage to predict and visualize student behavior patterns.
            </p>
            <p className="text-xs text-gray-600">
              Developed for academic and research purposes only. Results are predictive and not for clinical interpretation.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-start md:justify-end md:items-end">
            <nav className="space-y-2">
              <div>
                <Link href="/" className="text-sm font-semibold text-[#006B8F] hover:text-teal-700 transition-colors">
                  Behavioral Test
                </Link>
              </div>
              <div>
                <Link href="/how-it-works" className="text-sm font-semibold text-[#006B8F] hover:text-teal-700 transition-colors">
                  How it Works
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-start items-start gap-4">
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
              Terms And Conditions
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-xs text-gray-600 md:absolute md:right-12">
            © 2028 STATERA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
