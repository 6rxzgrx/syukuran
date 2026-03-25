 type StoryItem = {
  title: string;
  description: string;
};

type LoveStoryProps = {
  story: StoryItem[];
};

export function LoveStorySection({ story }: LoveStoryProps) {
  return (
    <section className="px-6 pb-16 md:px-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b18b62]">
            Love Story
          </p>
          <h2 className="font-display text-4xl text-[#2a2118] md:text-5xl">
            Our Journey
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {story.map((item) => (
            <div
              key={item.title}
              className="glass-card flex flex-col gap-3 rounded-3xl px-6 py-8"
            >
              <h3 className="font-display text-2xl text-[#2a2118]">
                {item.title}
              </h3>
              <p className="text-sm text-[#6d5f50]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
