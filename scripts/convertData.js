/**
 * Convert enriched CSV data to mockDoctors.js format
 * Run with: node scripts/convertData.js
 */

const fs = require('fs');
const path = require('path');

// Simple CSV parser that handles quoted fields
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

// Read the CSV file
const csvPath = path.join(__dirname, '../data/female_doctors_enriched_simple.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV
const lines = csvContent.split('\n');
const headers = parseCSVLine(lines[0]);

// Find column indices
const getIndex = (name) => headers.findIndex(h => h.toLowerCase().includes(name.toLowerCase()));

const idIdx = getIndex('id');
const nameIdx = getIndex('name');
const specialtyIdx = getIndex('specialty');
const cityIdx = getIndex('city');
const stateIdx = getIndex('state');
const phoneIdx = getIndex('phone');
const websiteIdx = getIndex('website');
const streetIdx = getIndex('street');
const postcodeIdx = getIndex('postcode');
const fullAddressIdx = getIndex('full_address');
const languagesIdx = getIndex('languages');
const jamedaIdx = getIndex('jameda');
const doctolibIdx = getIndex('doctolib');
const confidenceIdx = getIndex('confidence');

// Convert to doctors array
const doctors = [];
let recommendedCount = 0;

for (let i = 1; i < lines.length; i++) {
  if (!lines[i].trim()) continue;
  
  const cols = parseCSVLine(lines[i]);
  
  const name = cols[nameIdx]?.trim() || '';
  if (!name) continue;
  
  const specialty = cols[specialtyIdx]?.trim() || 'Allgemeinmedizin';
  const city = cols[cityIdx]?.trim() || '';
  const state = cols[stateIdx]?.trim() || '';
  const confidence = parseFloat(cols[confidenceIdx]) || 0;
  
  // Mark top doctors as recommended
  const isRecommended = recommendedCount < 3 && confidence >= 0.95;
  if (isRecommended) recommendedCount++;
  
  const street = cols[streetIdx]?.trim() || '';
  const postcode = cols[postcodeIdx]?.trim() || '';
  const fullAddress = cols[fullAddressIdx]?.trim() || '';
  
  // Build address string
  let address = fullAddress;
  if (!address && street && postcode) {
    address = `${street}, ${postcode} ${city}`;
  } else if (!address && city) {
    address = city;
  }
  
  doctors.push({
    id: cols[idIdx]?.trim() || `DOC-${i}`,
    name: name,
    specialty: specialty,
    bundesland: state,
    city: city,
    street: street,
    postcode: postcode,
    address: address,
    phone: cols[phoneIdx]?.trim() || '',
    email: '', // Not in CSV
    website: cols[websiteIdx]?.trim() || '',
    languages: cols[languagesIdx]?.trim() || 'Deutsch',
    verified: confidence >= 0.85,
    recommended: isRecommended,
    jameda_url: cols[jamedaIdx]?.trim() || '',
    doctolib_url: cols[doctolibIdx]?.trim() || '',
    description: `Spezialisiert auf ${specialty}`
  });
}

// Generate the mockDoctors.js file
const output = `/**
 * Real doctor data from enriched dataset
 * Generated from female_doctors_enriched_simple.csv
 * Total doctors: ${doctors.length}
 */

export const mockDoctors = ${JSON.stringify(doctors, null, 2)}

// Extract unique values for filters
export const bundeslaender = [...new Set(mockDoctors.map(d => d.bundesland))].sort()
export const specialties = [...new Set(mockDoctors.map(d => d.specialty))].sort()
`;

// Write to mockDoctors.js
const outputPath = path.join(__dirname, '../data/mockDoctors.js');
fs.writeFileSync(outputPath, output);

console.log('✅ Successfully converted data!');
console.log(`   Total doctors: ${doctors.length}`);
console.log(`   Recommended: ${recommendedCount}`);
console.log(`   Verified: ${doctors.filter(d => d.verified).length}`);
console.log(`   States: ${[...new Set(doctors.map(d => d.bundesland))].length}`);
console.log(`   Specialties: ${[...new Set(doctors.map(d => d.specialty))].length}`);
console.log('');
console.log('📄 Updated: data/mockDoctors.js');
