import Image from "next/image";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden" style={{backgroundImage: 'url(/C_bg.svg)', backgroundSize: 'cover', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
        <div className="max-w-7xl mx-auto relative z-10">
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
            <div className="bg-transparent backdrop-blur-sm border border-[#0099C0] rounded-3xl overflow-hidden transition-shadow" style={{maxWidth: '405px', width: '100%', height: '350px'}}>
              {/* Colored Header */}
              <div className="bg-[#0099C0] text-white px-6 py-3 flex items-center justify-center" style={{height: '83px'}}>
                <h3 className="text-sm font-bold tracking-wider">STEP 1</h3>
              </div>

              {/* Icon Container */}
              <div className="bg-blue-50/30 py-6 flex items-center justify-center">
                <div className="h-32 w-32">
                  <Image
                    src="/Input_Acedemic.svg"
                    alt="Input Academic Performance"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 py-4 text-center flex flex-col items-center">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  Input Academic Performance
                </h3>
                <p className="text-gray-600 text-xs">
                  Enter your General Weighted Average (GWA).
                </p>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="bg-transparent backdrop-blur-sm border border-[#27B1A8] rounded-3xl overflow-hidden transition-shadow" style={{maxWidth: '405px', width: '100%', height: '350px'}}>
              {/* Colored Header */}
              <div className="bg-[#27B1A8] text-white px-6 py-3 flex items-center justify-center" style={{height: '83px'}}>
                <h3 className="text-sm font-bold tracking-wider">STEP 2</h3>
              </div>

              {/* Icon Container */}
              <div className="bg-teal-50/30 py-6 flex items-center justify-center">
                <div className="h-32 w-32">
                  <Image
                    src="/Select_App.svg"
                    alt="Select App Usage Levels"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 py-4 text-center flex flex-col items-center">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  Select App Usage Levels
                </h3>
                <p className="text-gray-600 text-xs">
                  Choose how often you use different app categories.
                </p>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="bg-transparent border border-[#F2BF36] rounded-3xl overflow-hidden transition-shadow" style={{maxWidth: '405px', width: '100%', height: '350px'}}>
              {/* Colored Header */}
              <div className="bg-[#F2BF36] text-gray-800 px-6 py-3 flex items-center justify-center" style={{height: '83px'}}>
                <h3 className="text-sm font-bold tracking-wider">STEP 3</h3>
              </div>

              {/* Icon Container */}
              <div className="bg-yellow-50/30 py-6 flex items-center justify-center">
                <div className="h-32 w-32">
                  <Image
                    src="/View_Behavioral.svg"
                    alt="View Behavioral Results"
                    width={150}
                    height={150}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 py-4 text-center flex flex-col items-center">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  View Behavioral Results
                </h3>
                <p className="text-gray-600 text-xs">
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
              <label className="block text-sm font-medium text-gray-900 mb-2">
                GWA
              </label>
              <input
                type="number"
                placeholder="Ex. 1.32"
                step="0.01"
                min="1.00"
                max="5.00"
                className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-black placeholder-gray-500 text-black"
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
      <Footer />
    </div>
  );
}
