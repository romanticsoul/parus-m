export default async function NewsId({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params
  return <main className="container">{id}</main>
}
