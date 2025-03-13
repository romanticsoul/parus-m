import { NewsCard } from '@/components/news-card'

export default function News() {
  return (
    <main className="container grid grid-cols-3 gap-10">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <NewsCard id={i} key={i} />
        ))}
    </main>
  )
}
