import type React from "react"

interface VitrineParceirosProps {
  children: React.ReactNode
}

const VitrineParceiros: React.FC<VitrineParceirosProps> = ({ children }) => {
  return (
    <section id="kabanna" className="bg-gray-100 py-12">
      <div className="container mx-auto">{children}</div>
    </section>
  )
}

export default VitrineParceiros
