'use client';

import Image from 'next/image';

type GallerySectionProps = {
	images: string[];
};

export function GallerySection({ images }: GallerySectionProps) {
	return (
		<section className="px-6 pb-16 md:px-14">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
				<div className="flex flex-col gap-3 text-center">
					<p className="text-xs uppercase tracking-[0.3em] text-[#b18b62]">
						Gallery
					</p>
					<h2 className="font-display text-4xl text-[#2a2118] md:text-5xl">
						Moments In Bloom
					</h2>
				</div>
				<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:auto-rows-[170px]">
					{images.map((src, index) => (
						<div
							key={`${src}-${index}`}
							className={`relative overflow-hidden rounded-2xl ${
								index === 0
									? 'aspect-square lg:col-span-2 lg:row-span-2 lg:aspect-auto'
									: index === 3
										? 'aspect-square lg:col-span-2 lg:row-span-2 lg:aspect-auto'
										: 'aspect-square'
							}`}
						>
							<Image
								src={src}
								alt={`Gallery ${index + 1}`}
								fill
								className="object-cover transition duration-500 hover:scale-[1.03]"
								sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
