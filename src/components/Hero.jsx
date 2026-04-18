import { motion } from "framer-motion";
import { CalendarDays, Heart, MapPin } from "lucide-react";

export default function Hero({ t }) {
  return (
    <section className="relative flex min-h-screen items-center px-4 pb-10 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="section-card"
        >
          <div className="ornament left-0 top-8 h-36 w-36 bg-[rgba(242,217,209,0.45)]" />
          <div className="ornament bottom-4 right-0 h-40 w-40 bg-[rgba(182,144,85,0.22)]" />

          <div className="section-inner flex min-h-[32rem] flex-col justify-between gap-10 lg:min-h-[38rem] lg:p-12">
            <div className="invitation-panel max-w-3xl">
              <div className="mx-auto flex justify-center">
                <p className="eyebrow">{t.inviteLabel}</p>
              </div>
              <h1
                className="font-serif text-5xl leading-none text-[#2b1f1a] sm:text-6xl lg:text-8xl"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {t.names}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6f5e58] sm:text-lg">
                {t.heroIntro}
              </p>
            </div>

            <div className="grid gap-4 text-center md:grid-cols-3">
              <div className="soft-highlight rounded-[1.5rem] border border-[rgba(120,86,66,0.14)] bg-white/50 p-5">
                <CalendarDays className="mx-auto mb-3 h-5 w-5 text-[#8a5f63]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[#8a5f63]">
                  Date
                </p>
                <p className="mt-2 text-lg font-semibold text-[#2e2622]">
                  {t.date}
                </p>
                <p className="mt-1 text-sm text-[#6f5e58]">{t.time}</p>
              </div>

              <div className="soft-highlight rounded-[1.5rem] border border-[rgba(120,86,66,0.14)] bg-white/50 p-5">
                <MapPin className="mx-auto mb-3 h-5 w-5 text-[#8a5f63]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[#8a5f63]">
                  Venue
                </p>
                <p className="mt-2 text-lg font-semibold text-[#2e2622]">
                  {t.venue}
                </p>
              </div>

              <div className="soft-highlight rounded-[1.5rem] border border-[rgba(120,86,66,0.14)] bg-white/50 p-5">
                <Heart className="mx-auto mb-3 h-5 w-5 text-[#8a5f63]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[#8a5f63]">
                  Celebration
                </p>
                <p className="mt-2 text-lg font-semibold text-[#2e2622]">
                  Elegant Night
                </p>
                <p className="mt-1 text-sm text-[#6f5e58]">
                  Ceremony, dinner, and dancing
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a className="pill-button pill-button-primary" href="#events">
                {t.ctaPrimary}
              </a>
              <a className="pill-button pill-button-secondary" href="#location">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="section-card"
        >
          <div className="section-inner invitation-panel soft-highlight flex h-full min-h-[20rem] flex-col justify-between gap-8 lg:min-h-[30rem]">
            <div>
              <div className="mx-auto flex justify-center">
                <p className="eyebrow">Save The Date</p>
              </div>
              <p className="font-serif text-3xl leading-tight text-[#2b1f1a] sm:text-4xl">
                A golden evening to celebrate love and new beginnings.
              </p>
            </div>

            <div className="mx-auto w-full max-w-xs rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,245,239,0.5))] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8a5f63]">
                Friday Night
              </p>
              <p className="mt-3 text-4xl font-semibold text-[#2e2622] sm:text-5xl">
                27
              </p>
              <p className="mt-1 text-base text-[#6f5e58]">August 2027</p>
            </div>

            <p className="text-sm leading-7 text-[#6f5e58]">
              Dress beautifully, arrive with joy, and be part of a night we
              will remember forever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
