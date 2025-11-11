export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Browse Curated Doctors",
      description: "Explore our carefully selected female doctors by specialty or city. Every doctor is verified by women in our community.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Check Verification & Info",
      description: "Review doctor profiles with community verification badges, languages spoken, and complete contact information.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Contact Directly",
      description: "Reach out to doctors directly via phone, email, or their website. Your choice, your comfort — we don't handle bookings.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How 3rbst Works
          </h2>
          <p className="text-lg text-gray-600">
            Simple, transparent, and designed for your comfort. No booking, no hassle — just discovery and connection.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-rose-200 to-transparent -translate-x-1/2 z-0"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-beige-50 rounded-2xl p-8 hover:shadow-lg transition h-full">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-rose-500 mb-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Ready to find your trusted female doctor?
          </p>
          <a
            href="#doctors"
            className="inline-block px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition font-medium shadow-lg"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </section>
  )
}
