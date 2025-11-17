import Link from 'next/link'
import Image from 'next/image'
import { Clock, User, ArrowLeft, Share2 } from 'lucide-react'

const posts: { [key: string]: any } = {
  '1': {
    title: 'The Future of Web Design Trends in 2025',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    readTime: 8,
    category: 'design',
    excerpt: 'Explore upcoming design trends that will shape the digital landscape this year.',
    content: `
      <h2>Introduction</h2>
      <p>Web design is constantly evolving. As we look ahead to 2025, several exciting trends are emerging that will shape how we create digital experiences.</p>

      <h2>Trend 1: AI-Powered Design</h2>
      <p>Artificial intelligence is revolutionizing the design process. AI tools are now capable of generating layouts, color schemes, and even complete design systems based on minimal input.</p>

      <h2>Trend 2: Minimalism Continues</h2>
      <p>The minimalist approach to design continues to gain traction. Clean interfaces with plenty of whitespace improve usability and create a more premium feel.</p>

      <h2>Trend 3: Interactive Experiences</h2>
      <p>Users expect more than static websites. Interactive elements, animations, and immersive experiences are becoming standard expectations.</p>

      <h2>Conclusion</h2>
      <p>These trends represent the future of web design. By embracing these approaches, designers can create experiences that are both beautiful and functional.</p>
    `,
    relatedPosts: [2, 3],
  },
  '2': {
    title: 'Mastering SEO: A Complete Guide to Rankings',
    author: 'Lisa Anderson',
    date: '2025-01-10',
    readTime: 12,
    category: 'seo',
    excerpt: 'Learn proven strategies to improve your search engine visibility and drive organic traffic.',
    content: `
      <h2>Introduction</h2>
      <p>SEO remains one of the most valuable skills in digital marketing. This comprehensive guide covers everything you need to know about ranking higher.</p>

      <h2>Technical SEO Fundamentals</h2>
      <p>Before anything else, your site needs to be technically sound. This includes proper site structure, mobile optimization, and page speed.</p>

      <h2>Content Strategy</h2>
      <p>Content is king. Create valuable, relevant content that answers your audience's questions and targets the right keywords.</p>

      <h2>Building Authority</h2>
      <p>Quality backlinks from reputable sites signal authority to search engines. Focus on earning links through great content.</p>

      <h2>Measuring Success</h2>
      <p>Track your progress using analytics. Monitor rankings, traffic, and conversions to measure the impact of your SEO efforts.</p>
    `,
    relatedPosts: [1, 4],
  },
  '3': {
    title: 'Why UX Design Matters for Conversions',
    author: 'Emily Rodriguez',
    date: '2025-01-05',
    readTime: 6,
    category: 'design',
    excerpt: 'Understand how great UX design directly impacts your bottom line.',
    content: `
      <h2>The Connection Between UX and Conversions</h2>
      <p>Great user experience design directly impacts your conversion rates. Users who have a smooth, intuitive experience are more likely to convert.</p>

      <h2>Key UX Principles</h2>
      <p>Understand user needs, create clear navigation, reduce friction, and make calls-to-action obvious. These principles drive conversions.</p>

      <h2>Testing and Optimization</h2>
      <p>Use A/B testing and user testing to optimize your designs. Small improvements can lead to significant increases in conversion rates.</p>

      <h2>Real-World Results</h2>
      <p>Companies that invest in UX design see measurable results. Improved user satisfaction leads to higher conversion rates and customer loyalty.</p>
    `,
    relatedPosts: [1, 5],
  },
  '4': {
    title: 'Next.js Performance Optimization Tips',
    author: 'Michael Chen',
    date: '2024-12-28',
    readTime: 10,
    category: 'development',
    excerpt: 'Practical techniques to make your Next.js applications blazingly fast.',
    content: `
      <h2>Why Performance Matters</h2>
      <p>Fast websites improve user experience and SEO rankings. Every millisecond matters when it comes to performance.</p>

      <h2>Image Optimization</h2>
      <p>Use Next.js Image component for automatic optimization. Always provide proper dimensions and use appropriate formats.</p>

      <h2>Code Splitting and Lazy Loading</h2>
      <p>Split your code into smaller chunks and load them only when needed. This reduces initial bundle size and improves load times.</p>

      <h2>Caching Strategies</h2>
      <p>Implement proper caching headers. Use ISR (Incremental Static Regeneration) to balance freshness and performance.</p>

      <h2>Monitoring Performance</h2>
      <p>Use tools like Web Vitals to monitor performance metrics. Track LCP, FID, and CLS to ensure optimal user experience.</p>
    `,
    relatedPosts: [2, 5],
  },
  '5': {
    title: 'Building a Strong Brand Identity',
    author: 'Sarah Johnson',
    date: '2024-12-20',
    readTime: 9,
    category: 'branding',
    excerpt: 'Essential elements to create a memorable and consistent brand presence.',
    content: `
      <h2>The Foundation of Branding</h2>
      <p>A strong brand identity is built on clarity of purpose, values, and a clear understanding of your target audience.</p>

      <h2>Visual Identity</h2>
      <p>Develop a cohesive visual system including logo, color palette, typography, and imagery that reflects your brand.</p>

      <h2>Brand Voice and Messaging</h2>
      <p>Define how your brand communicates. Your voice and messaging should be consistent across all touchpoints.</p>

      <h2>Building Consistency</h2>
      <p>Consistency builds recognition and trust. Create brand guidelines to ensure consistency across all platforms and materials.</p>

      <h2>Living Your Brand</h2>
      <p>Your brand is more than design. It's about delivering on your promises and creating meaningful customer experiences.</p>
    `,
    relatedPosts: [1, 3],
  },
}

