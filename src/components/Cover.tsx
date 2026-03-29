import Image from 'next/image';

type CoverProps = {
	coupleNames: string;
	dateDisplay: string;
	onOpen: () => void;
};

export function Cover({ coupleNames, dateDisplay, onOpen }: CoverProps) {
	const names = coupleNames
		.split(' & ')
		.map((name) => name.trim())
		.filter(Boolean);

	return (
		<section className="relative flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-[#e7e0d4] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
			<div className="absolute inset-0">
				<div className="absolute inset-0 opacity-85">
					<Image
						src="/images/cover.jpg"
						alt=""
						fill
						priority
						sizes="100vw"
						className="scale-[2.3] object-cover object-center brightness-[0.8] sepia-[0.15] md:scale-100 md:object-center"
					/>
				</div>
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,241,230,0.18)_0%,rgba(243,236,225,0.42)_26%,rgba(229,220,204,0.68)_100%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,250,241,0.92),transparent_34%),radial-gradient(circle_at_bottom,rgba(37,56,35,0.2),transparent_30%)]" />
				<div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,248,236,0.9),transparent)]" />
				<div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(0deg,rgba(58,79,48,0.5),transparent)]" />
			</div>

			<div className="relative z-10 mx-auto flex w-full max-w-6xl justify-center">
				<div className="glass-card relative flex min-h-[70vh] w-full max-w-[20rem] flex-col items-center justify-center overflow-hidden rounded-t-[20rem] rounded-b-[20rem] border border-white/50 bg-[rgba(255,248,240,0.74)] px-6 py-10 text-center shadow-[0_30px_80px_rgba(51,39,25,0.14)] backdrop-blur-[10px] sm:min-h-[68vh] sm:max-w-[24rem] sm:px-8 sm:py-12 lg:min-h-[46rem] lg:max-w-[34rem] lg:px-12 lg:py-16">
					<div className="mt-6 space-y-4 lg:space-y-5">
						<h1 className="font-display text-5xl leading-none text-[#556b5d] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
							{names.map((name, index) => (
								<span key={name} className="block">
									{name}
									{index < names.length - 1 ? (
										<span className="my-2 block text-3xl sm:text-4xl lg:text-5xl">
											&amp;
										</span>
									) : null}
								</span>
							))}
						</h1>
					</div>

					<p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#7d6a56] sm:text-sm lg:text-base">
						{dateDisplay}
					</p>

					<button
						type="button"
						onClick={onOpen}
						className="mt-10 rounded-full bg-[#5f7668] px-9 py-3 text-sm font-semibold tracking-[0.22em] text-white shadow-[0_16px_35px_rgba(66,90,76,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4f6558] hover:shadow-[0_20px_40px_rgba(66,90,76,0.38)] lg:px-10 lg:py-3.5"
					>
						Open Invitation
					</button>
				</div>
			</div>
		</section>
	);
}
