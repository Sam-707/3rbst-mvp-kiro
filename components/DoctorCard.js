export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {doctor.name}
          </h3>
          <p className="text-rose-500 font-medium">
            {doctor.specialty}
          </p>
        </div>
        {doctor.verified && (
          <div className="flex-shrink-0 ml-2">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center" title="Verified by community">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Verification Badge */}
      {doctor.verified && (
        <div className="inline-flex items-center space-x-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4 w-fit">
          <span>💚</span>
          <span>Verified by women in our community</span>
        </div>
      )}

      {/* Location */}
      <div className="flex items-center space-x-2 text-gray-600 mb-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{doctor.city}, {doctor.bundesland}</span>
      </div>

      {/* Languages */}
      <div className="flex items-start space-x-2 text-gray-600 mb-4">
        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="text-sm">{doctor.languages}</span>
      </div>

      {/* Description */}
      {doctor.description && (
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {doctor.description}
        </p>
      )}

      {/* Contact Info */}
      <div className="space-y-2 mb-4 pt-4 border-t border-gray-100">
        {doctor.phone && (
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${doctor.phone}`} className="text-gray-700 hover:text-rose-500 transition">
              {doctor.phone}
            </a>
          </div>
        )}
        {doctor.email && (
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`mailto:${doctor.email}`} className="text-gray-700 hover:text-rose-500 transition truncate">
              {doctor.email}
            </a>
          </div>
        )}
        {doctor.website && (
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <a href={doctor.website} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-rose-500 transition truncate">
              Website
            </a>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <div className="text-xs text-gray-500 text-center mb-2">
          Contact directly — your choice, your comfort
        </div>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={doctor.jameda_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-beige-100 text-gray-700 rounded-lg hover:bg-beige-200 transition text-center text-sm font-medium"
          >
            View on Jameda
          </a>
          <a
            href={doctor.doctolib_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition text-center text-sm font-medium"
          >
            View on Doctolib
          </a>
        </div>
      </div>
    </div>
  )
}
