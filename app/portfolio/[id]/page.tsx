import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const projects: { [key: string]: any } = {
  '1': {
    title: 'E-Commerce Platform',
    category: 'Web Design & Development',
    client: 'RetailCo Inc.',
    challenge: 'Build a modern, scalable e-commerce platform that could handle millions of transactions annually.',
    solution: 'We designed and developed a custom Next.js-based e-commerce platform with real-time inventory management.',
    results: '250% increase in online sales, 95% uptime, 50,000+ daily active users',
    duration: '6 months',
    teamSize: '8 developers',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Stripe', 'AWS'],
  },
  '2': {
    title: 'Brand Identity',
    category: 'Branding',
    client: 'StartupBrand',
    challenge: 'Create a distinctive brand identity for a new fintech startup entering a crowded market.',
    solution: 'Developed comprehensive brand strategy, visual identity system, and brand guidelines.',
    results: '90% brand recognition among target audience, successful Series A funding',
    duration: '3 months',
    teamSize: '4 designers',
    technologies: ['Figma', 'Adobe Creative Suite', 'Brand Strategy'],
  },
  '3': {
    title: 'Mobile App',
    category: 'Development',
    client: 'HealthTech Solutions',
    challenge: 'Develop iOS and Android apps for health tracking with real-time data sync.',
    solution: 'Built native iOS and Android apps with comprehensive health features and cloud sync.',
    results: '100K+ downloads, 4.8-star rating, $5M+ in user health data tracked',
    duration: '8 months',
    teamSize: '10 developers',
    technologies: ['Swift', 'Kotlin', 'Firebase', 'HealthKit', 'Google Fit'],
  },
  '4': {
    title: 'SaaS Dashboard',
    category: 'Web Design',
    client: 'DataInsights',
    challenge: 'Design complex data visualization dashboard for analytics platform.',
    solution: 'Created intuitive dashboard with real-time data visualization and customizable reports.',
    results: '95% user satisfaction, 40% reduction in support tickets',
    duration: '4 months',
    teamSize: '6 designers',
    technologies: ['React', 'D3.js', 'Recharts', 'Figma'],
  },
  '5': {
    title: 'Marketing Campaign',
    category: 'Strategy & Branding',
    client: 'GlobalBrand Co.',
    challenge: 'Execute multi-channel marketing campaign across 5 countries.',
    solution: 'Developed integrated marketing strategy with localized content and messaging.',
    results: '400% ROI, 2M+ impressions, 50K+ qualified leads',
    duration: '3 months',
    teamSize: '5 strategists',
    technologies: ['Analytics', 'Marketing Automation', 'Content Strategy'],
  },
  '6': {
    title: 'Content Platform',
    category: 'Development',
    client: 'MediaCorp',
    challenge: 'Build high-performance content platform handling millions of users.',
    solution: 'Developed scalable headless CMS with real-time collaboration features.',
    results: '50M+ pages indexed, 99.9% uptime, 100K+ simultaneous users',
    duration: '12 months',
    teamSize: '15 developers',
    technologies: ['Node.js', 'GraphQL', 'MongoDB', 'Elasticsearch', 'AWS'],
  },
}

type Params = Promise<{ id: string }>

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }))
}

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params
  const id = params.id
  const project = projects[id]
  return {
    title: `${project.title} - Portfolio - Agency`,
    description: project.challenge,
  }
}

export default async function PortfolioDetail(props: { params: Params }) {
  const params = await props.params
  const id = params.id
  const project = projects[id]

  const projectImages: { [key: string]: string } = {
    '1': '/portfolio-ecommerce.jpg',
    '2': '/portfolio-branding.jpg',
    '3': '/portfolio-mobile-app.jpg',
    '4': '/portfolio-saas-dashboard.jpg',
    '5': '/portfolio-marketing-campaign.jpg',
    '6': '/portfolio-content-platform.jpg',
  }

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 border-b border-border">
        <div className="container-max">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground text-balance-wrap">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{project.category}</p>
        </div>
      </section>

      {/* Project Image */}
      <section className="border-b border-border">
        <div className="container-max">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 border border-border rounded-lg my-12 overflow-hidden">
            <Image
              src={projectImages[id] || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Client</p>
              <p className="text-lg font-semibold text-foreground">{project.client}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Duration</p>
              <p className="text-lg font-semibold text-foreground">{project.duration}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Team Size</p>
              <p className="text-lg font-semibold text-foreground">{project.teamSize}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Category</p>
              <p className="text-lg font-semibold text-foreground">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Solution Results */}
      <section className="section-padding border-b border-border">
        <div className="container-max max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">The Results</h2>
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <p className="text-lg text-primary font-semibold">{project.results}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border text-foreground rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance-wrap">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'd love to help you achieve similar results. Let's discuss your project goals.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium inline-flex items-center gap-2"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