type Params = Promise<{ id: string }>

export async function generateStaticParams() {
  return Object.keys(posts).map((id) => ({ id }))
}

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params
  const id = params.id
  const post = posts[id]
  return {
    title: `${post.title} - Blog - Agency`,
    description: post.excerpt,
  }
}

export default async function BlogPost(props: { params: Params }) {
  const params = await props.params
  const id = params.id
  const post = posts[id]

  const postImages: { [key: string]: string } = {
    '1': '/blog-web-design-trends.jpg',
    '2': '/blog-seo-guide.jpg',
    '3': '/blog-ux-conversions.jpg',
    '4': '/blog-nextjs-performance.jpg',
    '5': '/blog-brand-identity.jpg',
  }

  if (!post) {
    return <div>Post not found</div>
  }

  const relatedPosts = post.relatedPosts.map((postId: number) => posts[postId.toString()])

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 border-b border-border">
        <div className="container-max">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft size={18} /> Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4 capitalize">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance-wrap">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">{post.excerpt}</p>

          {/* Author Info */}
          <div className="flex flex-wrap gap-4 md:gap-8 pt-6 border-t border-border">
            <div className="flex items-center gap-2">
              <Image
                src="/author-avatar.jpg"
                alt={post.author}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{post.author}</p>
                <p className="text-xs text-muted-foreground">Author</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock size={18} />
              <span className="text-sm">{post.readTime} min read</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="border-b border-border">
        <div className="container-max">
          <div className="relative aspect-video rounded-lg overflow-hidden border border-border my-12">
            <Image
              src={postImages[id] || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding border-b border-border">
        <div className="container-max max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <div
              className="space-y-6 text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/<h2>/g, '<h2 class="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">')
                  .replace(/<p>/g, '<p class="text-base leading-relaxed mb-4">')
                  .replace(/<\/p>/g, '</p>')
                  .replace(/<\/h2>/g, '</h2>'),
              }}
            />
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border flex items-center gap-4">
            <span className="text-foreground font-medium">Share:</span>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                <button
                  key={platform}
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={`Share on ${platform}`}
                >
                  <Share2 size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding border-b border-border">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.slice(0, 2).map((relatedPost: any) => {
                const relatedId = Object.keys(posts).find(k => posts[k].title === relatedPost.title)
                return (
                  <Link key={relatedPost.title} href={`/blog/${relatedId}`}>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-lg overflow-hidden border border-border mb-4 group-hover:border-primary transition-all">
                        <Image
                          src={postImages[relatedId || '1']}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-xs font-semibold text-primary uppercase mb-2 inline-block capitalize">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance-wrap">
              Ready to grow your business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our proven strategies and solutions.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
