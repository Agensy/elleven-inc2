"use client"

import Image from "next/image"

export default function VitrineParceiros() {
  return (
    <>
      {/* Seção espaçadora para evitar sobreposição do menu */}
      <div className="h-20 w-full"></div>

      <section className="relative h-screen w-full overflow-hidden">
        <Image src="/parceiros/kabanna-vitrine.jpeg" alt="Kabanna Real Estate" fill className="object-cover" priority />
      </section>
    </>
  )
}
