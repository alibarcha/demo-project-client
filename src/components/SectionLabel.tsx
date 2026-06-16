interface SectionLabelProps {
  text: string
  centered?: boolean
  light?: boolean
}

export default function SectionLabel({ text, centered = false, light = false }: SectionLabelProps) {
  if (centered) {
    return (
      <span className={`section-label-center block mb-6 ${light ? '' : ''}`}>
        {text}
      </span>
    )
  }
  return (
    <span className={`section-label block mb-6 ${light ? 'text-crimson' : ''}`}>
      {text}
    </span>
  )
}
