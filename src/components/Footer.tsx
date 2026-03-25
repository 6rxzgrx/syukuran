 type FooterProps = {
  coupleNames: string;
  thankYou: string;
};

export function Footer({ coupleNames, thankYou }: FooterProps) {
  return (
    <footer className="px-6 pb-20 md:px-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#b18b62]">
          With Love
        </p>
        <h2 className="font-display text-4xl text-[#2a2118] md:text-5xl">
          Terima Kasih
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-[#6d5f50]">{thankYou}</p>
        <div className="text-sm uppercase tracking-[0.35em] text-[#b18b62]">
          {coupleNames}
        </div>
      </div>
    </footer>
  );
}
