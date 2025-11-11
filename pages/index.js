import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import DoctorListing from '../components/DoctorListing'
import Footer from '../components/Footer'
import { mockDoctors } from '../data/mockDoctors'

export default function Home() {
  const [filters, setFilters] = useState({
    bundesland: '',
    specialty: '',
    search: ''
  })

  // Filter doctors based on current filters
  const filteredDoctors = mockDoctors.filter(doctor => {
    const matchesBundesland = !filters.bundesland || doctor.bundesland === filters.bundesland
    const matchesSpecialty = !filters.specialty || doctor.specialty === filters.specialty
    const matchesSearch = !filters.search || 
      doctor.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      doctor.city.toLowerCase().includes(filters.search.toLowerCase())
    
    return matchesBundesland && matchesSpecialty && matchesSearch
  })

  return (
    <>
      <Head>
        <title>3rbst - Curated Female Doctors for Women | First in Germany</title>
        <meta name="description" content="Discover female doctors carefully selected and verified by women in our community. Your comfort, privacy, and trust come first." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-beige-50">
        <Header />
        <Hero />
        <HowItWorks />
        <DoctorListing 
          doctors={filteredDoctors}
          filters={filters}
          setFilters={setFilters}
          allDoctors={mockDoctors}
        />
        <Footer />
      </div>
    </>
  )
}
