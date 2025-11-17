'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance-wrap">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance-wrap">
                Have a project in mind? Let's discuss how we can help bring your vision to life.
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
              <Image
                src="/professional-team-collaboration-meeting.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:hello@agency.com" className="text-foreground hover:text-primary transition-colors">
                      hello@agency.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground">
                      123 Business St.<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 md:p-10">
                {submitted && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm">
                    Thank you! We've received your message and will get back to you soon.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-balance-wrap">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Working with Agency transformed our digital presence. The results exceeded our expectations.',
                author: 'Sarah Mitchell',
                company: 'TechStart Inc.',
                rating: 5,
              },
              {
                quote: 'Professional, creative, and results-driven. They delivered on time and on budget.',
                author: 'James Rodriguez',
                company: 'Creative Studios',
                rating: 5,
              },
              {
                quote: 'The team understood our vision and executed it perfectly. Highly recommended!',
                author: 'Emily Chen',
                company: 'Digital Marketing Co.',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border flex-shrink-0">
                    <Image
                      src={`/.jpg?key=a6ovs&height=100&width=100&query=${encodeURIComponent('professional headshot ' + testimonial.author)}`}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-balance-wrap">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on complexity. A typical website project takes 4-8 weeks from discovery to launch.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes, we offer ongoing maintenance and support packages to keep your site running smoothly.',
              },
              {
                q: 'What is your process?',
                a: 'We follow a proven process: Discovery → Strategy → Design → Development → Testing → Launch → Support.',
              },
              {
                q: 'Can you work with existing systems?',
                a: 'Absolutely. We can integrate with most existing systems and platforms.',
              },
            ].map((item, i) => (
              <div key={i} className="pb-6 border-b border-border last:border-0">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
