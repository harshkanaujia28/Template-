import { CheckCircle2, Users, Lightbulb, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About Us - Agency',
  description: 'Learn about our team, values, and approach to creating exceptional digital solutions.',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance-wrap">
            About Our Agency
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance-wrap">
            We're a team of passionate creators and strategists dedicated to transforming brands through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We empower businesses to thrive in the digital landscape by creating innovative, user-centric solutions that drive measurable results. Our mission is to be the strategic partner that transforms your vision into digital reality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project we undertake is approached with dedication, creativity, and a commitment to excellence that sets us apart.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We envision a future where technology seamlessly enhances human experiences and business success. We strive to be recognized as leaders in digital innovation, known for pushing boundaries and delivering transformative solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our vision guides every decision we make and every solution we create, ensuring we always deliver beyond expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-balance-wrap">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Innovation', desc: 'We constantly push boundaries and embrace new technologies' },
              { icon: Target, title: 'Excellence', desc: 'We deliver quality that exceeds expectations every time' },
              { icon: Users, title: 'Collaboration', desc: 'We work closely with clients as true partners' },
              { icon: CheckCircle2, title: 'Integrity', desc: 'We operate with honesty and transparency always' },
            ].map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="p-6 bg-card border border-border rounded-lg">
                  <Icon className="text-primary mb-4" size={32} />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance-wrap">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Creative Director', expertise: 'Brand Strategy & Design', img: '/team/sarah.jpg' },
              { name: 'Michael Chen', role: 'Lead Developer', expertise: 'Full-Stack Development', img: '/team/michael.jpg' },
              { name: 'Emily Rodriguez', role: 'UX Strategist', expertise: 'User Experience Design', img: '/team/emily.jpg' },
              { name: 'James Wilson', role: 'Project Manager', expertise: 'Delivery & Client Relations', img: '/team/james.jpg' },
              { name: 'Lisa Anderson', role: 'Marketing Specialist', expertise: 'SEO & Content Strategy', img: '/team/lisa.jpg' },
              { name: 'David Kumar', role: 'QA Engineer', expertise: 'Quality Assurance', img: '/team/david.jpg' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden border border-border">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.expertise}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-balance-wrap">
            Our Journey
          </h2>

          <div className="space-y-8">
            {[
              { year: '2013', title: 'Founded', desc: 'Agency was founded with a vision to transform digital landscape' },
              { year: '2015', title: 'First 50 Projects', desc: 'Reached a milestone with successful completion of 50 projects' },
              { year: '2017', title: 'Team Expansion', desc: 'Grew to 30+ talented professionals across multiple disciplines' },
              { year: '2019', title: 'Awards & Recognition', desc: 'Won multiple industry awards for design and innovation' },
              { year: '2021', title: '100+ Clients', desc: 'Surpassed 100 satisfied clients across diverse industries' },
              { year: '2025', title: 'Industry Leaders', desc: 'Recognized as leaders in premium digital solutions' },
            ].map((item, index) => (
              <div key={item.year} className="flex gap-6 md:gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mb-4 md:mb-0"></div>
                  {index !== 5 && <div className="w-0.5 h-20 bg-border"></div>}
                </div>
                <div className="pb-8 md:pb-0">
                  <p className="text-sm font-semibold text-primary mb-1">{item.year}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
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
              Let's Create Something Great Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to partner with us? Let's discuss your next project and bring your vision to life.
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
