'use client'

import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')


  const posts = [
    {
      id: 1,
      title: 'The Future of Web Design Trends in 2025',
      excerpt:
        'Explore upcoming design trends that will shape the digital landscape this year.',
      category: 'design',
      author: 'Sarah Johnson',
      readTime: 8,
      date: '2025-01-15',
      featured: true,
      image:
        '/blog-web-design-trends.jpg'
      // Modern futuristic UI design – best fit
    },
    {
      id: 2,
      title: 'Mastering SEO: A Complete Guide to Rankings',
      excerpt:
        'Learn proven strategies to improve your search engine visibility and drive organic traffic.',
      category: 'seo',
      author: 'Lisa Anderson',
      readTime: 12,
      date: '2025-01-10',
      featured: false,
      image:
        '/blog-seo-guide.jpg'
      // SEO analytics dashboard / search ranking charts
    },
    {
      id: 3,
      title: 'Why UX Design Matters for Conversions',
      excerpt:
        'Understand how great UX design directly impacts your bottom line.',
      category: 'design',
      author: 'Emily Rodriguez',
      readTime: 6,
      date: '2025-01-05',
      featured: false,
      image:
        '/blog-ux-conversions.jpg'
      // UX wireframes / conversion-focused design
    },
    {
      id: 4,
      title: 'Next.js Performance Optimization Tips',
      excerpt:
        'Practical techniques to make your Next.js applications blazingly fast.',
      category: 'development',
      author: 'Michael Chen',
      readTime: 10,
      date: '2024-12-28',
      featured: true,
      image:
        '/blog-nextjs-performance.jpg'
      // Developer performance optimization workspace
    },
    {
      id: 5,
      title: 'Building a Strong Brand Identity',
      excerpt:
        'Essential elements to create a memorable and consistent brand presence.',
      category: 'branding',
      author: 'Sarah Johnson',
      readTime: 9,
      date: '2024-12-20',
      featured: false,
      image:
        '/blog-brand-identity.jpg'
      // Branding mood boards / brand style guide
    }
  ];


  const categories = ['all', 'design', 'development', 'seo', 'branding']

  const featured = posts.filter((p) => p.featured)
  const filtered =
    selectedCategory === 'all'
      ? posts.filter((p) => !p.featured)
      : posts.filter((p) => p.category === selectedCategory && !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance-wrap">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance-wrap">
            Insights, tips, and industry trends from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="section-padding border-b border-border">
          <div className="container-max">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="group cursor-pointer">
                    <div className="aspect-video bg-card border border-border rounded-lg mb-4 overflow-hidden group-hover:border-primary transition-all">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <span className="text-xs font-semibold text-primary uppercase mb-2 inline-block">
                      {post.category}
                    </span>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User size={14} /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {post.readTime} min read
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all capitalize ${selectedCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:border-primary'
                  }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-card border border-border rounded-lg mb-4 overflow-hidden group-hover:border-primary transition-all">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <span className="text-xs font-semibold text-primary uppercase mb-2 inline-block">
                    {post.category}
                  </span>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User size={14} /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {post.readTime} min
                      </span>
                    </div>
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest insights and tips delivered to your inbox monthly.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
