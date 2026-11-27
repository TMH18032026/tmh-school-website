// ALL website photos are set here, in one place.
// Replace any URL with your own: a full web link (https://...) or a file you put in
// the public/ folder (for example '/gallery/annual-day.jpg').
// The links below are temporary sample photos from picsum.photos.

const sample = (name, w = 1200, h = 800) => `https://picsum.photos/seed/tmh-${name}/${w}/${h}`

export const images = {
  // Home page
  hero: sample('hero', 1600, 900),
  about: sample('about', 900, 700),

  // Director and Principal photos (square works best)
  director: sample('director', 600, 600),
  principal: sample('principal', 600, 600),

  // Hostel page
  hostel: sample('hostel', 1000, 700),

  // Home page "Life at our school" (6 photos, in this order)
  galleryHome: [
    sample('home-1'), // Annual Day
    sample('home-2'), // Sports Day
    sample('home-3'), // Classroom
    sample('home-4'), // Science Fair
    sample('home-5'), // Art & Craft
    sample('home-6'), // Celebrations
  ],

  // Gallery page (20 photos, same order as GALLERY_ITEMS in src/data/schoolData.js)
  gallery: [
    sample('g-1', 800, 800), // School building
    sample('g-2', 800, 800), // Playground view
    sample('g-3', 800, 800), // Smart class
    sample('g-4', 800, 800), // Group study
    sample('g-5', 800, 800), // Science lab
    sample('g-6', 800, 800), // Computer lab
    sample('g-7', 800, 800), // Library hour
    sample('g-8', 800, 800), // Sports Day
    sample('g-9', 800, 800), // Football
    sample('g-10', 800, 800), // Music & Dance
    sample('g-11', 800, 800), // Art & Craft
    sample('g-12', 800, 800), // Annual Function
    sample('g-13', 800, 800), // Independence Day
    sample('g-14', 800, 800), // Republic Day
    sample('g-15', 800, 800), // Educational tour
    sample('g-16', 800, 800), // Hostel life
    sample('g-17', 800, 800), // Hostel room
    sample('g-18', 800, 800), // Hostel mess
    sample('g-19', 800, 800), // Hostel celebration
    sample('g-20', 800, 800), // School bus
  ],
}
