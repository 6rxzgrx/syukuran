 type HeroProps = {
  title: string;
  names: string;
  dateDisplay: string;
};

export function Hero({ title, names, dateDisplay }: HeroProps) {
  return (
    <section className="px-6 pb-12 pt-16 md:px-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#b18b62]">
          {title}
        </p>
        <h2 className="font-display text-5xl text-[#2a2118] md:text-6xl">
          {names}
        </h2>
        <p className="text-sm uppercase tracking-[0.3em] text-[#7b6957]">
          {dateDisplay}
        </p>
      </div>
    </section>
  );
}
