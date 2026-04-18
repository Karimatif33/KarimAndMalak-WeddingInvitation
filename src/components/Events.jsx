import { motion } from "framer-motion";
import { CalendarHeart, Sparkles } from "lucide-react";
import FadeSection from "./FadeSection";

export default function Events({ t }) {
  const eventCards = [
    {
      icon: CalendarHeart,
      title: t.day1,
      date: t.day1Date,
      time: t.day1Time,
      copy: t.day1Text,
    },
    {
      icon: Sparkles,
      title: t.day2,
      date: t.day2Date,
      time: t.day2Time,
      copy: t.day2Text,
    },
  ];

  return (
    <FadeSection>
      <section className="section-card" id="events">
        <div className="section-inner">
          <div className="invitation-panel mb-8 max-w-3xl">
            <div className="mx-auto flex justify-center">
              <p className="eyebrow">{t.events}</p>
            </div>
            <h2 className="section-title">Join us across two joyful celebrations.</h2>
            <p className="section-copy mx-auto">
              From the warmth of henna night to the magic of the wedding
              ceremony, each gathering is part of the story we want to share
              with you.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {eventCards.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.article
                  key={event.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="soft-highlight rounded-[1.9rem] border border-[rgba(120,86,66,0.14)] bg-white/55 p-6 text-center shadow-[0_18px_40px_rgba(55,30,18,0.08)]"
                >
                  <div className="mb-6 flex flex-col items-center justify-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(242,217,209,0.55)] text-[#8a5f63]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a5f63]">
                      Event {index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl text-[#2b1f1a]">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#8a5f63]">
                    {event.date}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#2e2622]">
                    {event.time}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[#6f5e58]">
                    {event.copy}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
