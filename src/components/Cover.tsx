'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

type CoverProps = {
	coupleNames: string;
	dateDisplay: string;
	onOpen: () => void;
};

export function Cover({ coupleNames, dateDisplay, onOpen }: CoverProps) {
	const searchParams = useSearchParams();
	const guest = useMemo(() => {
		const raw = searchParams.get('to');
		if (!raw) return '';
		try {
			return decodeURIComponent(raw);
		} catch {
			return raw;
		}
	}, [searchParams]);

	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
			<div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#e8d6c1] opacity-40 blur-3xl" />
			<div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#e1c9ab] opacity-40 blur-3xl" />

			<div className="glass-card flex w-full max-w-xl flex-col items-center gap-6 rounded-3xl px-8 py-12 text-center">
				<p className="text-xs uppercase tracking-[0.4em] text-[#b18b62]">
					Wedding Invitation
				</p>
				<div className="space-y-2">
					<p className="text-xs uppercase tracking-[0.3em] text-[#7b6957]">
						{coupleNames}
					</p>
					<h1 className="font-display text-4xl text-[#2a2118] md:text-5xl">
						{dateDisplay}
					</h1>
				</div>
				<div className="space-y-1">
					<p className="text-xs uppercase tracking-[0.3em] text-[#7b6957]">
						Kepada Yth
					</p>
					<p className="text-lg font-semibold text-[#2a2118]">
						{guest || 'Bapak/Ibu/Saudara/i'}
					</p>
				</div>
				<button
					type="button"
					onClick={onOpen}
					className="mt-2 rounded-full border border-[#b18b62] px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#6d5f50] transition hover:bg-[#b18b62] hover:text-white"
				>
					Open Invitation
				</button>
			</div>
		</section>
	);
}
