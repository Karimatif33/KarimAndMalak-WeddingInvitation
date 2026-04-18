import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import FadeSection from "./FadeSection";

export default function Location({ t }) {
  return (
    <FadeSection>
      <section className="section-card" id="location">
        <div className="section-inner">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="invitation-panel">
              <div className="mx-auto flex justify-center">
                <p className="eyebrow">{t.location}</p>
              </div>
              <h2 className="section-title">Celebrate with us in Mansoura.</h2>
              <p className="section-copy mx-auto">{t.locationText}</p>

              <div className="soft-highlight mx-auto mt-8 max-w-xl rounded-[1.75rem] border border-[rgba(120,86,66,0.14)] bg-white/55 p-5">
                <div className="flex flex-col items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#8a5f63]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#8a5f63]">
                      Address
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#2e2622]">
                      {t.address}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps?q=31.436944,31.55175"
                target="_blank"
                rel="noreferrer"
                className="pill-button pill-button-primary mt-6"
              >
                <Navigation className="mr-2 h-4 w-4" />
                {t.mapLabel}
              </a>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-[2rem] border border-[rgba(120,86,66,0.14)] shadow-[0_22px_50px_rgba(55,30,18,0.12)]"
            >
              <iframe
                title="Golden Gates Wedding Hall map"
                src="https://www.google.com/maps?q=31.436944,31.55175&output=embed"
                className="h-[320px] w-full sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
