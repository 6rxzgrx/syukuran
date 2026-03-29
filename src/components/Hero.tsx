import Image from 'next/image';

type HeroProps = {
	title: string;
	names: string;
	dateDisplay: string;
};

export function Hero({ title, names, dateDisplay }: HeroProps) {
	return (
		<section className="px-6 pb-12 pt-16 md:px-10 lg:px-14 lg:pb-18 lg:pt-20">
			<div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:gap-16 xl:gap-20">
				<div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
					<p className="text-xs uppercase tracking-[0.34em] text-[#b18b62] lg:text-sm">
						{title}
					</p>
					<h1 className="mt-4 font-display text-5xl leading-[0.95] text-[#2a2118] sm:text-6xl lg:max-w-[12ch] lg:text-7xl xl:text-[5.5rem]">
						{names}
					</h1>
					<p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#7b6957] sm:text-base lg:text-lg">
						{dateDisplay}
					</p>
					<div className="mt-8 hidden h-px w-28 bg-[linear-gradient(90deg,#d4b892,transparent)] lg:block" />
				</div>

				<div className="order-1 lg:order-2">
					<div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#f2e6d8] shadow-[0_24px_60px_rgba(56,39,20,0.14)] sm:max-w-md lg:max-w-none lg:rounded-[2.4rem]">
						<div className="relative aspect-[4/5]">
							<Image
								src="/images/cover.jpg"
								alt="Wedding portrait"
								fill
								priority
								sizes="(max-width: 1024px) 100vw, 42vw"
								className="object-cover object-center"
							/>
							<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,242,0.08),rgba(73,56,38,0.14))]" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
