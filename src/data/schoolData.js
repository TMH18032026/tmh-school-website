// All page content lives here. Edit text, numbers and lists in one place.
// `icon` names come from src/components/Icon.jsx.

export const STATS = [
  { end: 1000, suffix: '+', label: 'Students' },
  { end: 50, suffix: '+', label: 'Teachers & staff' },
  { end: 15, suffix: '+', label: 'Classrooms & labs' },
  { end: 100, suffix: '%', label: 'Focus on every child' },
]

export const FEATURES = [
  { icon: 'book', title: 'Strong academics', text: 'A well-planned curriculum with regular assessments, so every child builds a solid base in each subject.' },
  { icon: 'users', title: 'Caring teachers', text: 'Experienced teachers who know their students by name and guide them with patience.' },
  { icon: 'shield', title: 'Safe campus', text: 'A secure, supervised environment where children and parents feel at ease.' },
  { icon: 'monitor', title: 'Smart learning', text: 'Digital tools and activity-based lessons that make difficult topics easy to understand.' },
  { icon: 'activity', title: 'Sports & activities', text: 'Games, art, music and competitions that build teamwork, discipline and confidence.' },
  { icon: 'heart', title: 'Values first', text: 'Respect, honesty and discipline are part of daily school life, not just the syllabus.' },
]

export const STAGES = [
  { name: 'Pre-Primary', range: 'Nursery – UKG', text: 'Learning through play, stories, rhymes and creative activity.' },
  { name: 'Primary', range: 'Class I – V', text: 'Reading, writing and numeracy with curiosity and hands-on work.' },
  { name: 'Middle', range: 'Class VI – VIII', text: 'Deeper subject knowledge, projects and critical thinking.' },
  { name: 'Secondary', range: 'Class IX – X', text: 'Focused board preparation with mentoring and career guidance.' },
]

export const FACILITIES = [
  { icon: 'monitor', name: 'Smart classrooms' },
  { icon: 'flask', name: 'Science & computer labs' },
  { icon: 'book', name: 'Library' },
  { icon: 'activity', name: 'Playground & sports' },
  { icon: 'shield', name: 'CCTV-secured campus' },
  { icon: 'heart', name: 'First aid & care' },
]

export const GALLERY = [
  { label: 'Annual Day', tone: 'from-blue-800 to-blue-950' },
  { label: 'Sports Day', tone: 'from-amber-400 to-amber-600' },
  { label: 'Classroom', tone: 'from-sky-600 to-blue-800' },
  { label: 'Science Fair', tone: 'from-emerald-500 to-emerald-800' },
  { label: 'Art & Craft', tone: 'from-rose-400 to-rose-700' },
  { label: 'Celebrations', tone: 'from-violet-500 to-violet-800' },
]

// Leadership and teachers: replace the names and details with the real ones
export const FACULTY = [
  { name: 'Principal Name', role: 'Principal', detail: 'Add qualification and years of experience' },
  { name: 'Vice Principal Name', role: 'Vice Principal', detail: 'Add qualification and years of experience' },
  { name: 'Coordinator Name', role: 'Pre-Primary Coordinator', detail: 'Add qualification and years of experience' },
  { name: 'Coordinator Name', role: 'Primary Coordinator', detail: 'Add qualification and years of experience' },
  { name: 'Coordinator Name', role: 'Middle School Coordinator', detail: 'Add qualification and years of experience' },
  { name: 'Coordinator Name', role: 'Secondary Coordinator', detail: 'Add qualification and years of experience' },
]

export const FACILITY_DETAILS = [
  { icon: 'monitor', name: 'Smart classrooms', text: 'Bright, well-ventilated classrooms with digital teaching aids that make lessons clear and interesting.' },
  { icon: 'flask', name: 'Science & computer labs', text: 'Hands-on practical work in science and computers, so students learn by doing.' },
  { icon: 'book', name: 'Library', text: 'A quiet reading space with story books, reference books and magazines for every age group.' },
  { icon: 'activity', name: 'Playground & sports', text: 'Open play areas and regular sports periods for fitness, teamwork and fun.' },
  { icon: 'shield', name: 'Safe campus', text: 'CCTV monitoring and supervised entry and exit, so parents can be at ease.' },
  { icon: 'heart', name: 'First aid & care', text: 'Basic medical help and trained staff to look after children when they need it.' },
]

export const GALLERY_ITEMS = [
  { label: 'Annual Day', category: 'Events', tone: 'from-blue-800 to-blue-950' },
  { label: 'Independence Day', category: 'Events', tone: 'from-orange-500 to-green-700' },
  { label: 'Celebrations', category: 'Events', tone: 'from-violet-500 to-violet-800' },
  { label: 'Sports Day', category: 'Sports', tone: 'from-amber-400 to-amber-600' },
  { label: 'Football', category: 'Sports', tone: 'from-lime-500 to-green-700' },
  { label: 'Races', category: 'Sports', tone: 'from-red-500 to-red-800' },
  { label: 'Smart class', category: 'Classroom', tone: 'from-sky-600 to-blue-800' },
  { label: 'Library hour', category: 'Classroom', tone: 'from-indigo-500 to-indigo-800' },
  { label: 'Lab work', category: 'Classroom', tone: 'from-teal-500 to-teal-800' },
  { label: 'Art & Craft', category: 'Activities', tone: 'from-rose-400 to-rose-700' },
  { label: 'Science Fair', category: 'Activities', tone: 'from-emerald-500 to-emerald-800' },
  { label: 'Music & Dance', category: 'Activities', tone: 'from-fuchsia-500 to-purple-800' },
]
// To use a real photo, add src: '/gallery/photo-name.jpg' to an item and place the image in public/gallery/

// General information shown on the Public Disclosure page. Replace "—" with the real details.
export const SCHOOL_INFO = [
  { label: 'Affiliation number', value: '—' },
  { label: 'School code', value: '—' },
  { label: 'Name of principal', value: '—' },
  { label: 'Year of establishment', value: '—' },
  { label: 'Medium of instruction', value: '—' },
  { label: 'Total number of teachers', value: '—' },
]

// Documents for the Public Disclosure page. Put the PDF files in public/documents/ with these file names.
export const DOCUMENTS = [
  { title: 'Affiliation / recognition certificate', file: 'affiliation-certificate.pdf' },
  { title: 'Society / trust registration certificate', file: 'registration-certificate.pdf' },
  { title: 'Fee structure', file: 'fee-structure.pdf' },
  { title: 'Academic calendar', file: 'academic-calendar.pdf' },
  { title: 'List of teachers and qualifications', file: 'teachers-list.pdf' },
  { title: 'Fire safety certificate', file: 'fire-safety-certificate.pdf' },
  { title: 'Water and sanitation certificate', file: 'water-sanitation-certificate.pdf' },
  { title: 'Building safety certificate', file: 'building-safety-certificate.pdf' },
]
