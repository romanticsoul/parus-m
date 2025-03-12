import Link from 'next/link'
import Image from 'next/image'

type NewsCardProps = {
  id: number
}

export function NewsCard({ id }: NewsCardProps) {
  return (
    <article className="bg-secondary">
      <Link href={`/news/${id}`}>
        <div>
          {/* <Image
            src={'null'}
            alt="Изображение новости"
            width={400}
            height={300}
            className="aspect-video"
          /> */}
        </div>
        <div>
          <h4>Больше трафика этой весной</h4>
          <p>Дарим +8 Гб каждый месяц</p>
        </div>
        <div>05.13.2025</div>
      </Link>
    </article>
  )
}
