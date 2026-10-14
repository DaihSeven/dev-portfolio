import type { IconType } from 'react-icons'
import {
  SiSpringboot, SiNodedotjs, SiExpress, SiPython, SiJsonwebtokens, SiSwagger,
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiFramer,
  SiPostgresql, SiMongodb, SiPrisma,
  SiDocker, SiGooglecloud, SiLinux, SiGit, SiGithub, SiPrometheus, SiGrafana, SiGoogle,
} from 'react-icons/si'
// Java, AWS e bcrypt não existem (ou foram removidos) no Simple Icons, então vêm do Font Awesome
import { FaJava, FaAws, FaLock } from 'react-icons/fa'

export type TechnologyCategory = 'Backend' | 'Frontend' | 'Dados' | 'Infra/Cloud'

export interface Technology {
  name: string
  category: TechnologyCategory
  icon: IconType
}

// Ordem em que as categorias aparecem na seção "Tecnologias"
export const technologyCategories: TechnologyCategory[] = ['Backend', 'Frontend', 'Dados', 'Infra/Cloud']

export const technologies: Technology[] = [
  // Backend
  { name: 'Java', category: 'Backend', icon: FaJava },
  { name: 'Spring Boot', category: 'Backend', icon: SiSpringboot },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs },
  { name: 'Express', category: 'Backend', icon: SiExpress },
  { name: 'Python', category: 'Backend', icon: SiPython },
  { name: 'JWT', category: 'Backend', icon: SiJsonwebtokens },
  { name: 'bcrypt', category: 'Backend', icon: FaLock },
  { name: 'Swagger', category: 'Backend', icon: SiSwagger },

  // Frontend
  { name: 'React', category: 'Frontend', icon: SiReact },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs },
  { name: 'TypeScript', category: 'Frontend', icon: SiTypescript },
  { name: 'Tailwind', category: 'Frontend', icon: SiTailwindcss },
  { name: 'HTML5', category: 'Frontend', icon: SiHtml5 },
  { name: 'CSS3', category: 'Frontend', icon: SiCss },
  { name: 'Framer Motion', category: 'Frontend', icon: SiFramer },

  // Dados
  { name: 'PostgreSQL', category: 'Dados', icon: SiPostgresql },
  { name: 'MongoDB', category: 'Dados', icon: SiMongodb },
  { name: 'Prisma', category: 'Dados', icon: SiPrisma },

  // Infra/Cloud
  { name: 'AWS', category: 'Infra/Cloud', icon: FaAws },
  { name: 'Google Cloud', category: 'Infra/Cloud', icon: SiGooglecloud },
  { name: 'Docker', category: 'Infra/Cloud', icon: SiDocker },
  { name: 'Linux', category: 'Infra/Cloud', icon: SiLinux },
  { name: 'Git', category: 'Infra/Cloud', icon: SiGit },
  { name: 'GitHub', category: 'Infra/Cloud', icon: SiGithub },
  { name: 'Prometheus', category: 'Infra/Cloud', icon: SiPrometheus },
  { name: 'Grafana', category: 'Infra/Cloud', icon: SiGrafana },
  { name: 'Google Workspace', category: 'Infra/Cloud', icon: SiGoogle },
]
