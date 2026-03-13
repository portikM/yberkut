import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HomePage() {
  const services = [
    {
      emoji: "📋",
      title: "Invoicing & Estimates (QuickBooks Online)",
      description: "Professional estimates and invoices created in QuickBooks Online to help you bill accurately and present your business professionally."
    },
    {
      emoji: "📝",
      title: "Job Descriptions & Documentation",
      description: "Clear, organized job write-ups and supporting documentation to help keep your records complete and easy to reference."
    },
    {
      emoji: "💰",
      title: "Accounts Receivable & Payment Tracking",
      description: "Ongoing tracking of outstanding invoices and payments so you always know what is due, what has been paid, and what needs follow-up."
    },
    {
      emoji: "🏢",
      title: "Condo / Property Management Billing",
      description: "Billing support tailored to contractors working with condos and property management companies, including organized submission-ready invoicing."
    },
    {
      emoji: "✉️",
      title: "Client Communication & Administrative Support",
      description: "Reliable day-to-day support with client-facing admin tasks, helping you stay responsive, organized, and on top of paperwork."
    },
    {
      emoji: "📊",
      title: "QuickBooks Online Support",
      description: "Practical help with QuickBooks Online so your records stay accurate, up to date, and easier to manage."
    }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yuliia Berkut',
    jobTitle: 'Accountant & Bookkeeper',
    url: 'https://yberkut.com',
    email: 'yberkut@icloud.com',
    telephone: '+16475711536',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'Ontario',
      addressCountry: 'CA',
    },
    knowsAbout: [
      'Bookkeeping',
      'QuickBooks Online',
      'Invoicing',
      'Accounts Receivable',
      'Contractor Accounting',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white sticky top-0 z-50">
          <div className="container mx-auto px-6 py-6 max-w-4xl">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">Yuliia Berkut</span>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-gray-200 hover:bg-gray-50"
              >
                <a href="/Resume_Yuliia_Berkut.pdf" download>
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8">
              <Image
                src="/yberkut.png"
                alt="Yuliia Berkut"
                width={128}
                height={128}
                className="rounded-full object-cover border border-gray-200"
                priority
              />
            </div>

            {/* Intro Text */}
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              I&apos;m Yuliia — Accountant &amp; Bookkeeper for Contractors
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg mx-auto">
              I help contractors in Toronto stay organized with invoicing, bookkeeping, and taxes, so they can spend less time on paperwork and more time running their business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
              >
                <a href="#contact">Get in touch</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-gray-200 hover:bg-gray-50"
              >
                <a href="/Resume_Yuliia_Berkut.pdf" download>
                  Download resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-6 py-16 max-w-4xl">
          <h2 className="text-sm font-medium text-gray-400 mb-6">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Work With Me */}
        <section className="container mx-auto px-6 py-16 max-w-4xl">
          <h2 className="text-sm font-medium text-gray-400 mb-6">Why work with me</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contractor-focused</h3>
              <p className="text-gray-600 leading-relaxed">
                I work with the day-to-day realities of contracting businesses in mind — multiple jobs, supplier costs, client invoices, and tight deadlines. My support is tailored to keep your finances organized and your operations running smoothly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local &amp; trusted</h3>
              <p className="text-gray-600 leading-relaxed">
                Based in Toronto, I bring local knowledge and dependable support tailored to contractors working across Ontario. You can count on organized, professional help that fits your business.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Save time &amp; stay organized</h3>
              <p className="text-gray-600 leading-relaxed">
                I help reduce admin work, keep your records in order, and stay ahead of deadlines, so you can focus on the work that drives revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-16 max-w-4xl border-t border-gray-100">
          <h2 className="text-sm font-medium text-gray-400 mb-6">Contact</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <a href="mailto:yberkut@icloud.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  yberkut@icloud.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <a href="tel:+16475711536" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  (647) 571-1536
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">Toronto, Ontario</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Yuliia Berkut. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
