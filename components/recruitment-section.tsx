import Image from "next/image"

export function RecruitmentSection() {
  return (
    <section id="sumate" className="relative min-h-[500px] lg:min-h-[600px]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/chef-bg.jpg"
          alt="Chef de Suteki preparando sushi"
          fill
          className="object-cover"
          loading="lazy"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative flex h-full min-h-[500px] flex-col items-center justify-center gap-6 px-6 py-20 text-center lg:min-h-[600px] lg:py-28">
        <p 
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "#F6EFE4" }}
        >
          Trabaja con nosotros
        </p>
        <h2 
          className="font-serif text-4xl font-light tracking-wide lg:text-5xl text-balance"
          style={{ color: "#F6EFE4", fontFamily: "'Cubano', sans-serif" }}
        >
          Te estamos buscando
        </h2>
        <p 
          className="max-w-lg font-mono text-sm leading-relaxed"
          style={{ color: "#F6EFE4", opacity: 0.85 }}
        >
          En Suteki siempre estamos sumando gente al equipo.
          Si algun puesto se adapta a lo que estamos buscando,
          no dudes en escribirnos.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd5cf3C34pxHflaApe0uMGTCTPIMKMmZk6ccteNBda5XP0BvA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all hover:scale-105"
          style={{ 
            backgroundColor: "#DC5D5D", 
            color: "#F6EFE4",
            fontFamily: "'Cubano', sans-serif"
          }}
        >
          Postulate
        </a>
      </div>
    </section>
  )
}
