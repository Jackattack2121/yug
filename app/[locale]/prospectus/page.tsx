import { redirect } from 'next/navigation'

export default function ProspectusPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  redirect(`/${locale}/investors`)
}
