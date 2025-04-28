import { NewsCard } from "@/entities/news-card"

export function NewsPage() {
  return (
    <main className="container grid grid-cols-3 gap-10 pt-16">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <NewsCard id={i} key={i} />
        ))}
    </main>
  )
}
