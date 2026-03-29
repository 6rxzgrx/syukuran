'use client';

import { useEffect, useState } from 'react';

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
	return value.toString().padStart(2, '0');
}

export function QuoteCountdown({
	targetDate,
	quote,
	source,
}: QuoteCountdownProps) {
	const [countdown, setCountdown] = useState(() => getCountdown(targetDate));

	useEffect(() => {
		const timer = setInterval(
			() => setCountdown(getCountdown(targetDate)),
			1000,
		);
		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<section className="px-6 pb-16 md:px-10 lg:px-14 lg:pb-20">
			<div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2.2rem] border border-[#eadcc8] bg-[linear-gradient(180deg,#fbf6ef_0%,#f5ede2_100%)] shadow-[0_24px_60px_rgba(70,47,24,0.08)]">
				<div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end lg:gap-12 lg:px-12 lg:py-12">
					<div className="relative">
						<p className="text-xs uppercase tracking-[0.34em] text-[#b18b62]">
							A Sacred Beginning
						</p>
						<p className="font-display mt-4 max-w-3xl text-[2rem] leading-[1.22] text-[#3d2f23] sm:text-[2.4rem] lg:text-[2.8rem]">
							&ldquo;{quote}&rdquo;
						</p>
						<p className="mt-4 text-sm uppercase tracking-[0.28em] text-[#8b725a]">
							{source}
						</p>
					</div>

					<div className="relative rounded-[1.8rem] border border-[#e4d4bf] bg-[rgba(255,252,247,0.72)] p-5 sm:p-6">
						<div className="flex items-center justify-between gap-4 border-b border-[#eadcc8] pb-4">
							<div>
								<p className="text-xs uppercase tracking-[0.28em] text-[#b18b62]">
									Counting Down
								</p>
								{/* <p className="mt-2 font-display text-2xl text-[#2a2118] sm:text-3xl">
                  Until We Celebrate
                </p> */}
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
							{[
								{ label: 'Hari', value: countdown.days },
								{ label: 'Jam', value: countdown.hours },
								{ label: 'Menit', value: countdown.minutes },
								{ label: 'Detik', value: countdown.seconds },
							].map((item) => (
								<div
									key={item.label}
									className="rounded-[1.4rem] border border-[#ebdfcf] bg-[#fffaf4] px-3 py-4 text-center sm:px-4 sm:py-5"
								>
									<div className="font-display text-3xl leading-none text-[#2a2118] sm:text-4xl">
										{formatNumber(item.value)}
									</div>
									<div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#b18b62] sm:text-xs sm:tracking-[0.3em]">
										{item.label}
									</div>
								</div>
							))}
						</div>

						<div className="mt-6 flex justify-center lg:justify-start">
							<a
								href="https://calendar.google.com/calendar/u/0/r/eventedit"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-[#c9a67b] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#6d5f50] transition hover:bg-[#b18b62] hover:text-white"
							>
								Save To Calendar
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
