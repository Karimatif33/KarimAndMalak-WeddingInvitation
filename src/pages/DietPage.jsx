import { useState } from "react";
import { myDiet } from "../data/myDiet";
import SmartCalculator from "../components/SmartCalculator";
import bgImage from "../assets/images/1.png";

export default function DietPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item, meal) => {
    setSelectedItem({ ...item, meal });
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-[#031B2E] to-[#020617] text-white relative">

      {/* Background Logo */}
      <img
        src={bgImage}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-[400px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        <h1 className="text-3xl text-center text-cyan-400 mb-10">
          نظامك الغذائي
        </h1>

        {/* Meals */}
        <div className="grid md:grid-cols-2 gap-6">

          {myDiet.map((meal, i) => (
            <div
              key={i}
              className="bg-[#111827] p-4 rounded-2xl border border-white/10"
            >
              <h2 className="text-yellow-400 mb-4">{meal.meal}</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">

                {meal.items.map((item, idx) => {
                  const isActive =
                    selectedItem?.name === item.name &&
                    selectedItem?.meal === meal.meal;

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelect(item, meal.meal)}
                      className={`p-2 rounded-xl text-sm text-center border cursor-pointer transition
                        ${
                          isActive
                            ? "bg-cyan-500/20 border-cyan-400"
                            : "bg-[#1f2937] border-white/5 hover:border-cyan-400"
                        }`}
                    >
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-[11px] text-gray-400">
                        {item.amount} {item.unit || "جم"}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>
          ))}
        </div>

        {/* Smart */}
        <div className="mt-12">
          <SmartCalculator selectedItem={selectedItem} />
        </div>

      </div>
    </div>
  );
}