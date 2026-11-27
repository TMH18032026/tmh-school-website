import { site } from '../config/siteConfig'
import { images } from '../config/images'

// Content for the About Us pages.
// Names come from the .env file (VITE_DIRECTOR_NAME, VITE_PRINCIPAL_NAME, ...).
// Photos come from src/config/images.js.

export const PHILOSOPHY = [
  'We believe every child is different and can do well when taught with patience, respect and high expectations.',
  'Education is not only about marks. It is about knowledge, character, confidence and leadership, so that children grow into good human beings and responsible citizens.',
]

export const CORE_VALUES = [
  { icon: 'heart', title: 'Respect', text: 'For teachers, parents, classmates and every person.' },
  { icon: 'check', title: 'Honesty', text: 'Speaking the truth and doing the right thing, even when no one is watching.' },
  { icon: 'clock', title: 'Discipline', text: 'Punctuality, order and self-control in everyday school life.' },
  { icon: 'trending', title: 'Hard work', text: 'Steady effort and perseverance to reach our goals.' },
  { icon: 'users', title: 'Care and kindness', text: 'Helping others and working together as one family.' },
  { icon: 'flag', title: 'Leadership', text: 'Taking responsibility and leading by good example.' },
]

export const JOURNEY_TEXT = [
  'T.M.H. International School, Sheohar, started with a simple aim: to give the children of our region a quality education close to home, with the care and values of a family.',
  'With the support of parents and a dedicated team of teachers, we continue to grow our classrooms, activities and facilities, including our residential hostel, so that more children can learn and lead.',
]

// DRAFT messages: please replace with the Director's and Principal's own words, names and photos.
export const MESSAGES = {
  director: {
    role: 'Director',
    name: site.directorName,
    photo: images.director,
    text: [
      'Dear Parents and Students, welcome to T.M.H. International School. Our mission is simple: to give every child a strong foundation in knowledge, character and confidence.',
      'We are proud of our school and our hostel, where children learn, live and grow in a safe and caring environment. We thank you for your trust and look forward to working with you for your child’s bright future.',
    ],
  },
  principal: {
    role: 'Principal',
    name: site.principalName,
    photo: images.principal,
    text: [
      'At T.M.H. International School we believe that every child has a special talent. Our teachers work with dedication to bring it out through good teaching, regular guidance and encouragement.',
      'We invite parents to be partners in this journey. Together we can help our children learn today and lead tomorrow.',
    ],
  },
}

export const MANAGEMENT = [
  { name: site.chairmanName, role: 'Chairman', detail: 'Add a short introduction' },
  { name: site.directorName, role: 'Director', detail: 'Add a short introduction' },
  { name: site.managerName, role: 'Manager', detail: 'Add a short introduction' },
]

// School Management Committee (SMC). Replace with the real members.
export const SMC = {
  head: ['Member name', 'Designation', 'Role in committee'],
  rows: [
    ['—', 'Chairperson', '—'],
    ['—', 'Principal', 'Member secretary'],
    ['—', 'Teacher representative', 'Member'],
    ['—', 'Parent representative', 'Member'],
  ],
}

export const ADMIN_TEAM = [
  { icon: 'user', title: 'Principal’s office', text: 'Academic leadership, discipline and school management.' },
  { icon: 'clipboard', title: 'Administrative office', text: 'Admissions, records, certificates and general enquiries.' },
  { icon: 'card', title: 'Accounts office', text: 'Fee collection, receipts and payments.' },
  { icon: 'home', title: 'Hostel office', text: 'Hostel admissions, warden and parent communication.' },
]
