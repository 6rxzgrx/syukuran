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
		<article className="rounded-[1.8rem] border border-[#e7d8c3] bg-[rgba(255,251,245,0.8)] p-4 shadow-[0_16px_40px_rgba(67,46,24,0.06)] sm:p-5 lg:p-6">
			<p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#b18b62]">
				{label}
			</p>
			<div className="mt-4 overflow-hidden rounded-[1.5rem] bg-[#eee2d0]">
				<div className="relative aspect-[4/5] w-full lg:aspect-[5/6]">
					<Image
						src={photo}
						alt={name}
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 26vw"
					/>
				</div>
			</div>
			<div className="mt-5 text-center">
				<h3 className="font-display text-3xl leading-tight text-[#2a2118] sm:text-[2.2rem] lg:text-[2.45rem]">
					{name}
				</h3>
				<p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#6d5f50] lg:text-base lg:leading-8">
					{parents}
				</p>
				<a
					href={instagram}
					target="_blank"
					rel="noreferrer"
					className="mt-5 inline-flex rounded-full border border-[#d9bf9a] px-5 py-2 text-xs uppercase tracking-[0.22em] text-[#b18b62] transition hover:bg-[#fbf4ea]"
				>
					Instagram
				</a>
			</div>
		</article>
	);
}

export function CoupleSection({ bride, groom }: CoupleSectionProps) {
	return (
		<section className="px-6 pb-16 md:px-14 lg:pb-20">
			<div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2.4rem] border border-[#eadbc7] bg-[linear-gradient(180deg,#fbf6ef_0%,#f3eadf_100%)] shadow-[0_28px_70px_rgba(63,45,24,0.08)]">
				<div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-12 lg:px-12 lg:py-12">
					<div className="flex flex-col justify-between gap-8">
						<div className="space-y-4">
							<p className="text-xs uppercase tracking-[0.32em] text-[#b18b62]">
								The Groom &amp; The Bride
							</p>
							<h2 className="font-display text-4xl leading-tight text-[#6a4d32] md:text-5xl">
								Assalamu&apos;alaikum Wr. Wb.
							</h2>
							<div className="h-px w-24 bg-[linear-gradient(90deg,#d4b892,transparent)]" />
							<p className="max-w-xl text-base leading-8 text-[#5f4e42] sm:text-[1.05rem] sm:leading-9 lg:text-lg lg:leading-9">
								Dengan memohon Rahmat &amp; Ridho Allah SWT, kami bermaksud
								mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara syukuran
								pernikahan kami.
							</p>
						</div>
					</div>

					<div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
						<CoupleItem label="The Groom" {...groom} />
						<CoupleItem label="The Bride" {...bride} />
					</div>
				</div>
			</div>
		</section>
	);
}
