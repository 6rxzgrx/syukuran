 type PrayerSectionProps = {
  arabic: string;
  translation: string;
  source: string;
};

export function PrayerSection({ arabic, translation, source }: PrayerSectionProps) {
  return (
    <section className="px-6 pb-16 md:px-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#b18b62]">
          Prayer
        </p>
        <div className="glass-card flex flex-col gap-4 rounded-3xl px-6 py-8">
          <p className="font-display text-2xl text-[#2a2118] md:text-3xl">
            {arabic}
          </p>
          <p className="text-sm text-[#6d5f50]">{translation}</p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#b18b62]">
            {source}
          </p>
        </div>
      </div>
    </section>
  );
}
