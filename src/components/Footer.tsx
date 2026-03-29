type FooterProps = {
	nickNames: string;
	dateDisplay: string;
	thankYou: string;
};

export function Footer({ nickNames, dateDisplay, thankYou }: FooterProps) {
	return (
		<footer className="px-6 pb-20 md:px-14 lg:pb-24">
			<div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2.4rem] border border-[#eadbc7] bg-[linear-gradient(180deg,#fbf6ef_0%,#f3eadf_100%)] shadow-[0_28px_70px_rgba(63,45,24,0.08)]">
				<div className="grid gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-12 lg:py-14">
					<div className="text-center lg:text-left">
						<p className="text-xs uppercase tracking-[0.32em] text-[#b18b62]">
							Terimakasih
						</p>
						<p className="mt-4 max-w-2xl text-base leading-8 text-[#5f4e42] sm:text-[1.05rem] sm:leading-9 lg:text-lg lg:leading-9">
							{thankYou}
						</p>
					</div>

					<div className="flex flex-col items-center gap-6 text-center lg:items-end lg:text-right">
						<div className="h-px w-24 bg-[linear-gradient(90deg,transparent,#d3b792,transparent)] lg:w-36" />
						<h2 className="font-display text-4xl leading-tight text-[#2a2118] sm:text-5xl lg:max-w-[10ch] lg:text-6xl">
							{nickNames}
						</h2>
						<p className="text-sm uppercase tracking-[0.3em] text-[#8b725a] sm:text-base">
							{dateDisplay}
						</p>
						<p className="font-display text-3xl leading-none text-[#6a4d32] sm:text-4xl">
							Wassalamu&apos;alaikum Wr. Wb.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
