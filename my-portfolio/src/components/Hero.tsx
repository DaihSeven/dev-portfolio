import Image from 'next/image'
import { GullIcon, TeaIcon, GithubIcon, LinkedinIcon, MailIcon } from '@/components/icons'

const socials = [
  { label: 'GitHub', href: 'https://github.com/DaihSeven', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daianebarbosak/', icon: LinkedinIcon },
  { label: 'E-mail', href: 'mailto:developerdaiane@gmail.com', icon: MailIcon },
]

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold'

// Fundo de estrelas do design (--tile), esmaecido por uma máscara radial à direita
const tileMask = 'radial-gradient(120% 85% at 78% 30%, #000 10%, transparent 72%)'

export default function Hero() {
  return (
    // .dome: fim da seção em curva. O padding-bottom do .dome é mantido (no HTML ele é
    // zerado pelo .hero e a curva corta os ícones sociais).
    <section id="inicio" className="dome overflow-hidden pt-[clamp(3rem,7vw,5rem)] font-karla text-[17px] leading-[1.65] text-body">
      <div
        className="pointer-events-none absolute inset-0 bg-tile"
        style={{ maskImage: tileMask, WebkitMaskImage: tileMask }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-[min(1120px,100%_-_2.5rem)] grid-cols-[1.05fr_.85fr] items-center gap-[clamp(2rem,5vw,4.5rem)] max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <div>
          <p className="mb-4 font-hand text-[1.35rem] leading-[1.2] text-rose">Olá, eu sou</p>
          <h1 className="mb-[.2rem] mt-[.3rem] font-display text-[clamp(3.2rem,9vw,5.6rem)] font-semibold leading-[1.08] tracking-[-.01em] text-ink">
            Daiane
          </h1>
          <p className="mb-[1.3rem] font-display text-[clamp(1.5rem,3vw,2.1rem)] italic leading-[1.2] text-tulip">
            Desenvolvedora full stack,
            <br />
            com raiz no back-end.
          </p>
          <p className="mb-4 max-w-[46ch] text-[1.08rem]">
            Estudante de Engenharia de Software que gosta de cuidar do que não aparece: a API que responde rápido,
            o banco bem modelado, o deploy que não acorda ninguém de madrugada. E de ensinar o caminho para quem
            está chegando.
          </p>

          <div className="mt-[1.8rem] flex flex-wrap items-center gap-[.9rem]">
            <a
              href="#projetos"
              className={`inline-flex items-center gap-[.55rem] rounded-full border border-tulip bg-tulip px-[1.6rem] py-[.8rem] text-[.97rem] font-semibold text-[#FFF8F2] no-underline transition-[background,transform] duration-[250ms] hover:-translate-y-px hover:border-ink hover:bg-ink ${focusRing}`}
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className={`inline-flex items-center gap-[.55rem] rounded-full border border-line px-[1.6rem] py-[.8rem] text-[.97rem] font-semibold text-ink no-underline transition-[border-color,color,transform] duration-[250ms] hover:-translate-y-px hover:border-rose hover:text-tulip ${focusRing}`}
            >
              Vamos conversar
            </a>
          </div>

          <div className="mt-8 flex gap-[.9rem]">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                className={`grid h-[42px] w-[42px] place-items-center rounded-full border border-line text-body transition duration-[250ms] hover:-translate-y-0.5 hover:border-rose hover:text-tulip ${focusRing}`}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Foto na janela em arco, com flores, gaivota, chá e cards */}
        <figure className="relative m-0 w-[min(100%,340px)] justify-self-center max-[900px]:order-first max-[900px]:w-[min(100%,280px)]">
          <GullIcon className="absolute -top-[34px] right-[-10px] h-[21px] w-14 text-ink opacity-50" />
          <TeaIcon className="absolute left-[-30px] top-[10px] h-11 w-11 text-gold" />

          {/* Flores (antes da moldura no DOM, para ficarem atrás dela como no HTML).
              Imagens quadradas de 120px no lugar dos espaços de 92px do design: o deslocamento
              lateral soma os 28px extras para a parte visível ficar igual à do HTML. */}
          <Image
            src="/images/lily-flowering-tulips.png"
            alt="Tulipas"
            width={360}
            height={360}
            sizes="120px"
            className="absolute bottom-[14px] left-[-84px] h-auto w-[120px] -rotate-6 max-[900px]:left-[-58px] max-[480px]:hidden"
          />
          <Image
            src="/images/white-carnation-flower.png"
            alt="Cravo branco"
            width={360}
            height={360}
            sizes="120px"
            className="absolute right-[-76px] top-[40px] h-auto w-[120px] rotate-[5deg] max-[900px]:right-[-54px] max-[480px]:hidden"
          />

          <div className="relative rounded-[170px_170px_10px_10px] border border-line bg-surface p-[14px] shadow-soft">
            <Image
              src="/images/perfil2.jpg"
              alt="Daiane, desenvolvedora full stack"
              width={1720}
              height={2293}
              priority
              sizes="(max-width: 900px) 280px, 340px"
              className="block aspect-[3/4] w-full rounded-[158px_158px_4px_4px] object-cover object-[50%_22%]"
            />
            {/* Filete dourado interno da moldura */}
            <div className="pointer-events-none absolute inset-[7px] rounded-[164px_164px_6px_6px] border border-gold opacity-40" aria-hidden="true" />
          </div>

          <div className="absolute left-[-70px] top-[34%] rounded-xl border border-line bg-surface px-[.8rem] py-2 text-[.8rem] leading-[1.35] shadow-soft max-[900px]:left-[-18px] max-[480px]:hidden">
            <b className="block text-[.86rem] text-ink">Mentora AWS</b>
            Escola da Nuvem, desde 2024
          </div>
          <div className="absolute bottom-[22%] right-[-56px] rounded-xl border border-line bg-surface px-[.8rem] py-2 text-[.8rem] leading-[1.35] shadow-soft max-[900px]:right-[-14px] max-[480px]:hidden">
            <b className="block text-[.86rem] text-ink">3 certificações AWS</b>
            Cloud Practitioner, SAA e AI
          </div>
        </figure>
      </div>
    </section>
  )
}
