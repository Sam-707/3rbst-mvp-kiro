import DoctorCard from './DoctorCard'
import { bundeslaender, specialties } from '../data/mockDoctors'

export default function DoctorListing({ doctors, filters, setFilters, allDoctors }) {
  const recommendedDoctors = doctors.filter(d => d.recommended)
  const otherDoctors = doctors.filter(d => !d.recommended)

  return (
    <section id="doctors" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Verified Female Doctors
          </h2>
          <p className="text-lg text-gray-600">
            All doctors are carefully selected and verified by women in our community
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search by Name or City
                </label>
                <input
                  type="text"
                  placeholder="e.g., München, Dr. Weber"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>

              {/* Bundesland Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bundesland
                </label>
                <select
                  value={filters.bundesland}
                  onChange={(e) => setFilters({ ...filters, bundesland: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="">All Bundesländer</option>
                  {bundeslaender.map(bl => (
                    <option key={bl} value={bl}>{bl}</option>
                  ))}
                </select>
              </div>

              {/* Specialty Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialty
                </label>
                <select
                  value={filters.specialty}
                  onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="">All Specialties</option>
                  {specialties.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600 text-center">
              Showing {doctors.length} of {allDoctors.length} doctors
            </div>
          </div>
        </div>

        {/* Recommended Doctors */}
        {recommendedDoctors.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-6 h-6 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">
                Top Recommended
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedDoctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        )}

        {/* All Doctors */}
        {otherDoctors.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              All Verified Doctors
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherDoctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {doctors.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={() => setFilters({ bundesland: '', specialty: '', search: '' })}
              className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
