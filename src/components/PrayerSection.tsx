type PrayerSectionProps = {
	arabic: string;
	translation: string;
	source: string;
};

export function PrayerSection({
	arabic,
	translation,
	source,
}: PrayerSectionProps) {
	return (
		<section className="px-6 pb-16 md:px-14 lg:pb-20">
			<div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2.4rem] border border-[#eadbc7] bg-[linear-gradient(180deg,#fbf6ef_0%,#f3eadf_100%)] shadow-[0_28px_70px_rgba(63,45,24,0.08)]">
				<div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:px-12 lg:py-12">
					<div className="flex flex-col justify-between gap-6">
						<div className="space-y-4">
							<p className="text-xs uppercase tracking-[0.32em] text-[#b18b62]">
								Prayer
							</p>
							<h2 className="font-display text-4xl leading-tight text-[#2a2118] md:text-5xl">
								Doa Pengantin
							</h2>
							<p className="max-w-md text-base leading-8 text-[#5f4e42] sm:text-[1.05rem] sm:leading-9 lg:text-lg lg:leading-9">
								Semoga rumah tangga yang dibangun selalu dipenuhi sakinah,
								mawaddah, rahmah, serta menjadi tempat tumbuhnya kasih sayang
								dan kebaikan.
							</p>
						</div>
					</div>
					<div className="rounded-[1.5rem] border border-[#ede1d2] bg-[#fffaf4] px-5 py-6 text-center sm:px-8 sm:py-8 lg:px-10 lg:py-10">
						<p className="font-display text-2xl leading-[1.9] text-[#3c3025] sm:text-3xl sm:leading-[2.1]">
							{arabic}
						</p>
						<div className="mx-auto mt-6 h-px w-24 bg-[linear-gradient(90deg,transparent,#d3b792,transparent)]" />
						<p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#6d5f50] sm:text-base sm:leading-9 lg:text-[1.05rem]">
							{translation}
						</p>
						<p className="mt-6 text-xs uppercase tracking-[0.28em] text-[#b18b62]">
							{source}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
