"use client";
import React, { useState } from "react";

type Item = {
  id: string;
  title: string;
  time: string;
  desc: string;
  tags: string[];
  color?: string;
};

const ITEMS: Item[] = [
  {
    id: "day1",
    title: "Day 1",
    time: "Oct 15 • 09:00 - 12:00",
    desc: "Kickoff & opening ceremony with keynote, sponsor intros, and team formation activities to set you up for the hack.",
    tags: ["Keynotes", "Team Formation"],
    color: "from-primary to-primary/60",
  },
  {
    id: "day2",
    title: "Day 2",
    time: "Oct 16 • 09:00 - 21:00",
    desc: "Full hacking day with mentor office hours, focused workshops, and checkpoints to keep teams on track.",
    tags: ["Workshops", "Mentorship"],
    color: "from-secondary to-secondary/60",
  },
  {
    id: "day3",
    title: "Day 3",
    time: "Oct 17 • 10:00 - 16:00",
    desc: "Project demos, judging sessions, and the awards ceremony — celebrate the winners and future plans.",
    tags: ["Demos", "Awards"],
    color: "from-amber-500 to-amber-300",
  },
];

export default function ScheduleTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-transparent to-muted/5">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Event Schedule</h2>
          <p className="mt-4 text-lg text-muted-foreground">The 48-hour journey — curated moments to learn, build, and celebrate.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Vertical tabs (floating) */}
          <nav className="order-2 md:order-1 md:col-span-1 flex md:flex-col items-start gap-3 md:sticky md:top-28">
            {ITEMS.map((it, i) => (
              <button
                key={it.id}
                onClick={() => setActive(i)}
                className={`w-full md:w-48 text-left px-4 py-3 rounded-lg border transition-transform duration-300 ease-out transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-primary ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-lg -translate-x-1 md:-translate-x-0"
                    : "bg-background"
                }`}
                aria-current={active === i}
                aria-controls={`panel-${it.id}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-b ${it.color} text-white`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v4l3 2"></path>
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{it.title}</div>
                    <div className="text-xs text-muted-foreground">{it.time}</div>
                  </div>
                </div>
              </button>
            ))}
          </nav>

          {/* Content panel */}
          <div className="order-1 md:order-2 md:col-span-2">
            {ITEMS.map((it, i) => (
              <article
                key={it.id}
                id={`panel-${it.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${it.id}`}
                className={`mb-6 rounded-xl border bg-card p-4 sm:p-6 shadow-lg transition-transform duration-500 ease-out overflow-hidden ${
                  active === i ? "translate-x-0 opacity-100" : "translate-x-6 opacity-30 pointer-events-none"
                }`}
                style={{ willChange: "transform, opacity" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{it.title} <span className="text-sm text-muted-foreground">• {it.time}</span></h3>
                    <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {it.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full bg-muted/10 px-3 py-1 text-xs font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
