import Image from 'next/image'
import { MailIcon, LinkedinIcon, GithubIcon, PhoneIcon } from '@/components/icons'

const contactMethods = [
  { label: 'E-mail', value: 'developerdaiane@gmail.com', href: 'mailto:developerdaiane@gmail.com', icon: MailIcon },
  { label: 'LinkedIn', value: '/in/daianebarbosak', href: 'https://www.linkedin.com/in/daianebarbosak/', icon: LinkedinIcon },
  { label: 'GitHub', value: '@DaihSeven', href: 'https://github.com/DaihSeven', icon: GithubIcon },
  { label: 'Telefone', value: '+55 (42) 99848-9420', href: 'tel:+5542998489420', icon: PhoneIcon },
]

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold'

export default function Contact() {
  return (
    <section id="contato" className="sec font-karla text-[17px] leading-[1.65] text-body">
      <div className="mx-auto w-[min(1120px,100%_-_2.5rem)]">
        {/* Card de convite: texto e contatos à esquerda, foto do chá à direita */}
        <div className="grid grid-cols-[1.15fr_.85fr] items-center gap-[clamp(1.8rem,4vw,3rem)] rounded-[20px] border border-line bg-surface p-[clamp(2rem,4vw,3rem)] shadow-soft max-[860px]:grid-cols-1">
          <div className="min-w-0">
            <p className="mb-4 font-hand text-[1.35rem] leading-[1.2] text-rose">o bule já está no fogo</p>
            <h2 className="mb-[.6rem] font-display text-[clamp(2.1rem,4.6vw,3.2rem)] font-semibold leading-[1.08] tracking-[-.01em] text-ink">
              Vamos tomar um chá e conversar?
            </h2>
            <p className="mb-4 max-w-[52ch]">
              Estou aberta a oportunidades e colaborações, principalmente onde eu possa cuidar do back-end e continuar
              aprendendo com o time.
            </p>

            {/* minmax com min(): numa tela de 320px a coluna nunca passa da largura do card */}
            <div className="mt-[1.8rem] grid grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))] gap-4">
              {contactMethods.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`flex min-w-0 items-center gap-[.85rem] rounded-xl border border-line px-[1.1rem] py-[.95rem] no-underline transition duration-[250ms] hover:-translate-y-0.5 hover:border-rose ${focusRing}`}
                >
                  <Icon className="h-[19px] w-[19px] flex-none text-tulip" />
                  <div className="min-w-0">
                    <b className="block text-[.95rem] font-semibold text-ink">{label}</b>
                    <span className="break-all text-[.85rem] text-muted">{value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Foto do chá em arco 3:4. A imagem tem fundo transparente: surface-2 por trás */}
          {/* Tamanho menor e centralizado na coluna: 280px no desktop, 200px até 660px */}
          <div className="relative aspect-[3/4] w-full max-w-[280px] justify-self-center overflow-hidden rounded-[140px_140px_12px_12px] border border-line bg-surface-2 max-[660px]:max-w-[200px]">
            <Image
              src="/images/turkish-traditional-tea.png"
              alt="Dois copos de chá turco sobre pires"
              fill
              sizes="(max-width: 660px) 200px, 280px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
