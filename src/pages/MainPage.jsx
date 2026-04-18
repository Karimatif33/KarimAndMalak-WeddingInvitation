import { useState } from "react";
import bgImage from "../assets/images/1.png";

import MyDiet from "../components/MyDiet";
import SmartCalculator from "../components/SmartCalculator";
import ExchangeCalculator from "../components/ExchangeCalculator";

export default function MainPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#031B2E] via-[#020617] to-[#020617] text-white">

      {/* 🔥 اللوجو في النص */}
      <img
        src={bgImage}
        alt=""
        className="
          absolute 
          top-1/2 
          left-1/2 
          -translate-x-1/2 
          -translate-y-1/2 
          opacity-5 
          w-[300px] sm:w-[500px] md:w-[650px]
          pointer-events-none
        "
      />

      {/* 🔥 المحتوى */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-10">

        {/* 🧠 الشرح */}
        <section className="mb-16 text-center">

          <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-6">
            🤔 ازاي تبدل أكلك بسهولة؟
          </h1>

          <p className="text-gray-300 mb-2">
            عندك 60 جم رز وعايز تبدله بطاطس 🍟
          </p>

          <p className="text-gray-300 mb-2">
            60 رز = 260 بطاطس
          </p>

          <p className="text-gray-300 mb-2">
            لو عندك 100 جم رز 👇
          </p>

          <p className="text-4xl text-yellow-400 font-bold">
            435 جم بطاطس
          </p>

          <p className="text-sm text-gray-400 mt-3">
            💡 المثال للتوضيح — احسب بنفسك تحت 👇
          </p>
        </section>

        {/* 🍽️ نظامك */}
        <MyDiet setSelectedItem={setSelectedItem} />

        {/* 🔄 Smart */}
        <div className="my-16">
          <SmartCalculator selectedItem={selectedItem} />
        </div>

        {/* 🧮 Calculator */}
        <ExchangeCalculator />

      </div>
    </div>
  );
}