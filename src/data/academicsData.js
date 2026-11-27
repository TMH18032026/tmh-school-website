// Content for the Academics and Facilities pages.

export const CLASS_LEVELS = [
  { name: 'Pre-Primary', range: 'Play Group, Nursery, LKG, UKG', text: 'Learning through play, stories, rhymes and creative activity.' },
  { name: 'Primary', range: 'Classes I – V', text: 'Reading, writing and numeracy with curiosity and hands-on work.' },
  { name: 'Middle', range: 'Classes VI – VIII', text: 'Deeper subject knowledge, projects and critical thinking.' },
  { name: 'Secondary', range: 'Classes IX – X', text: 'Focused board preparation with mentoring and career guidance.' },
]

export const ACADEMIC_SECTIONS = [
  {
    id: 'curriculum',
    title: 'Curriculum and teaching methodology',
    text: 'Clear syllabus, practical teaching and regular feedback.',
    tone: 'slate',
    cards: [
      { icon: 'book', title: 'Curriculum', text: 'We follow the syllabus prescribed by our affiliating board, planned class by class. See Public Disclosure for affiliation details.' },
      { icon: 'bulb', title: 'Teaching methodology', text: 'Activity-based lessons, examples from daily life, group work and projects, so children understand and do not just memorise.' },
      { icon: 'calendar', title: 'Academic calendar', text: 'A yearly calendar of terms, examinations, holidays and events, shared with parents.', to: '/download-centre', cta: 'Download calendar' },
    ],
  },
  {
    id: 'assessment',
    title: 'Examination and assessment',
    text: 'Regular assessment so that every parent knows how their child is doing.',
    cards: [
      { icon: 'clipboard', title: 'Examination and assessment system', text: 'Unit tests, term examinations and an annual examination measure each child’s progress through the year.' },
      { icon: 'activity', title: 'Continuous and comprehensive evaluation', text: 'Along with written tests, we observe class participation, projects, practical work, behaviour and skills.' },
      { icon: 'book', title: 'Homework policy', text: 'Meaningful, age-appropriate homework that supports learning and builds the habit of regular study, without overloading children.' },
      { icon: 'heart', title: 'Remedial classes', text: 'Extra help for children who need support in a subject, so that no child is left behind.' },
    ],
    cols: 4,
  },
  {
    id: 'digital',
    title: 'Smart classrooms and digital learning',
    text: 'T.M.H. Digital Learning: technology that makes difficult topics easy.',
    tone: 'slate',
    cards: [
      { icon: 'monitor', title: 'Smart classroom learning', text: 'Digital boards, visuals and animations that help children see and understand concepts.' },
      { icon: 'globe', title: 'Digital education', text: 'Online resources, practice material and computer education for future-ready skills.' },
      { icon: 'trending', title: 'Academic performance', text: 'We track each child’s progress and share it with parents regularly.' },
    ],
  },
]

// Competitive preparation. Set offered: true ONLY for programmes the school actually runs.
// Programmes that are not offered are hidden from the website.
export const FOUNDATION_PROGRAMMES = [
  { title: 'Jawahar Navodaya Vidyalaya Entrance', offered: false },
  { title: 'Sainik School Entrance', offered: false },
  { title: 'Simultala Awasiya Vidyalaya Entrance', offered: false },
  { title: 'Ramakrishna Mission Entrance', offered: false },
  { title: 'BHU and AMU Entrance', offered: false },
  { title: 'Olympiads', offered: false },
  { title: 'NTSE-level foundation', offered: false },
  { title: 'JEE / NEET foundation', offered: false },
]

export const FACILITY_SECTIONS = [
  {
    id: 'learning',
    title: 'Classrooms and laboratories',
    text: 'Spaces where children learn by seeing, doing and discovering.',
    cards: [
      { icon: 'home', title: 'School building', text: 'A safe, well-planned building with bright, ventilated rooms.' },
      { icon: 'monitor', title: 'Smart classrooms', text: 'Digital teaching aids that make lessons clear and interesting.' },
      { icon: 'flask', title: 'Science laboratory', text: 'Hands-on experiments that bring science lessons to life.' },
      { icon: 'target', title: 'Mathematics laboratory', text: 'Models and activities that make maths simple and enjoyable.' },
      { icon: 'monitor', title: 'Computer laboratory', text: 'Computers for practical learning and digital skills.' },
      { icon: 'clipboard', title: 'Reception and administrative office', text: 'A friendly front office for admissions, enquiries and records.' },
    ],
  },
  {
    id: 'play',
    title: 'Library, playground and sports',
    text: 'Reading, play and exercise are part of every school day.',
    tone: 'slate',
    cards: [
      { icon: 'book', title: 'Library', text: 'A quiet reading space with story books, reference books and magazines.' },
      { icon: 'activity', title: 'Playground', text: 'Open play areas for games and assembly.' },
      { icon: 'trophy', title: 'Sports facilities', text: 'Equipment and coaching for regular sports and competitions.' },
    ],
  },
  {
    id: 'safety',
    title: 'Safety, health and hygiene',
    text: 'A secure and healthy campus gives parents peace of mind.',
    cards: [
      { icon: 'users', title: 'Separate boys’ and girls’ washrooms', text: 'Clean, separate washrooms for boys and girls.' },
      { icon: 'leaf', title: 'Safe drinking water', text: 'Clean drinking water available across the campus.' },
      { icon: 'monitor', title: 'CCTV surveillance', text: 'Camera monitoring of the campus for the safety of every child.' },
      { icon: 'alert', title: 'Fire safety arrangements', text: 'Fire safety equipment and awareness for students and staff.' },
      { icon: 'heart', title: 'Medical and first aid facilities', text: 'First aid and trained staff to help when a child is unwell.' },
    ],
    tone: 'blue',
  },
  {
    id: 'transport',
    title: 'Transportation',
    text: 'Safe and reliable travel between home and school.',
    cards: [
      { icon: 'bus', title: 'Transportation facilities', text: 'School transport on selected routes, with supervision for children’s safety.' },
      { icon: 'bus', title: 'School bus fleet', text: 'Well-maintained school buses driven by experienced drivers.' },
    ],
    cols: 2,
  },
]
