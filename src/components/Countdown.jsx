import { useEffect, useState } from "react";
import FadeSection from "./FadeSection";

const weddingDate = new Date("2027-08-27T22:00:00+03:00");

function getTimeLeft(targetDate) {
  const diff = Math.max(targetDate - new Date(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ t }) {
  const [time, setTime] = useState(() => getTimeLeft(weddingDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft(weddingDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  const timeUnits = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <FadeSection>
      <section className="section-card">
        <div className="section-inner">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="invitation-panel">
              <div className="mx-auto flex justify-center">
                <p className="eyebrow">{t.countdown}</p>
              </div>
              <h2 className="section-title">Counting down to our wedding night.</h2>
              <p className="section-copy mx-auto">{t.countdownText}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="rounded-[1.75rem] border border-[rgba(120,86,66,0.14)] bg-white/55 p-5 text-center shadow-[0_14px_35px_rgba(55,30,18,0.08)]"
                >
                  <div className="font-serif text-4xl text-[#2b1f1a] sm:text-5xl">
                    {String(unit.value).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.28em] text-[#8a5f63]">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
