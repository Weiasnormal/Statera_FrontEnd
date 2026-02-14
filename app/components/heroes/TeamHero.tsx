export default function TeamHero() {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-[70px] lg:px-[100px] xl:px-[100px] 2xl:px-[100px] text-center md:text-left">

        {/* MOBILE LAYOUT - Shows on small screens only */}
        <div className="md:hidden flex flex-col items-center text-center">
          {/* Subtitle */}
          <span className="text-base sm:text-lg text-gray-500 font-semibold font-poppins mb-2">
            Meet the Team
          </span>

          {/* Main Title */}
          <h1 className="font-bold font-poppins leading-none text-gray-800 mb-4 text-[clamp(40px,10vw,80px)]">
            Team
          </h1>

          {/* Colorful Team Name */}
          <h2 className="font-bold font-poppins leading-none tracking-wide mb-8 text-[clamp(32px,8vw,64px)]">
            <span className="text-cyan-500">S</span>
            <span className="text-teal-500">E</span>
            <span className="text-yellow-400">B</span>
            <span className="text-teal-500">E</span>
            <span className="text-cyan-500">N</span>
          </h2>

          {/* Team Photo */}
          <figure className="w-full flex justify-center">
            <img
              src="/Groupie.svg"
              alt="Team SEBEN members taking a group selfie"
              className="w-64 sm:w-80 h-auto drop-shadow-xl"
            />
          </figure>
        </div>

        {/* TABLET & DESKTOP LAYOUT - REDONE to match reference exactly */}
        <div className="hidden md:block">

          <div className="w-full py-14">
            <div className="max-w-[1500px] mx-auto flex flex-col">

              {/* TOP ROW: large 'Team' left, subtitle at baseline */}
              <div className="flex items-baseline justify-start gap-4 lg:gap-2">
		<h1 className="font-poppins font-bold leading-[0.88] text-gray-800 text-[clamp(120px,18.3vw,350px)]">
		  Team
		</h1>

                  <span className="font-poppins font-semibold text-gray-400 ml-4 whitespace-nowrap text-[clamp(18px,2vw,32px)]">
                      Meet the Team
                  </span>
              </div>

              {/* BOTTOM ROW: image left, SEBEN on the right; spacing tuned for tablet→desktop */}
              <div className="flex items-center justify-start gap-4 lg:gap-6 mt-[10px] lg:mt-[0px] xl:mt-[-10px]">
                <figure className="flex-shrink-0 -mb-6">
                  <img
                    src="/Groupie.svg"
                    alt="Team Selfie"
                    className="w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px] 2xl:w-[320px] h-auto drop-shadow-2xl rounded-[18px]"
                  />
                </figure>

                <div className="font-poppins font-bold leading-[0.88] text-[clamp(120px,18.3vw,350px)]">
                  <span className="text-cyan-500">S</span>
                  <span className="text-teal-500">E</span>
                  <span className="text-yellow-400">B</span>
                  <span className="text-teal-500">E</span>
                  <span className="text-cyan-500">N</span>
                </div>
              </div>

            </div>
            </div>

        </div>
      </div>

      {/* Background Gradient at Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}