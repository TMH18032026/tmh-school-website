import { images } from '../config/images'
import { site } from '../config/siteConfig'

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
  { name: 'Pre-Primary', range: 'Play Group – UKG', text: 'Learning through play, stories, rhymes and creative activity.' },
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

const GALLERY_BASE = [
  { label: 'Annual Day', tone: 'from-blue-800 to-blue-950' },
  { label: 'Sports Day', tone: 'from-amber-400 to-amber-600' },
  { label: 'Classroom', tone: 'from-sky-600 to-blue-800' },
  { label: 'Science Fair', tone: 'from-emerald-500 to-emerald-800' },
  { label: 'Art & Craft', tone: 'from-rose-400 to-rose-700' },
  { label: 'Celebrations', tone: 'from-violet-500 to-violet-800' },
]

// Leadership and teachers: replace the names and details with the real ones
export const FACULTY = [
  { name: site.principalName, role: 'Principal', detail: 'Add qualification and years of experience' },
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

const GALLERY_ITEMS_BASE = [
  { label: 'School building', category: 'School Campus', tone: 'from-blue-800 to-blue-950' },
  { label: 'Playground view', category: 'School Campus', tone: 'from-lime-500 to-green-700' },
  { label: 'Smart class', category: 'Classroom Activities', tone: 'from-sky-600 to-blue-800' },
  { label: 'Group study', category: 'Classroom Activities', tone: 'from-indigo-500 to-indigo-800' },
  { label: 'Science lab', category: 'Laboratory', tone: 'from-teal-500 to-teal-800' },
  { label: 'Computer lab', category: 'Laboratory', tone: 'from-cyan-500 to-cyan-800' },
  { label: 'Library hour', category: 'Library', tone: 'from-violet-500 to-violet-800' },
  { label: 'Sports Day', category: 'Sports Activities', tone: 'from-amber-400 to-amber-600' },
  { label: 'Football', category: 'Sports Activities', tone: 'from-lime-500 to-green-700' },
  { label: 'Music & Dance', category: 'Cultural Activities', tone: 'from-fuchsia-500 to-purple-800' },
  { label: 'Art & Craft', category: 'Cultural Activities', tone: 'from-rose-400 to-rose-700' },
  { label: 'Annual Function', category: 'Annual Function', tone: 'from-blue-800 to-blue-950' },
  { label: 'Independence Day', category: 'Independence Day', tone: 'from-orange-500 to-green-700' },
  { label: 'Republic Day', category: 'Republic Day', tone: 'from-orange-400 to-emerald-700' },
  { label: 'Educational tour', category: 'Educational Tours', tone: 'from-emerald-500 to-emerald-800' },
  { label: 'Hostel life', category: 'Hostel Life', tone: 'from-slate-500 to-slate-800' },
  { label: 'Hostel room', category: 'Hostel Rooms', tone: 'from-sky-500 to-sky-800' },
  { label: 'Hostel mess', category: 'Hostel Mess', tone: 'from-amber-500 to-orange-700' },
  { label: 'Hostel celebration', category: 'Hostel Celebrations', tone: 'from-pink-500 to-rose-700' },
  { label: 'School bus', category: 'School Bus & Transport', tone: 'from-yellow-400 to-amber-600' },
]
// Photos for both lists come from src/config/images.js (same order as the lists above).
export const GALLERY = GALLERY_BASE.map((g, i) => ({ ...g, src: images.galleryHome[i] }))
export const GALLERY_ITEMS = GALLERY_ITEMS_BASE.map((g, i) => ({ ...g, src: images.gallery[i] }))

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

// Download Centre. Put each PDF in public/documents/ with the file name given here.
// Items with `to` open a printable page on the website instead of a PDF.
export const DOWNLOAD_GROUPS = [
  {
    title: 'Forms',
    text: 'Print, fill in and submit at the school office.',
    items: [
      { title: 'Admission form', to: '/admissions/form' },
      { title: 'Hostel admission form', to: '/hostel/form' },
      { title: 'Transfer certificate application', file: 'tc-application.pdf' },
      { title: 'Leave application', file: 'leave-application.pdf' },
    ],
  },
  {
    title: 'Circulars and notices',
    items: [
      { title: 'Latest circular', file: 'latest-circular.pdf' },
      { title: 'Academic calendar', file: 'academic-calendar.pdf' },
      { title: 'Examination schedule', file: 'exam-schedule.pdf' },
    ],
  },
  {
    title: 'Syllabus',
    items: [
      { title: 'Pre-Primary syllabus', file: 'syllabus-pre-primary.pdf' },
      { title: 'Primary syllabus (Classes I – V)', file: 'syllabus-primary.pdf' },
      { title: 'Middle syllabus (Classes VI – VIII)', file: 'syllabus-middle.pdf' },
      { title: 'Secondary syllabus (Classes IX – X)', file: 'syllabus-secondary.pdf' },
    ],
  },
]
