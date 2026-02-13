"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/layout/footer";

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Info Card */}
      <div className="bg-gradient-to-b from-cyan-50 to-white px-4 sm:px-8 py-8 sm:py-12" style={{backgroundImage: 'url(/wave.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left Content - Desktop header and breakdown shown on lg, mobile breakdown shown below card */}
            <div className="lg:block flex-1 w-full lg:order-0 order-last lg:py-37">
              <p className="text-gray-600 text-sm sm:text-base mb-2 hidden lg:block">
                Your behavioral analysis is:
              </p>
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8 hidden lg:block">
                Extraversion
              </h1>

              {/* Influence Breakdown Section */}
              <div className="py-8 lg:py-29 mt-8 lg:mt-0 lg:order-0 order-last w-full lg:w-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Influence Breakdown
                </h2>
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="space-y-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Academic Breakdown */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-gray-900">Academic Breakdown</h3>
                          <span className="text-cyan-600 font-semibold">53%</span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 rounded-full">
                          <div className="absolute h-full bg-cyan-500 rounded-full" style={{ width: '53%' }}></div>
                          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white shadow" style={{ left: 'calc(53% - 8px)' }}></div>
                        </div>
                      </div>

                      {/* Entertainment/leisure apps */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-gray-900">Entertainment/leisure apps</h3>
                          <span className="text-cyan-600 font-semibold">67%</span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 rounded-full">
                          <div className="absolute h-full bg-cyan-500 rounded-full" style={{ width: '67%' }}></div>
                          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white shadow" style={{ left: 'calc(67% - 8px)' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Productivity apps */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-gray-900">Productivity apps</h3>
                          <span className="text-cyan-600 font-semibold">20%</span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 rounded-full">
                          <div className="absolute h-full bg-cyan-500 rounded-full" style={{ width: '20%' }}></div>
                          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white shadow" style={{ left: 'calc(20% - 8px)' }}></div>
                        </div>
                      </div>

                      {/* Overall app usage */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-gray-900">Overall app usage</h3>
                          <span className="text-cyan-600 font-semibold">24%</span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 rounded-full">
                          <div className="absolute h-full bg-cyan-500 rounded-full" style={{ width: '24%' }}></div>
                          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white shadow" style={{ left: 'calc(24% - 8px)' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Social media apps */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-gray-900">Social media apps</h3>
                          <span className="text-cyan-600 font-semibold">33%</span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 rounded-full">
                          <div className="absolute h-full bg-cyan-500 rounded-full" style={{ width: '33%' }}></div>
                          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white shadow" style={{ left: 'calc(33% - 8px)' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Card / Mobile Main Content */}
            <div className="w-full lg:w-72 lg:order-0 order-first">
              {/* Mobile Header - Show only on mobile */}
              <div className="lg:hidden mb-6 text-center">
                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  Your behavioral analysis is:
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  Extraversion
                </h1>
              </div>

              {/* SVG Illustration */}
              <div className="mb-6 flex justify-center ">
                <Image
                  src="/extraversion.svg"
                  alt="Extraversion Illustration"
                  width={200}
                  height={200}
                  className="w-full max-w-sm lg:max-w-xs"
                />
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
                {/* Header with Circle */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs opacity-90 mb-1">Your behavioral analysis is:</p>
                    <h3 className="text-xl font-bold">Extraversion</h3>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🧑‍💼</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-white text-cyan-600 font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-sm">
                    <span>Share results</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  <button className="w-full bg-white text-cyan-600 font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-sm">
                    <span>Email results</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <Link href="/">
                    <button className="w-full bg-white text-cyan-600 font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-sm">
                      <span>Run New Analysis</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <Footer />
    </div>
  );
}
