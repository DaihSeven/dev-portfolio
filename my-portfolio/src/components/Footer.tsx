import { CatIcon } from '@/components/icons'

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-ground pb-[3.2rem] pt-[2.6rem] text-center font-karla">
      <div className="mx-auto w-[min(1120px,100%_-_2.5rem)]">
        <CatIcon className="mx-auto mb-[.9rem] w-[70px] text-muted opacity-75" />
        <p className="my-1 font-hand text-[1.3rem] text-ink">Vai, Corinthians!</p>
        <p className="my-1 text-[.9rem] text-muted">Daiane das Graças Barbosa Koslowski · desenvolvedora full stack</p>
        <p className="my-1 text-[.9rem] text-muted">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
