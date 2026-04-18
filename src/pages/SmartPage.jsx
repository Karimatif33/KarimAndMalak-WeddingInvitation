import { useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import { categories } from "../data/foodData";

export default function SmartPage() {
  const { state } = useLocation();
  const selectedItem = state;

  const [toFood, setToFood] = useState(null);

  if (!selectedItem) {
    return <div className="text-white p-10">اختار من النظام الأول</div>;
  }

  const foods = categories[selectedItem.category]?.items || [];

  const baseFood = foods.find(f => f.name === selectedItem.base);

  const result = useMemo(() => {
    if (!baseFood || !toFood) return null;

    return Math.round(
      (toFood.amount * selectedItem.amount) / baseFood.amount
    );
  }, [toFood]);

  return (
    <div className="min-h-screen pt-24 flex justify-center bg-gradient-to-br from-[#031B2E] to-[#020617] text-white">

      <div className="bg-[#111827] p-6 rounded-2xl w-full max-w-md">

        <h1 className="text-xl text-center text-cyan-400 mb-4">
          بدّل وجبتك
        </h1>

        <div className="text-center mb-4">
          <p>{selectedItem.name}</p>
          <p className="text-cyan-400">
            {selectedItem.amount} {selectedItem.unit || "جم"}
          </p>
        </div>

        <select
          onChange={(e) =>
            setToFood(foods.find(f => f.name === e.target.value))
          }
          className="w-full p-3 rounded text-black"
        >
          <option>اختار البديل</option>
          {foods.map(f => (
            <option key={f.name}>{f.name}</option>
          ))}
        </select>

        {result && (
          <div className="mt-5 text-center">
            <p className="text-gray-400">الكمية المطلوبة</p>
            <p className="text-3xl text-cyan-400 font-bold">
              {result} جم {toFood.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}