import Image from "next/image";

export default function UpperDesign() {
  return (
    <>
      {/* Upper Design Section */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden" style={{backgroundImage: 'url(/C_bg.svg)', backgroundSize: 'cover', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            
            <div className="flex justify-center mb-8">
              <Image
                src="/Navbar_logo.svg"
                alt="Statera Logo"
                width={120}
                height={120}
                className="w-32 h-32"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Behavioral Test
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-inter">
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
            <h3 className="text-sm font-bold tracking-wider font-poppins">STEP 1</h3>
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
            <h3 className="text-base font-bold text-gray-900 mb-1 font-poppins">
              Input Academic Performance
            </h3>
            <p className="text-gray-600 text-xs font-inter">
              Enter your General Weighted Average (GWA).
            </p>
          </div>
        </div>

        {/* Step 2 Card */}
        <div className="bg-transparent backdrop-blur-sm border border-[#27B1A8] rounded-3xl overflow-hidden transition-shadow" style={{maxWidth: '405px', width: '100%', height: '350px'}}>
          {/* Colored Header */}
          <div className="bg-[#27B1A8] text-white px-6 py-3 flex items-center justify-center" style={{height: '83px'}}>
            <h3 className="text-sm font-bold tracking-wider font-poppins">STEP 2</h3>
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
            <h3 className="text-base font-bold text-gray-900 mb-1 font-poppins">
              Select App Usage Levels
            </h3>
            <p className="text-gray-600 text-xs font-inter">
              Choose how often you use different app categories.
            </p>
          </div>
        </div>

        {/* Step 3 Card */}
        <div className="bg-transparent border border-[#F2BF36] rounded-3xl overflow-hidden transition-shadow" style={{maxWidth: '405px', width: '100%', height: '350px'}}>
          {/* Colored Header */}
          <div className="bg-[#F2BF36] text-gray-800 px-6 py-3 flex items-center justify-center" style={{height: '83px'}}>
            <h3 className="text-sm font-bold tracking-wider font-poppins">STEP 3</h3>
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
            <h3 className="text-base font-bold text-gray-900 mb-1 font-poppins">
              View Behavioral Results
            </h3>
            <p className="text-gray-600 text-xs font-inter">
              See your predicted behavioral data.
            </p>
          </div>
        </div>
      </div>
        </div>
      </section>
    </>
  );
}
