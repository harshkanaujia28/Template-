'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web-design',
      challenge: 'Build modern marketplace',
      results: '250% revenue increase',
      image: '/ecommerse.jpg'
    },
    {
      id: 2,
      title: 'Brand Identity',
      category: 'branding',
      challenge: 'Create distinctive brand',
      results: '90% brand recognition',
      image: '/Branding.jpg'
    },
    {
      id: 3,
      title: 'Mobile App',
      category: 'development',
      challenge: 'iOS & Android native app',
      results: '100K+ downloads',
      image: '/app.jpg'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'web-design',
      challenge: 'Complex data visualization',
      results: '95% user satisfaction',
      image: '/saas.jpg'
    },
    {
      id: 5,
      title: 'Marketing Campaign',
      category: 'strategy',
      challenge: 'Multi-channel campaign',
      results: '400% ROI',
      image: '/marketing.jpg'
    },
    {
      id: 6,
      title: 'Content Platform',
      category: 'development',
      challenge: 'Real-time collaboration',
      results: '50M+ pages indexed',
      image: '/content.jpg'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'development', label: 'Development' },
    { id: 'branding', label: 'Branding' },
    { id: 'strategy', label: 'Strategy' },
  ]

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance-wrap">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance-wrap">
            Explore our latest projects and see how we've transformed businesses through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full transition-all ${filter === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:border-primary'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-card border border-border rounded-lg mb-4 overflow-hidden group-hover:border-primary transition-all">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />

                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.category.replace('-', ' ')}</p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    View Details <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance-wrap">
              Interested in a Project Like This?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project goals and create a custom solution that drives results.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium inline-flex items-center gap-2"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
