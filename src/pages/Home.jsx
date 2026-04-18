import bgImage from "../assets/images/1.png";
import ExchangeCalculator from "../components/ExchangeCalculator";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-[#031B2E] to-[#020617] text-white relative">

      {/* Background Logo */}
      <img
        src={bgImage}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-[500px]"
      />

      <div className="relative z-10 pt-24 px-4 max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl text-cyan-400 font-bold mb-4">
             تبديل الأكل
          </h1>

          <p className="text-gray-300">60 رز = 260 بطاطس</p>
          <p className="text-gray-300">100 رز = ؟</p>

          <p className="text-4xl text-yellow-400 font-bold mt-3">
            435 جم بطاطس
          </p>
        </div>

        <ExchangeCalculator />
      </div>
    </div>
  );
}