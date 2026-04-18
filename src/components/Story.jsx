import FadeSection from "./FadeSection";

export default function Story({ t }) {
  return (
    <FadeSection>
      <section className="section-card">
        <div className="section-inner text-center">
          <p className="eyebrow">{t.story}</p>
          <h2 className="section-title mx-auto max-w-3xl">
            A love story written with patience, laughter, and a beautiful future
            ahead.
          </h2>
          <p className="section-copy mx-auto">{t.storyText}</p>
        </div>
      </section>
    </FadeSection>
  );
}
