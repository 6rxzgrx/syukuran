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
    <section className="px-6 pb-16 md:px-14" id="events">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b18b62]">
            Save The Date
          </p>
          <h2 className="font-display text-4xl text-[#2a2118] md:text-5xl">
            Event Details
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.title}
              className="glass-card flex flex-col gap-4 rounded-3xl px-6 py-8"
            >
              <h3 className="font-display text-3xl text-[#2a2118]">
                {event.title}
              </h3>
              <div className="text-sm uppercase tracking-[0.25em] text-[#b18b62]">
                {event.time}
              </div>
              <div className="text-sm text-[#6d5f50]">{event.date}</div>
              <div className="text-sm font-semibold text-[#2a2118]">
                {event.location}
              </div>
              <div className="text-sm text-[#6d5f50]">{event.address}</div>
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.25em] text-[#b18b62]"
              >
                Open Maps
              </a>
            </div>
          ))}
          <div className="glass-card overflow-hidden rounded-3xl">
            <iframe
              className="h-full min-h-[260px] w-full border-0"
              title="Wedding Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapsEmbedUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
