import { TulipIcon } from '@/components/icons'

interface Stop {
  when: string
  title: string
  where: string
  text?: string
  items?: string[]
  // Ponto preenchido na linha do tempo (atividade atual)
  now?: boolean
}

// Ordem pedida no comentário do design: Escola da Nuvem, freelancers e, por fim, Google
const stops: Stop[] = [
  {
    when: 'Fevereiro de 2024 — hoje',
    title: 'De aluna a mentora',
    where: 'Escola da Nuvem, voluntariado',
    text: 'Preparo estudantes para as certificações AWS Cloud Practitioner e Solutions Architect, e dou aulas de soft skills: protagonismo, inteligência emocional e autoconhecimento. É onde aprendi a ouvir antes de explicar.',
    now: true,
  },
  {
    when: 'Março a Junho de 2026',
    title: 'Desenvolvedora full stack júnior',
    where: 'SkyHawk Drones, remoto',
    text: 'Plataforma web de monitoramento aéreo inteligente, com simulador tático interativo e área de treinamento. Next.js, React, TypeScript, Tailwind, Node.js e PostgreSQL, além de deploys, DNS, SSL/TLS e hospedagem.',
  },
  {
    when: 'Março a Setembro de 2026',
    title: 'Desenvolvedora full stack júnior',
    where: 'HypeCode SoftwareHouse, remoto',
    items: [
      'APIs, automações e dashboards em Python, Flask, Node.js e TypeScript, com integrações de IA, WhatsApp, Telegram e CRM.',
      'Melhorias de infraestrutura e migração de serviços AWS, cuidando de DNS e bancos de dados.',
      'MySQL, Redis e Docker, com atenção a qualidade de código e escalabilidade.',
    ],
  },
  {
    when: 'Janeiro a maio de 2026',
    title: 'Facilitadora do Google Cloud Arcade Brasil',
    where: 'Google Cloud e SoulCode Academy',
    text: 'Apoiei alunos na jornada de aprendizado e aprofundei Google Cloud, IA generativa e computação em nuvem em laboratórios práticos: IAM, Compute Engine, Cloud Storage, Cloud Spanner e Vertex AI.',
  },
]

export default function Journey() {
  return (
    // .sec + .dome: termina em curva sobre a seção seguinte
    <section id="jornada" className="sec dome font-karla text-[17px] leading-[1.65] text-body">
      <div className="mx-auto w-[min(1120px,100%_-_2.5rem)]">
        <div className="mb-[2.4rem] flex flex-wrap items-baseline gap-4">
          <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.2rem)] font-semibold leading-[1.08] tracking-[-.01em] text-ink">
            Jornada
          </h2>
          <TulipIcon className="h-5 w-5 flex-none self-center text-tulip" />
          <p className="m-0 text-[.95rem] text-muted">Onde venho aprendendo e ensinando</p>
        </div>

        {/* Linha do tempo vertical */}
        <ol className="ml-[6px] grid list-none gap-[2.4rem] border-l border-line p-0 pl-8">
          {stops.map((stop) => (
            <li key={`${stop.where}-${stop.when}`} className="relative">
              <span
                className={`absolute left-[calc(-2rem-6.5px)] top-[.55rem] h-3 w-3 rounded-full border-2 ${
                  stop.now ? 'border-tulip bg-tulip' : 'border-rose bg-ground'
                }`}
                aria-hidden="true"
              />
              <p className="m-0 text-[.86rem] tracking-[.02em] text-muted">{stop.when}</p>
              <h3 className="mb-[.1rem] mt-1 font-display text-[1.35rem] font-semibold leading-[1.25] text-ink">{stop.title}</h3>
              <p className="mb-[.55rem] text-[.95rem] text-tulip">{stop.where}</p>
              {stop.text && <p className="m-0 max-w-[68ch]">{stop.text}</p>}
              {stop.items && (
                <ul className="mb-0 mt-[.4rem] max-w-[68ch] list-disc pl-[1.1rem]">
                  {stop.items.map((item) => (
                    <li key={item} className="mb-[.35rem]">{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
