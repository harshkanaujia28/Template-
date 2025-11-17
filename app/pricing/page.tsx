import { Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Pricing - Agency',
  description: 'Transparent pricing for our digital services and solutions.',
}

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects',
      price: '$5',
      period: '/month',
      features: [
        'Up to 5 projects',
        'Email support',
        'Basic analytics',
        'Monthly reporting',
        'Community access',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: '$29',
      period: '/month',
      features: [
        'Unlimited projects',
        'Priority email support',
        'Advanced analytics',
        'Weekly reporting',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
      ],
      cta: 'Choose Plan',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Pro',
        '24/7 phone support',
        'Custom solutions',
        'Daily reporting',
        'SLA guarantee',
        'White-label options',
        'Strategic consulting',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <>
      {/* Hero with Image */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance-wrap">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance-wrap">
                Choose the perfect plan for your business. No hidden fees, cancel anytime.
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
              <Image
                src="/pricing-illustration.jpg"
                alt="Pricing Plans"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-lg overflow-hidden transition-all ${
                  plan.highlighted
                    ? 'ring-2 ring-primary bg-card border border-primary'
                    : 'bg-card border border-border hover:border-primary'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground py-2 text-center text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${plan.highlighted ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <button
                    className={`w-full py-2 rounded-lg font-medium transition-colors mb-8 ${
                      plan.highlighted
                        ? 'bg-primary text-primary-foreground hover:opacity-90'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex gap-3 items-start">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-balance-wrap">
            Compare All Plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Professional</th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Projects', starter: '5', pro: 'Unlimited', ent: 'Unlimited' },
                  { feature: 'Support', starter: 'Email', pro: 'Priority', ent: '24/7' },
                  { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', ent: 'Custom' },
                  { feature: 'API Access', starter: 'No', pro: 'Yes', ent: 'Yes' },
                  { feature: 'Integrations', starter: '5', pro: 'Unlimited', ent: 'Custom' },
                  { feature: 'SLA', starter: 'No', pro: '99%', ent: '99.9%' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border hover:bg-card/50">
                    <td className="py-4 px-4 text-foreground font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.starter}</td>
                    <td className="py-4 px-4 text-center text-foreground">{row.pro}</td>
                    <td className="py-4 px-4 text-center text-foreground">{row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-b border-border">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-balance-wrap">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
              },
              {
                q: 'Do you offer custom pricing?',
                a: 'Contact our sales team for custom solutions tailored to your specific needs.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No hidden fees. Our pricing is transparent and includes everything you need.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, bank transfers, and annual payment options.',
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance-wrap">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help. Get in touch and let's find the perfect solution for you.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
