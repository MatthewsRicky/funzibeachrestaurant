type ExperienceCardProps = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export function ExperienceCard({
  number,
  title,
  description,
  image,
}: ExperienceCardProps) {
  return (
    <article className="group relative h-[430px] overflow-hidden text-white">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#09251e]/95 via-transparent to-transparent" />

      <div className="absolute inset-0 flex flex-col p-6">
        <span className="text-xs">{number}</span>

        <div className="mt-auto">
          <h3 className="font-serif text-3xl leading-none">{title}</h3>
          <p className="mt-3 max-w-xs text-xs leading-5">{description}</p>

          <a
            href="#book"
            className="mt-5 grid size-9 place-items-center border border-white/70 text-lg"
            aria-label={`Book ${title}`}
          >
            →
          </a>
        </div>
      </div>
    </article>
  );
}
