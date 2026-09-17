export interface TeamMember {
  name: string;
  speciality: string;
  summary: string;
  photo: string;
}

export interface TeamAccordionProps {
  members: TeamMember[];
}

export function TeamAccordion({ members }: TeamAccordionProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {members.map((member) => (
        <article
          key={member.photo}
          className="group relative flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-muted/30 border border-border/40"
        >
          <a
            href="/contact"
            className="absolute inset-0 z-10 focus:outline-none"
            aria-label={`${member.name} — ${member.speciality}`}
          >
            <img
              src={member.photo}
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
              loading="lazy"
            />

            {/* Base gradient + always-visible name / speciality */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 backdrop-blur-md bg-black/10 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
              <h3 className="text-white text-lg md:text-xl font-medium tracking-tight">
                {member.name}
              </h3>
              <p className="text-white/75 text-[11px] md:text-xs uppercase tracking-[0.14em] mt-1">
                {member.speciality}
              </p>
            </div>

            {/* Hover / focus: full-card blur with a brief summary */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 bg-black/55 backdrop-blur-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg md:text-xl font-medium tracking-tight">
                {member.name}
              </h3>
              <p className="text-white/75 text-[11px] md:text-xs uppercase tracking-[0.14em] mt-1 mb-3">
                {member.speciality}
              </p>
              <p className="text-white/90 text-sm leading-relaxed">
                {member.summary}
              </p>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}

export default TeamAccordion;
