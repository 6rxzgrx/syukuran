'use client';

import { Suspense, useState } from 'react';
import { weddingData } from '@/data/wedding';
import { AudioPlayer } from '@/components/AudioPlayer';
import { Cover } from '@/components/Cover';
import { Hero } from '@/components/Hero';
import { QuoteCountdown } from '@/components/QuoteCountdown';
import { CoupleSection } from '@/components/CoupleSection';
import { EventSection } from '@/components/EventSection';
import { GallerySection } from '@/components/GallerySection';
import { PrayerSection } from '@/components/PrayerSection';
import { Footer } from '@/components/Footer';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const nickNames = `${weddingData.couple.groom.nickname} & ${weddingData.couple.bride.nickname}`;

	return (
		<div className="flex min-h-screen flex-col">
			{!isOpen && (
				<Suspense
					fallback={
						<div className="flex min-h-screen w-full items-center justify-center px-6">
							<div className="glass-card fade-in flex w-full max-w-sm flex-col items-center gap-5 rounded-3xl px-8 py-10 text-center">
								<div className="invitation-loader" aria-hidden="true" />
								<p className="text-xs uppercase tracking-[0.3em] text-[#b18b62]">
									Loading Invitation
								</p>
								<div
									className="flex items-center justify-center gap-2 text-[#b18b62]"
									aria-hidden="true"
								>
									<span className="loading-dot [animation-delay:-0.3s]" />
									<span className="loading-dot [animation-delay:-0.15s]" />
									<span className="loading-dot" />
								</div>
							</div>
						</div>
					}
				>
					<Cover
						coupleNames={nickNames}
						dateDisplay={weddingData.dateDisplay}
						onOpen={handleOpen}
					/>
				</Suspense>
			)}

			{isOpen && (
				<main className="flex flex-col">
					<Hero
						title={weddingData.couple.title}
						names={nickNames}
						dateDisplay={weddingData.dateDisplay}
					/>
					<QuoteCountdown
						targetDate={weddingData.eventDate}
						quote={weddingData.quote.translation}
						source={weddingData.quote.source}
					/>
					<CoupleSection
						bride={{
							name: weddingData.couple.bride.name,
							parents: weddingData.couple.bride.parents,
							instagram: weddingData.couple.bride.instagram,
							photo: weddingData.couple.bride.photo,
						}}
						groom={{
							name: weddingData.couple.groom.name,
							parents: weddingData.couple.groom.parents,
							instagram: weddingData.couple.groom.instagram,
							photo: weddingData.couple.groom.photo,
						}}
					/>
					<EventSection
						events={weddingData.events}
						mapsEmbedUrl={weddingData.mapsEmbedUrl}
					/>
					<GallerySection images={weddingData.gallery} />
					<PrayerSection
						arabic={weddingData.prayer.arabic}
						translation={weddingData.prayer.translation}
						source={weddingData.prayer.source}
					/>
					<Footer
						nickNames={nickNames}
						dateDisplay={weddingData.dateDisplay}
						thankYou={weddingData.thankYou}
					/>
				</main>
			)}

			<AudioPlayer src={weddingData.audioSrc} isActive={isOpen} />
		</div>
	);
}
