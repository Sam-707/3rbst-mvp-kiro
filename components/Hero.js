export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-beige-50 via-rose-50 to-beige-100 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">First in Germany 🇩🇪</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Curated Female Doctors for Women
              <span className="block text-rose-500 mt-2">— the First Platform of Its Kind</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover female doctors carefully selected and verified by women in our community. 
              Your comfort, privacy, and trust come first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#doctors"
                className="px-8 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition font-medium text-center shadow-lg hover:shadow-xl"
              >
                Explore Doctors
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition font-medium text-center shadow-md"
              >
                How It Works
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Community Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Privacy First</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Female-Led</span>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Illustration placeholder - you can replace with actual image */}
              <div className="aspect-square bg-gradient-to-br from-rose-100 to-beige-100 rounded-2xl flex items-center justify-center">
                <svg className="w-48 h-48 text-rose-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">600+</div>
                  <div className="text-xs text-gray-600">Verified Doctors</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">16</div>
                  <div className="text-xs text-gray-600">Bundesländer</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
