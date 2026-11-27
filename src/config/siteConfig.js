// Reads every school detail from the .env file (Vite exposes only VITE_* variables).
// Change a value in .env, restart `npm run dev`, and the whole site updates.

const env = import.meta.env

const clean = (value, fallback = '') =>
  typeof value === 'string' && value.trim() ? value.trim() : fallback

const phone = clean(env.VITE_PHONE, '+91 00000 00000')
const whatsappNumber = clean(env.VITE_WHATSAPP_NUMBER, phone).replace(/\D/g, '')
const email = clean(env.VITE_EMAIL, 'info@tmhschool.com')
const place = clean(env.VITE_SCHOOL_PLACE, 'Sheohar, Bihar')
const address = clean(env.VITE_SCHOOL_ADDRESS, place)

// Session like "2027-28" -> start year 2027, end year 2028 (used for dates across the site)
const session = clean(env.VITE_ADMISSION_SESSION, '2027-28')
const sessionStartYear = parseInt(session.slice(0, 4), 10) || new Date().getFullYear()
const sessionEndYear = sessionStartYear + 1
const mapLink = clean(env.VITE_SCHOOL_MAP_LINK, `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`)

export const site = {
  name: clean(env.VITE_SCHOOL_NAME, 'T.M.H International School'),
  shortName: clean(env.VITE_SCHOOL_SHORT_NAME, 'T.M.H'),
  place,
  address,
  motto: clean(env.VITE_MOTTO, 'Learn Today, Lead Tomorrow'),
  hostelName: 'T.M.H. Hostel & Residency',
  hostelTagline: 'Safe Living | Quality Education | Holistic Development',
  hostelAddress: clean(env.VITE_HOSTEL_ADDRESS, address),
  session,
  sessionStartYear,
  sessionEndYear,
  officeHours: clean(env.VITE_OFFICE_HOURS),

  phone,
  phoneHref: `tel:${phone.replace(/[^\d+]/g, '')}`,
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  email,

  // Enquiry and newsletter messages are delivered to this address
  queryEmail: clean(env.VITE_QUERY_EMAIL, email),

  instagram: clean(env.VITE_INSTAGRAM_URL),
  facebook: clean(env.VITE_FACEBOOK_URL),
  youtube: clean(env.VITE_YOUTUBE_URL),

  // Optional: Google Maps "Embed a map" link (the src="..." of the iframe)
  mapEmbedUrl: clean(env.VITE_MAP_EMBED_URL),
  mapsLink: mapLink,
  hostelMapsLink: clean(env.VITE_HOSTEL_MAP_LINK, mapLink),

  // People
  directorName: clean(env.VITE_DIRECTOR_NAME, 'Director Name'),
  principalName: clean(env.VITE_PRINCIPAL_NAME, 'Principal Name'),
  chairmanName: clean(env.VITE_CHAIRMAN_NAME, 'Chairman Name'),
  managerName: clean(env.VITE_MANAGER_NAME, 'Manager Name'),

  // Fees (shown on the Admissions and Hostel pages)
  fees: {
    registration: clean(env.VITE_FEE_REGISTRATION),
    admission: clean(env.VITE_FEE_ADMISSION),
    annual: clean(env.VITE_FEE_ANNUAL),
    tuition: clean(env.VITE_FEE_TUITION),
    transport: clean(env.VITE_FEE_TRANSPORT),
  },
  hostelFees: {
    admission: clean(env.VITE_HOSTEL_FEE_ADMISSION),
    deposit: clean(env.VITE_HOSTEL_FEE_DEPOSIT),
    monthly: clean(env.VITE_HOSTEL_FEE_MONTHLY),
    mess: clean(env.VITE_HOSTEL_FEE_MESS),
  },
}
