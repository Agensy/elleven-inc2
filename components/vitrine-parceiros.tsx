"use client"

import Image from "next/image"

export default function VitrineParceiros() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image src="/parceiros/kabanna-vitrine.jpeg" alt="Kabanna Real Estate" fill className="object-cover" priority />
    </section>
  )
}
