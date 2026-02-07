import Image from "next/image";
import Footer from "./components/layout/footer";
import CardsModal from "./components/ui/cards_modal";

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
          <CardsModal />
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
