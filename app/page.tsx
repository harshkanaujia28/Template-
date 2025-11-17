import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Agency - Premium Web Solutions for Your Brand',
  description: 'Transform your digital presence with our award-winning web design and development services.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen w-full border-b border-border flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/modern-web-design-studio-workspace.jpg"
            alt="Creative agency workspace"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative container-max">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight text-balance-wrap">
              Build stunning digital experiences
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl text-balance-wrap">
              We craft premium websites and digital solutions for brands that dare to
              stand out. From concept to launch, we deliver excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium inline-flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>

              <Link
                href="/portfolio"
                className="px-8 py-3 border border-white/40 text-white hover:bg-white/10 rounded-full transition-colors font-medium inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">

              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground text-lg">Projects completed</p>
              </div>

              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground text-lg">Client satisfaction rate</p>
              </div>

              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">12+</div>
                <p className="text-muted-foreground text-lg">Years of experience</p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Services Preview */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance-wrap">
              Services that drive results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We offer comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Web Design',
                description: 'Beautiful, responsive designs that captivate your audience and drive conversions.',
                icon: '🎨',
              },
              {
                title: 'Development',
                description: 'Fast, scalable, and secure web applications built with modern technologies.',
                icon: '⚙️',
              },
              {
                title: 'Branding',
                description: 'Strategic branding solutions that establish your unique identity in the market.',
                icon: '✨',
              },
              {
                title: 'Strategy',
                description: 'Data-driven strategies to maximize your digital impact and business growth.',
                icon: '📊',
              },
              {
                title: 'SEO',
                description: 'Optimize your online presence and rank higher in search results.',
                icon: '🔍',
              },
              {
                title: 'Maintenance',
                description: 'Ongoing support and optimization to keep your site running smoothly.',
                icon: '🛠️',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="mb-12 flex justify-between items-end gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance-wrap">
                Featured Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore some of our recent projects and see how we solve real-world challenges.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-primary hover:text-primary/80 transition-colors font-medium inline-flex items-center gap-2 whitespace-nowrap"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: 1,
                title: 'E-Commerce Platform',
                desc: 'Modern marketplace experience',
                image:
                  '/download.jpg',
              },
              {
                id: 2,
                title: 'Brand Identity',
                desc: 'Comprehensive branding solution',
                image:
                  '/portfolio-branding.jpg',
              },
              {
                id: 3,
                title: 'Mobile App',
                desc: 'iOS & Android development',
                image:
                  '/What Are The Challenges Of iOS App Agency_.jpg',
              },
              {
                id: 4,
                title: 'SaaS Dashboard',
                desc: 'Enterprise analytics platform',
                image:
                  '/SaaS Application Development.jpg',
              },
            ].map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <div className="aspect-video bg-card border border-border rounded-lg overflow-hidden group cursor-pointer hover:border-primary transition-all">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-balance-wrap">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We understand your goals and challenges' },
              { step: '02', title: 'Strategy', desc: 'Develop a comprehensive solution plan' },
              { step: '03', title: 'Creation', desc: 'Design and develop your digital solution' },
              { step: '04', title: 'Launch', desc: 'Deploy and optimize for maximum impact' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-4xl font-bold text-primary/30 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {/* Connector Line */}
                {item.step !== '04' && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance-wrap">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals through innovative web solutions.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium inline-flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
