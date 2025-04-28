import Link from "next/link"
// import Image from 'next/image'

type NewsCardProps = {
  id: number
}

export function NewsCard({ id }: NewsCardProps) {
  return (
    <article className="bg-secondary overflow-hidden rounded-3xl border">
      <Link href={`/news/${id}`}>
        <div className="h-60 bg-gradient-to-br from-blue-400 to-blue-900">
          {/* <Image
            src={'/esim.png'}
            alt="Изображение новости"
            width={400}
            height={300}
            className="aspect-video object-cover"
          /> */}
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h4 className="mb-2 text-lg font-medium">
              Больше трафика этой весной
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              vero pariatur eius error distinctio iste asperiores, porro quia ab
              incidunt.
            </p>
            {/* <p>Дарим +8 Гб каждый месяц</p> */}
          </div>
          <div className="text-muted-foreground">05.13.2025</div>
        </div>
      </Link>
    </article>
  )
}
