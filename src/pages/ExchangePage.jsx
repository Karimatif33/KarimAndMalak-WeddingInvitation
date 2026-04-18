import { useState } from "react";
import Navbar from "../components/Navbar";
import ExchangeCalculator from "../components/ExchangeCalculator";
import MyDiet from "../components/MyDiet";
import SmartCalculator from "../components/SmartCalculator";
import bgImage from "../assets/images/1.png";

export default function ExchangePage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#031B2E] via-[#020617] to-[#020617] text-white">

      <Navbar />

      {/* Background */}
      <img
        src={bgImage}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-[500px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-10">

        {/* Hero */}
        <section id="hero" className="mb-16">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            🤔 احسب بدائل أكلك بسهولة
          </h1>
          <p className="text-gray-300">
            اختار أي صنف من نظامك وبدّله فورًا بنفس القيمة الغذائية
          </p>
        </section>

        {/* Diet */}
        <MyDiet setSelectedItem={setSelectedItem} />

        {/* Smart */}
        <section id="smart" className="mb-16">
          <SmartCalculator selectedItem={selectedItem} />
        </section>

        {/* Calculator */}
        <section id="calc">
          <ExchangeCalculator />
        </section>

      </div>
    </div>
  );
}