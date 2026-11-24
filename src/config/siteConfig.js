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

export const site = {
  name: clean(env.VITE_SCHOOL_NAME, 'T.M.H International School'),
  shortName: clean(env.VITE_SCHOOL_SHORT_NAME, 'T.M.H'),
  place,
  address,
  session: clean(env.VITE_ADMISSION_SESSION, '2027-28'),
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
  // mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  mapsLink: 'https://maps.app.goo.gl/SJP2Yjc53SzCcdAKA',
}
