'use client';

import { useState } from 'react';
import { weddingData } from '@/data/wedding';
import { AudioPlayer } from '@/components/AudioPlayer';
import { Cover } from '@/components/Cover';
import { Hero } from '@/components/Hero';
import { QuoteCountdown } from '@/components/QuoteCountdown';
import { CoupleSection } from '@/components/CoupleSection';
import { EventSection } from '@/components/EventSection';
import { LoveStorySection } from '@/components/LoveStorySection';
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

	const coupleNames = `${weddingData.couple.groom.nickname} & ${weddingData.couple.bride.nickname}`;

	return (
		<div className="flex min-h-screen flex-col">
			{!isOpen && (
				<Cover
					coupleNames={coupleNames}
					dateDisplay={weddingData.dateDisplay}
					onOpen={handleOpen}
				/>
			)}

			{isOpen && (
				<main className="flex flex-col">
					<Hero
						title={weddingData.couple.title}
						names={coupleNames}
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
					<LoveStorySection story={weddingData.story} />
					<GallerySection images={weddingData.gallery} />
					<PrayerSection
						arabic={weddingData.prayer.arabic}
						translation={weddingData.prayer.translation}
						source={weddingData.prayer.source}
					/>
					<Footer coupleNames={coupleNames} thankYou={weddingData.thankYou} />
				</main>
			)}

			<AudioPlayer src={weddingData.audioSrc} isActive={isOpen} />
		</div>
	);
}
