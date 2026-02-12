import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-2">Team</h1>
        <p className="text-2xl md:text-3xl text-gray-400 font-medium">Meet the Team</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl w-full">
       
        <div className="shrink-0 w-full md:w-auto flex justify-center">
          <Image
            src="/Groupie.svg"
            width={320}
            height={320}
            alt="Team taking a selfie"
            className="w-80 h-auto drop-shadow-lg"
          />
        </div>

        <div className="shrink-0 w-full md:w-auto flex items-center justify-center">
          <div className="text-7xl md:text-8xl font-black tracking-wider">
            <span className="text-cyan-500">S</span>
            <span className="text-teal-500">E</span>
            <span className="text-yellow-400">B</span>
            <span className="text-teal-500">E</span>
            <span className="text-cyan-500">N</span>
          </div>
        </div>
      </div>
    </div>
  );
}

