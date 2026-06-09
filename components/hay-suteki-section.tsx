"use client"

import Image from "next/image"

export function HaySutekiSection() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#DC5D5D" }}
    >
      {/* Koi texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("/images/trama-koi.jpg")`,
          backgroundSize: "500px 500px",
          backgroundRepeat: "repeat",
          mixBlendMode: "multiply",
          opacity: 0.15,
        }}
      />

      {/* Content layout */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 py-16 text-center">

        {/* HAY top */}
        <p
          className="leading-none uppercase"
          style={{
            fontFamily: "var(--font-cubano), 'Cubano', sans-serif",
            fontSize: "clamp(2.5rem, 9vw, 7.5rem)",
            color: "#F6EFE4",
            letterSpacing: "0.3em",
          }}
        >
          HAY
        </p>

        {/* Koi image + Suteki script */}
        <div className="flex items-center justify-center gap-2 md:gap-6 my-0">
          <div style={{ width: "clamp(100px, 18vw, 200px)", flexShrink: 0 }}>
            <Image
              src="/images/hay-suteki-mobile.png"
              alt=""
              aria-hidden="true"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
              style={{ objectPosition: "center 15%" }}
            />
          </div>
          <p
            style={{
              fontFamily: "var(--font-suteki-script), serif",
              fontSize: "clamp(4rem, 14vw, 12rem)",
              color: "#F6EFE4",
              lineHeight: 0.9,
              fontStyle: "italic",
            }}
          >
            Suteki
          </p>
        </div>

        {/* HAY PLAN bottom */}
        <p
          className="leading-none uppercase"
          style={{
            fontFamily: "var(--font-cubano), 'Cubano', sans-serif",
            fontSize: "clamp(2.5rem, 9vw, 7.5rem)",
            color: "#F6EFE4",
            letterSpacing: "0.3em",
          }}
        >
          HAY PLAN
        </p>

        {/* Badge */}
        <div
          className="mt-8 flex items-center gap-4"
          style={{ color: "#F6EFE4" }}
        >
          <div
            className="flex flex-col items-center justify-center rounded-full border-2"
            style={{
              width: "clamp(70px, 10vw, 95px)",
              height: "clamp(70px, 10vw, 95px)",
              borderColor: "#F6EFE4",
            }}
          >
            <span style={{ fontSize: "clamp(0.55rem, 1.1vw, 0.8rem)", fontFamily: "var(--font-cubano), sans-serif", letterSpacing: "0.05em" }}>✦ • 10年</span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-cubano), 'Cubano', sans-serif",
              fontSize: "clamp(0.65rem, 1.2vw, 0.85rem)",
              letterSpacing: "0.15em",
              lineHeight: 1.9,
              textAlign: "left",
            }}
          >
            <p>SUSHI</p>
            <p>SALADS</p>
            <p>COCINA NIKKEI</p>
          </div>
        </div>
      </div>
    </section>
  )
}
