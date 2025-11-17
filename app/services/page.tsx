import { ArrowRight, Code, Palette, Zap, BarChart3, Search, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Services - Agency',
  description: 'Explore our comprehensive digital solutions and services designed for your success.',
}

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      href: '/services/web-design',
      description: 'Beautiful, responsive designs that captivate your audience',
      features: ['UI/UX Design', 'Responsive Design', 'Design Systems', 'Prototyping'],
      image: '/service-thumb-web-design.jpg',
    },
    {
      icon: Code,
      title: 'Development',
      href: '/services/development',
      description: 'Fast, scalable, and secure web applications',
      features: ['Frontend Development', 'Backend Development', 'Full-Stack Solutions', 'API Development'],
      image: '/service-thumb-development.jpg',
    },
    {
      icon: Zap,
      title: 'Branding',
      href: '/services/branding',
      description: 'Strategic branding solutions for your business',
      features: ['Brand Strategy', 'Logo Design', 'Brand Guidelines', 'Visual Identity'],
      image: '/service-thumb-branding.jpg',
    },
    {
      icon: BarChart3,
      title: 'Strategy',
      href: '/services/strategy',
      description: 'Data-driven strategies to maximize impact',
      features: ['Digital Strategy', 'Consulting', 'Analytics', 'Optimization'],
      image: '/🌟 Transform your sales strategy with Zendelta Solutions! Our innovative approach combines AI and expert insights, empowering your business to scale sales without the added overhead_ Elevate your game and achieve g.jpg',
    },
    {
      icon: Search,
      title: 'SEO',
      href: '/services/seo',
      description: 'Optimize your online presence and rankings',
      features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO'],
      image: '/Seo search engine optimization business concept _ Premium Photo.jpg',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      href: '/services/maintenance',
      description: 'Ongoing support and optimization services',
      features: ['Support & Updates', 'Performance Monitoring', 'Security', 'Scaling'],
      image: '/maintance .jpg',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance-wrap">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance-wrap">
            Comprehensive digital solutions tailored to your unique business needs and goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.title} href={service.href}>
                  <div className="group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-primary transition-all">
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8 bg-card">
                      <Icon className="text-primary mb-6" size={40} />
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>

                      <div className="mb-6">
                        <p className="text-xs font-semibold text-muted-foreground mb-3">INCLUDES:</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="inline-flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors font-medium">
                        Learn More <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-balance-wrap">
            Why Choose Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                desc: 'Experienced professionals with proven track records in delivering excellence.',
              },
              {
                title: 'Custom Solutions',
                desc: 'Tailored approaches designed specifically for your unique business challenges.',
              },
              {
                title: 'Proven Results',
                desc: 'Measurable outcomes and ROI-focused strategies that drive real business growth.',
              },
              {
                title: 'Full Support',
                desc: 'Comprehensive support from strategy through launch and beyond.',
              },
              {
                title: 'Modern Tech',
                desc: 'Latest technologies and best practices for optimal performance and security.',
              },
              {
                title: 'Partnership Mindset',
                desc: 'We work as your strategic partner, invested in your long-term success.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-balance-wrap">
            Our Service Delivery Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Consultation', desc: 'Understand your needs and goals' },
              { num: '2', title: 'Planning', desc: 'Develop comprehensive strategy' },
              { num: '3', title: 'Execution', desc: 'Deliver high-quality solutions' },
              { num: '4', title: 'Support', desc: 'Ongoing optimization and support' },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
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
              Let's discuss which services are right for your project and create a custom solution.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium inline-flex items-center gap-2"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
