import Image from 'next/image';

type CoupleCard = {
	name: string;
	parents: string;
	instagram: string;
	photo: string;
};

type CoupleSectionProps = {
	bride: CoupleCard;
	groom: CoupleCard;
};

type CoupleItemProps = CoupleCard & { label: string };

function CoupleItem({
	label,
	name,
	parents,
	instagram,
	photo,
}: CoupleItemProps) {
	return (
		<div className="glass-card flex flex-col gap-4 rounded-3xl px-6 py-8">
			<p className="text-xs uppercase tracking-[0.2em] text-[#b18b62]">
				{label}
			</p>
			<div className="relative h-48 w-full overflow-hidden rounded-2xl">
				<Image
					src={photo}
					alt={name}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</div>
			<h3 className="font-display text-3xl text-[#2a2118]">{name}</h3>
			<p className="text-sm text-[#6d5f50]">{parents}</p>
			<a
				href={instagram}
				target="_blank"
				rel="noreferrer"
				className="text-xs uppercase tracking-[0.25em] text-[#b18b62]"
			>
				Instagram
			</a>
		</div>
	);
}

export function CoupleSection({ bride, groom }: CoupleSectionProps) {
	return (
		<section className="px-6 pb-16 md:px-14">
			<div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
				<div className="flex flex-col gap-3 text-center">
					<p className="text-xs uppercase tracking-[0.3em] text-[#b18b62]">
						The Groom & The Bride
					</p>
					<h2 className="font-display text-4xl text-[#2a2118] md:text-5xl">
						Couple Profile
					</h2>
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					<CoupleItem label="The Groom" {...groom} />
					<CoupleItem label="The Bride" {...bride} />
				</div>
			</div>
		</section>
	);
}
