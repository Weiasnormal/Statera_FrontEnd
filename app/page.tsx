import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden" style={{backgroundImage: 'url(/C_bg.svg)', backgroundSize: 'cover', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero Content */}
          <div className="text-center mb-16">
            {/* Large Statera Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/Navbar_logo.svg"
                alt="Statera Logo"
                width={120}
                height={120}
                className="w-32 h-32"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Behavioral Test
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Understand Student Behavior Through Data
            </p>
          </div>

          {/* Decorative Background Shape */}
          <div className="absolute bottom-0 right-0 w-96 h-64 bg-yellow-50/60 rounded-full blur-3xl -z-10"></div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Step 1 Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#0099C0] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              {/* Colored Header */}
              <div className="bg-[#0099C0] text-white px-6 py-3">
                <h3 className="text-sm font-bold tracking-wider">STEP 1</h3>
              </div>

              {/* Icon Container */}
              <div className="bg-blue-50/30 py-10 flex items-center justify-center">
                <div className="h-32 w-32">
                  <Image
                    src="/Input_Acedemic.svg"
                    alt="Input Academic Performance"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 py-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Input Academic Performance
                </h3>
                <p className="text-gray-600 text-sm">
                  Enter your General Weighted Average (GWA).
                </p>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#27B1A8] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              {/* Colored Header */}
              <div className="bg-[#27B1A8] text-white px-6 py-3">
                <h3 className="text-sm font-bold tracking-wider">STEP 2</h3>
              </div>

              {/* Icon Container */}
              <div className="bg-teal-50/30 py-10 flex items-center justify-center">
                <div className="h-32 w-32">
                  <Image
                    src="/Select_App.svg"
                    alt="Select App Usage Levels"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 py-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Select App Usage Levels
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose how often you use different app categories.
                </p>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#F2BF36] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              {/* Colored Header */}
              <div className="bg-[#F2BF36] text-gray-800 px-6 py-3">
                <h3 className="text-sm font-bold tracking-wider">STEP 3</h3>
              </div>

              {/* Icon Container */}
              <div className="bg-yellow-50/30 py-10 flex items-center justify-center">
                <div className="h-32 w-32">
                  <Image
                    src="/View_Behavioral.svg"
                    alt="View Behavioral Results"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 py-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  View Behavioral Results
                </h3>
                <p className="text-gray-600 text-sm">
                  See your predicted behavioral data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <p className="text-sm text-gray-500">Step 1 of 2</p>
            <div className="flex-1 max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-[#0099C0] rounded-full"></div>
            </div>
          </div>
          
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              What&apos;s your General Weighted Average (GWA)?
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GWA
              </label>
              <input
                type="number"
                placeholder="Ex. 1.32"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <button className="px-6 py-2 bg-[#006B8F] text-white font-semibold rounded-full hover:bg-teal-700 transition-colors flex items-center gap-2">
              Next
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-50 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
            <div className="flex flex-col justify-start">
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
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                Terms And Conditions
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
            </div>
            <p className="text-xs text-gray-600">
              © 2028 STATERA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
