import { site } from '../config/siteConfig'

// Beyond Academics, Student Corner and News & Events content.

export const BEYOND = [
  { icon: 'activity', title: 'Sports and physical education', text: 'Regular games, drills and sports events that build fitness, teamwork and a healthy spirit of competition.' },
  { icon: 'sun', title: 'Yoga and meditation', text: 'Simple yoga and breathing practice for focus, calm and good health.' },
  { icon: 'music', title: 'Music and dance', text: 'Singing, instruments and dance for self-expression and stage confidence.' },
  { icon: 'pen', title: 'Art and craft', text: 'Drawing, painting and craft work that grow creativity and patience.' },
  { icon: 'mic', title: 'Debate and public speaking', text: 'Speech and debate practice that builds clear thinking and confident speaking.' },
  { icon: 'help', title: 'Quiz competitions', text: 'Inter-class and inter-house quizzes that make learning exciting.' },
  { icon: 'flask', title: 'Science exhibitions', text: 'Students make and present working models and projects.' },
  { icon: 'star', title: 'Cultural programmes', text: 'Annual function and cultural events that celebrate talent and tradition.' },
  { icon: 'compass', title: 'Educational tours', text: 'Visits to places of learning and interest that bring lessons to life.' },
  { icon: 'user', title: 'Personality development', text: 'Activities for manners, communication, grooming and self-confidence.' },
  { icon: 'flag', title: 'Leadership development', text: 'Student council, house and class roles that teach responsibility and teamwork.' },
  { icon: 'heart', title: 'Moral and value education', text: 'Honesty, respect, kindness and discipline taught through stories, assemblies and example.' },
  { icon: 'leaf', title: 'Environmental awareness', text: 'Tree planting, cleanliness drives and lessons on caring for nature.' },
  { icon: 'award', title: 'National festivals', text: 'Independence Day, Republic Day and other celebrations that build pride and unity.' },
]

export const STUDENT_CORNER = {
  achievements: [
    { icon: 'trophy', title: 'Student achievements', text: 'Awards and recognition won by our students in studies, sports and the arts.' },
    { icon: 'award', title: 'Examination results', text: 'Class-wise and board examination results of our students.' },
    { icon: 'star', title: 'Olympiad achievements', text: 'Ranks and medals won in Olympiad examinations.' },
    { icon: 'flag', title: 'Competition results', text: 'Results from quizzes, sports, art and other inter-school competitions.' },
  ],
  leadership: [
    { icon: 'users', title: 'Student council', text: 'Elected and selected student leaders who help run assemblies, events and discipline.' },
    { icon: 'layers', title: 'House system', text: 'Students are divided into houses that compete in sports, studies and cultural events.' },
    { icon: 'activity', title: 'Student activities', text: 'Clubs, events and activities that students can join and lead.' },
  ],
  learning: [
    { icon: 'monitor', title: 'E-learning resources', text: 'Digital lessons and learning links to support study at home.' },
    { icon: 'book', title: 'Online study materials', text: 'Notes, worksheets and practice papers shared by teachers.', to: '/download-centre', cta: 'Open Download Centre' },
    { icon: 'bulb', title: 'Student projects', text: 'Models, charts and projects made by students during the year.' },
  ],
}

// SAMPLE achievements: replace with your real ones. Years follow the admission session in .env.
const lastYear = site.sessionStartYear - 1
export const ACHIEVEMENT_LIST = [
  { year: String(lastYear), title: `Class X Board Results ${lastYear}`, detail: '100% pass result, with many students in first division' },
  { year: String(lastYear), title: 'District Level Quiz Competition', detail: 'First prize in the inter-school quiz' },
  { year: String(lastYear), title: 'Inter-School Sports Meet', detail: 'Medals in athletics and kabaddi' },
  { year: String(lastYear), title: 'Science Exhibition', detail: 'Best working model award for our Class VIII team' },
]

export const EVENT_TYPES = [
  { icon: 'star', title: 'Annual Function', text: 'Our yearly celebration of talent, achievement and school spirit.' },
  { icon: 'flag', title: 'Independence Day Celebration', text: 'Flag hoisting, cultural programmes and patriotic events.' },
  { icon: 'flag', title: 'Republic Day Celebration', text: 'Parade, speeches and programmes that honour our Constitution.' },
  { icon: 'activity', title: 'Sports Day', text: 'Races, team games and prizes for sportsmanship.' },
  { icon: 'clipboard', title: 'Annual Examination Updates', text: 'Timetables, results and examination notices.' },
  { icon: 'users', title: 'Parent-Teacher Meetings', text: 'Regular meetings to discuss each child’s progress.' },
  { icon: 'home', title: 'Hostel Activities', text: 'Events, festivals and activities from hostel life.' },
]

// News and announcements. Newest first.
// category: 'Admissions' | 'Announcement' | 'News' | 'Event' | 'Hostel' | 'Examination'
// Add `date: '12 Jan 2028'` to show a date on an item.
export const NEWS = [
  {
    category: 'Admissions',
    title: `Admissions open for ${site.session}`,
    text: 'Admissions are open for Play Group to Class X, for both day scholars and hostel residents (subject to seat availability). Visit the school office or send an enquiry.',
    to: '/admissions',
    cta: 'Admission details',
  },
  {
    category: 'Hostel',
    title: 'Hostel admission is open',
    text: 'Seats are available in the boys’ hostel for the new session. Visit the hostel office or send a hostel enquiry.',
    to: '/hostel#enquiry',
    cta: 'Hostel enquiry',
  },
  {
    category: 'Event',
    title: `Annual Function ${site.sessionStartYear}`,
    text: 'Our yearly celebration of talent and achievement. Parents are warmly invited.',
    date: `18 Dec ${site.sessionStartYear}`,
  },
]

// Upcoming events (SAMPLE dates: replace with your real ones; the year follows the session in .env).
export const UPCOMING_EVENTS = [
  { date: `15 Aug ${site.sessionStartYear}`, title: 'Independence Day', text: 'Flag hoisting and cultural programme.' },
  { date: `14 Nov ${site.sessionStartYear}`, title: 'Annual Sports Day', text: 'Races, team games and prizes.' },
  { date: `18 Dec ${site.sessionStartYear}`, title: 'Annual Function', text: 'Songs, dance, drama and prize distribution.' },
  { date: `26 Jan ${site.sessionEndYear}`, title: 'Republic Day', text: 'Parade, speeches and patriotic programmes.' },
]

// Parent testimonials. Leave empty until you have real, permitted quotes. The home page hides the section while empty.
// Example: { name: 'Parent of a Class V student', text: 'The teachers really care about every child.' }
export const TESTIMONIALS = []
