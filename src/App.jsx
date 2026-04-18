import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import StartScreen from "./components/StartScreen";
import Background from "./components/Background";

import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Story from "./components/Story";
import Events from "./components/Events";
import Location from "./components/Location";

import useLang from "./hooks/useLang";

function App() {
  const [start, setStart] = useState(true);
  const { t } = useLang();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence>
        {start && <StartScreen onFinish={() => setStart(false)} />}
      </AnimatePresence>

      {!start && (
        <>
          <Background />
          <main className="relative z-10">
            <Hero t={t} />
            <div className="page-shell">
              <Countdown t={t} />
              <Story t={t} />
              <Events t={t} />
              <Location t={t} />
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
