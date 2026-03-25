"use client";

import { useEffect, useState } from "react";

type QuoteCountdownProps = {
  targetDate: string;
  quote: string;
  source: string;
};

function getCountdown(targetDate: string) {
  const now = Date.now();
  const target = new Date(targetDate).getTime();
  const diff = Math.max(target - now, 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function formatNumber(value: number) {
  return value.toString().padStart(2, "0");
}

export function QuoteCountdown({ targetDate, quote, source }: QuoteCountdownProps) {
  const [countdown, setCountdown] = useState(() => getCountdown(targetDate));

  useEffect(() => {
    const timer = setInterval(
      () => setCountdown(getCountdown(targetDate)),
      1000
    );
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="px-6 pb-16 md:px-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="glass-card flex flex-col gap-4 rounded-3xl px-6 py-8 text-center">
          <p className="font-display text-2xl text-[#2a2118] md:text-3xl">
            {quote}
          </p>
          <p className="text-sm text-[#6d5f50]">{source}</p>
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {[
            { label: "Hari", value: countdown.days },
            { label: "Jam", value: countdown.hours },
            { label: "Menit", value: countdown.minutes },
            { label: "Detik", value: countdown.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card flex flex-col items-center gap-1 rounded-2xl px-3 py-4 text-center sm:gap-2 sm:px-5 sm:py-6"
            >
              <div className="font-display text-2xl text-[#2a2118] sm:text-4xl">
                {formatNumber(item.value)}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#b18b62] sm:text-xs sm:tracking-[0.3em]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#b18b62] px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#6d5f50] transition hover:bg-[#b18b62] hover:text-white"
          >
            Save To Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
