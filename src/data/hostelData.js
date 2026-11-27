import { site } from '../config/siteConfig'

// Content for the T.M.H. Hostel & Residency page.
// Menu and timings below are SAMPLE data: replace with your real ones.
// Fees come from the .env file (VITE_HOSTEL_FEE_*). Any "—" is shown as "To be updated".

export const HOSTEL = {
  // Set to true once the girls' hostel is running. While false it is shown as "Coming soon".
  girlsOperational: false,
}

export const HOSTEL_PILLARS = [
  { icon: 'shield', title: 'Safe living', text: 'Supervised premises, CCTV and a resident warden, so children are looked after day and night.' },
  { icon: 'book', title: 'Quality education', text: 'Study hours and evening classes so that classroom learning continues after school.' },
  { icon: 'heart', title: 'Holistic development', text: 'Healthy food, sports, routines and festivals that build discipline, health and character.' },
]

export const HOSTEL_SECTIONS = [
  {
    id: 'living',
    title: 'Hostel facilities and accommodation',
    text: 'A comfortable, clean and well-managed place to live and study.',
    tone: 'slate',
    cards: [
      { icon: 'home', title: 'Hostel overview', text: 'A residential learning environment on or near the school campus where students live, study and grow together.' },
      { icon: 'users', title: "Boys' hostel", text: 'Supervised accommodation for boys, managed by the hostel warden and staff.' },
      {
        icon: 'users',
        title: "Girls' hostel",
        text: 'Separate, supervised accommodation for girls.',
        badge: HOSTEL.girlsOperational ? undefined : 'Coming soon',
      },
      { icon: 'layers', title: 'Hostel infrastructure', text: 'Clean buildings with proper lighting, ventilation, drinking water and sanitation.' },
      { icon: 'bed', title: 'Rooms and accommodation', text: 'Shared rooms with a bed, storage and study space for every student.' },
      { icon: 'activity', title: 'Hostel facilities', text: 'Common rooms, study areas, laundry arrangements and space for indoor and outdoor games.' },
    ],
  },
  {
    id: 'mess',
    title: 'Mess and dining',
    text: 'Healthy, hygienic and balanced food for growing children.',
    cards: [
      { icon: 'utensils', title: 'Mess and dining facilities', text: 'A clean dining hall where meals are cooked and served under staff supervision.' },
      { icon: 'leaf', title: 'Balanced diet', text: 'Meals planned to give children the nutrition they need for study and play.' },
    ],
    cols: 2,
    table: {
      head: ['Meal', 'Menu'],
      rows: [
        ['Breakfast', 'Poha, paratha or upma with milk / tea'],
        ['Lunch', 'Rice, dal, roti, seasonal sabzi and salad'],
        ['Evening snacks', 'Fruits, biscuits or chana with milk / tea'],
        ['Dinner', 'Roti, rice, dal and sabzi (a sweet dish on Sundays)'],
      ],
    },
    note: 'The weekly menu is shared with parents. Please contact the hostel office for the current diet plan.',
  },
  {
    id: 'routine',
    title: 'Daily routine, study hours and academic support',
    text: 'A structured day helps children build discipline and good study habits.',
    tone: 'slate',
    cards: [
      { icon: 'clock', title: 'Daily routine', text: 'A fixed schedule for waking up, school, meals, study, games and sleep.' },
      { icon: 'book', title: 'Study hours and supervised learning', text: 'Fixed study periods under a supervisor, so homework and revision are done every day.' },
      { icon: 'bulb', title: 'Evening classes and academic support', text: 'Extra help in difficult subjects and guidance for tests and examinations.' },
    ],
    table: {
      head: ['Activity', 'Time'],
      rows: [
        ['Wake-up and morning routine', '5:30 AM – 7:30 AM'],
        ['School hours', '8:00 AM – 2:30 PM'],
        ['Evening games and recreation', '4:30 PM – 6:00 PM'],
        ['Supervised study', '6:30 PM – 7:30 PM and 8:30 PM – 9:30 PM'],
        ['Dinner', '7:30 PM – 8:30 PM'],
        ['Lights out', '10:00 PM'],
      ],
    },
  },
  {
    id: 'safety',
    title: 'Safety, health and hygiene',
    text: 'Parents can be at ease: care and supervision are part of everyday hostel life.',
    cards: [
      { icon: 'users', title: 'Hostel warden and management', text: 'A resident warden and trained staff look after the students round the clock.' },
      { icon: 'shield', title: 'Safety and security', text: 'Controlled entry and exit, visitor records and supervised movement of students.' },
      { icon: 'monitor', title: 'CCTV surveillance', text: 'Camera monitoring of common areas for the safety of every child.' },
      { icon: 'heart', title: 'Health and hygiene', text: 'Clean rooms and washrooms, safe drinking water, first aid and help from a doctor when needed.' },
    ],
    cols: 4,
  },
  {
    id: 'recreation',
    title: 'Recreation, sports and festivals',
    text: 'Life in the hostel is about more than study.',
    tone: 'slate',
    cards: [
      { icon: 'star', title: 'Recreation and indoor games', text: 'Carrom, chess, reading and other indoor activities for free time.' },
      { icon: 'activity', title: 'Outdoor sports', text: 'Regular games and physical activity on the playground.' },
      { icon: 'sun', title: 'Festival celebrations', text: 'Students celebrate national and cultural festivals together as one family.' },
    ],
  },
  {
    id: 'rules',
    title: 'Hostel rules and regulations',
    text: 'Clear rules keep the hostel safe, peaceful and fair for everyone.',
    checks: [
      'Students must follow the daily routine and be present for roll call',
      'Leaving the hostel premises is allowed only with permission',
      'Mobile phones and electronic gadgets are not allowed without permission',
      'Visitors may meet students only at fixed visiting times',
      'Students must keep their rooms and belongings clean and tidy',
      'Respect for staff and fellow students is expected at all times',
      'Bullying, ragging or misbehaviour is not tolerated',
      'Parents are informed immediately about illness or serious discipline matters',
    ],
    note: 'These are general rules. The complete hostel rule book is given at the time of admission.',
  },
  {
    id: 'admission',
    title: 'Hostel admission, fees and documents',
    text: 'Hostel admission is available subject to seats and the hostel facilities in operation.',
    tone: 'slate',
    steps: [
      { title: 'Enquire', text: 'Send the hostel enquiry form or call the hostel office.' },
      { title: 'Visit the hostel', text: 'See the rooms, mess and facilities, and meet the warden.' },
      { title: 'Submit the form', text: 'Fill the hostel admission form with the required documents.' },
      { title: 'Confirm seat', text: 'Pay the hostel fee and receive the hostel rule book.' },
    ],
  },
]

export const HOSTEL_FEES = {
  head: ['Fee head', 'Amount'],
  rows: [
    ['Hostel admission fee (one time)', site.hostelFees.admission],
    ['Security deposit (refundable)', site.hostelFees.deposit],
    ['Hostel fee (monthly / quarterly)', site.hostelFees.monthly],
    ['Mess charges', site.hostelFees.mess],
  ],
}

export const HOSTEL_DOCUMENTS = [
  'Completed hostel admission form',
  'School admission confirmation (or transfer certificate for new students)',
  'Birth certificate or age proof',
  'Passport-size photographs of the student and parent / guardian',
  'Identity and address proof of parent / guardian',
  'Medical information and any allergy or health details',
  'Details of local guardian and emergency contacts',
]

export const PARENT_COMMUNICATION = [
  { icon: 'phone', title: 'Regular phone calls', text: 'Fixed times when students can talk to their parents.' },
  { icon: 'message', title: 'Updates from the warden', text: 'Parents are informed about health, behaviour and any important event.' },
  { icon: 'users', title: 'Parent meetings', text: 'Meetings with parents to share progress in studies and hostel life.' },
  { icon: 'home', title: 'Visiting days', text: 'Fixed days and times when parents can visit their child.' },
]
