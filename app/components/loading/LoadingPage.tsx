import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="flex flex-col min-h-screen">
     { /*<Navbar /> */} 
            
            <main className="flex-1 flex flex-col items-center justify-center bg-linear-to-b from-white to-gray-50 px-4">
              <div className="flex flex-col items-center gap-6">
                <div className="w-32 h-32 relative animate-spin">
                  <Image
                    src="/Loading.svg"
                    alt="Loading"
                    width={128}
                    height={128}
                    priority
                  />
                </div>
                <h1 className="text-2xl font-semibold text-gray-700 font-inter">
                  Processing your results
                </h1>
                <p className="text-base text-gray-500 font-inter">
                  This will only take a moment.
                </p>
              </div>
            </main>
            
          </div>
        );
}
