type EventItem = {
	title: string;
	date: string;
	time: string;
	location: string;
	address: string;
	mapsUrl: string;
};

type EventSectionProps = {
	events: EventItem[];
	mapsEmbedUrl: string;
};

export function EventSection({ events, mapsEmbedUrl }: EventSectionProps) {
	return (
		<section className="px-6 pb-16 md:px-14 lg:pb-20" id="events">
			<div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2.4rem] border border-[#eadbc7] bg-[linear-gradient(180deg,#fbf6ef_0%,#f3eadf_100%)] shadow-[0_28px_70px_rgba(63,45,24,0.08)]">
				<div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
					<div className="space-y-4">
						<p className="text-xs uppercase tracking-[0.32em] text-[#b18b62]">
							Save The Date
						</p>
						<h2 className="font-display text-4xl leading-tight text-[#2a2118] md:text-5xl">
							Event Details
						</h2>
						<p className="max-w-xl text-base leading-8 text-[#5f4e42] sm:text-[1.05rem] sm:leading-9">
							Dengan penuh kebahagiaan, kami mengundang Anda untuk hadir dan
							menjadi bagian dari hari yang kami nantikan.
						</p>
					</div>

					<div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12">
						<div className="grid gap-4">
							{events.map((event) => (
								<article
									key={event.title}
									className="rounded-[1.8rem] border border-[#e6d7c3] bg-[rgba(255,251,245,0.8)] p-5 shadow-[0_16px_40px_rgba(67,46,24,0.06)] sm:p-6"
								>
									<p className="text-xs uppercase tracking-[0.24em] text-[#b18b62]">
										Main Celebration
									</p>
									<h3 className="mt-3 font-display text-3xl text-[#2a2118] sm:text-[2.2rem]">
										{event.title}
									</h3>

									<div className="mt-5 grid gap-3 sm:grid-cols-2">
										<div className="rounded-[1.3rem] border border-[#ecdfd0] bg-[#fffaf4] px-4 py-4">
											<p className="text-[10px] uppercase tracking-[0.24em] text-[#b18b62]">
												Date
											</p>
											<p className="mt-2 text-sm font-semibold text-[#3a2d22] sm:text-base">
												{event.date}
											</p>
										</div>
										<div className="rounded-[1.3rem] border border-[#ecdfd0] bg-[#fffaf4] px-4 py-4">
											<p className="text-[10px] uppercase tracking-[0.24em] text-[#b18b62]">
												Time
											</p>
											<p className="mt-2 text-sm font-semibold text-[#3a2d22] sm:text-base">
												{event.time}
											</p>
										</div>
									</div>

									<div className="mt-4 rounded-[1.3rem] border border-[#ecdfd0] bg-[#fffaf4] px-4 py-4">
										<p className="text-[10px] uppercase tracking-[0.24em] text-[#b18b62]">
											Venue
										</p>
										<p className="mt-2 text-base font-semibold text-[#2a2118]">
											{event.location}
										</p>
										<p className="mt-2 text-sm leading-7 text-[#6d5f50]">
											{event.address}
										</p>
									</div>

									<div className="mt-5 flex flex-wrap gap-3">
										<a
											href={event.mapsUrl}
											target="_blank"
											rel="noreferrer"
											className="rounded-full border border-[#c9a67b] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#6d5f50] transition hover:bg-[#b18b62] hover:text-white"
										>
											Open Maps
										</a>
									</div>
								</article>
							))}
						</div>

						<div className="flex flex-col gap-4 lg:self-start">
							<div className="overflow-hidden rounded-[1.9rem] border border-[#e6d7c2] bg-[rgba(255,251,246,0.8)] p-3 shadow-[0_16px_40px_rgba(67,46,24,0.06)] sm:p-4">
								<div className="overflow-hidden rounded-[1.4rem]">
									<iframe
										className="h-[320px] w-full border-0 sm:h-[380px]"
										title="Wedding Location"
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										src={mapsEmbedUrl}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
