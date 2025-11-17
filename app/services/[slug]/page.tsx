import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services: { [key: string]: any } = {
  'web-design': {
    title: 'Web Design',
    description: 'Beautiful, responsive designs that drive conversions and engagement.',
    features: [
      'Custom UI/UX Design',
      'Responsive Design',
      'Design Systems',
      'Interactive Prototypes',
      'Accessibility Compliance',
      'Performance Optimization',
    ],
    benefits: [
      'Increased user engagement',
      'Better conversion rates',
      'Improved brand perception',
      'Enhanced user satisfaction',
      'Competitive advantage',
      'Long-term scalability',
    ],
    process: [
      { title: 'Discovery', desc: 'We learn about your business, users, and goals' },
      { title: 'Strategy', desc: 'Create a design strategy aligned with your objectives' },
      { title: 'Design', desc: 'Craft beautiful and functional design mockups' },
      { title: 'Refinement', desc: 'Iterate based on feedback and testing' },
      { title: 'Handoff', desc: 'Prepare designs for development' },
    ],
    pricing: 'Starting at $5,000',
  },
  development: {
    title: 'Development',
    description: 'Fast, scalable, and secure web applications built with modern technologies.',
    features: [
      'Full-Stack Development',
      'Frontend Development',
      'Backend Development',
      'API Development',
      'Database Design',
      'Cloud Integration',
    ],
    benefits: [
      'High performance',
      'Enterprise-grade security',
      'Unlimited scalability',
      'Seamless integration',
      'Reduced time-to-market',
      'Technical excellence',
    ],
    process: [
      { title: 'Architecture', desc: 'Design robust system architecture' },
      { title: 'Development', desc: 'Build features using best practices' },
      { title: 'Testing', desc: 'Comprehensive QA and testing' },
      { title: 'Optimization', desc: 'Performance tuning and optimization' },
      { title: 'Deployment', desc: 'Production deployment and monitoring' },
    ],
    pricing: 'Starting at $10,000',
  },
  branding: {
    title: 'Branding',
    description: 'Strategic branding solutions that establish your unique market position.',
    features: [
      'Brand Strategy',
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Messaging Framework',
      'Brand Positioning',
    ],
    benefits: [
      'Strong brand recognition',
      'Customer loyalty',
      'Premium positioning',
      'Market differentiation',
      'Consistent messaging',
      'Long-term brand value',
    ],
    process: [
      { title: 'Research', desc: 'Market and competitor analysis' },
      { title: 'Strategy', desc: 'Define brand positioning and values' },
      { title: 'Design', desc: 'Create visual identity system' },
      { title: 'Guidelines', desc: 'Document comprehensive brand guidelines' },
      { title: 'Launch', desc: 'Implement across all touchpoints' },
    ],
    pricing: 'Starting at $8,000',
  },
  strategy: {
    title: 'Strategy',
    description: 'Data-driven strategies to maximize your digital impact.',
    features: [
      'Digital Strategy',
      'Market Analysis',
      'Competitor Research',
      'Analytics Setup',
      'Performance Tracking',
      'Optimization Planning',
    ],
    benefits: [
      'Increased ROI',
      'Better decision making',
      'Competitive insights',
      'Growth acceleration',
      'Risk mitigation',
      'Strategic alignment',
    ],
    process: [
      { title: 'Audit', desc: 'Analyze current digital presence' },
      { title: 'Analysis', desc: 'Market and competitor analysis' },
      { title: 'Planning', desc: 'Develop strategic roadmap' },
      { title: 'Recommendations', desc: 'Provide actionable recommendations' },
      { title: 'Implementation', desc: 'Guide implementation of strategy' },
    ],
    pricing: 'Starting at $3,000',
  },
  seo: {
    title: 'SEO',
    description: 'Optimize your online presence and rank higher in search results.',
    features: [
      'Technical SEO',
      'Content Optimization',
      'Link Building',
      'Local SEO',
      'Schema Markup',
      'Performance Optimization',
    ],
    benefits: [
      'Increased organic traffic',
      'Better search rankings',
      'Qualified leads',
      'Cost-effective growth',
      'Long-term results',
      'Brand authority',
    ],
    process: [
      { title: 'Audit', desc: 'Comprehensive SEO audit' },
      { title: 'Strategy', desc: 'Keyword research and strategy' },
      { title: 'Implementation', desc: 'Technical and content optimization' },
      { title: 'Building', desc: 'Link building and promotion' },
      { title: 'Monitoring', desc: 'Track and optimize performance' },
    ],
    pricing: 'Starting at $2,000/month',
  },
  maintenance: {
    title: 'Maintenance',
    description: 'Ongoing support and optimization services.',
    features: [
      'Technical Support',
      'Security Updates',
      'Performance Monitoring',
      'Bug Fixes',
      'Feature Updates',
      'Backup Management',
    ],
    benefits: [
      'Reduced downtime',
      'Enhanced security',
      'Peak performance',
      'Peace of mind',
      'Cost savings',
      'Future readiness',
    ],
    process: [
      { title: 'Monitoring', desc: 'Continuous system monitoring' },
      { title: 'Maintenance', desc: 'Regular updates and patches' },
      { title: 'Support', desc: '24/7 technical support' },
      { title: 'Optimization', desc: 'Performance optimization' },
      { title: 'Planning', desc: 'Future growth planning' },
    ],
    pricing: 'Starting at $500/month',
  },
}

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params
  const slug = params.slug
  const service = services[slug] || services['web-design']
  return {
    title: `${service.title} - Agency`,
    description: service.description,
  }
}

export default async function ServicePage(props: { params: Params }) {
  const params = await props.params
  const slug = params.slug
  const service = services[slug] || services['web-design']

  const serviceImages: { [key: string]: string } = {
    'web-design': '/service-web-design.jpg',
    'development': '/service-development.jpg',
    'branding': '/service-branding.jpg',
    'strategy': '/service-strategy.jpg',
    'seo': '/service-seo.jpg',
    'maintenance': '/service-maintenance.jpg',
  }

  return (
    <>
      {/* Hero with Image */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance-wrap">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance-wrap">
                {service.description}
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
              <Image
                src={serviceImages[slug] || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature: string) => (
              <div key={feature} className="flex gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-foreground">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit: string) => (
              <div key={benefit} className="p-6 bg-card border border-border rounded-lg">
                <p className="text-lg font-semibold text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Our Process</h2>
          <div className="space-y-6">
            {service.process.map((step: any, index: number) => (
              <div key={step.title} className="flex gap-6 pb-6 border-b border-border last:border-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding border-b border-border">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Pricing</h2>
          <p className="text-2xl font-semibold text-primary mb-8">{service.pricing}</p>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pricing varies based on project scope and requirements. Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance-wrap">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help with your {service.title.toLowerCase()} needs.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium inline-flex items-center gap-2"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
