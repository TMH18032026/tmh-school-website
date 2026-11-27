import { site } from '../config/siteConfig'

// Content for the Admissions page.
// Fees come from the .env file (VITE_FEE_*). Minimum ages below are SAMPLE: confirm and edit.
// Any "—" is shown as "To be updated".

export const ELIGIBILITY = {
  head: ['Class', 'Eligibility', 'Minimum age'],
  rows: [
    ['Play Group', 'Entry level', '2.5+ years'],
    ['Nursery', 'Entry level', '3+ years'],
    ['LKG', 'Nursery completed or age eligible', '4+ years'],
    ['UKG', 'LKG completed or age eligible', '5+ years'],
    ['Class I', 'UKG completed or age eligible', '6+ years'],
    ['Class II – X', 'Passed the previous class; admission test / interaction may apply', 'As per previous class'],
  ],
}

export const ADMISSION_STEPS = [
  { title: 'Enquire', text: 'Call us, fill the online enquiry form or visit the school office.' },
  { title: 'Visit the campus', text: 'Meet the teachers, see the classrooms and ask your questions.' },
  { title: 'Submit the form', text: 'Fill the admission form and submit it with the required documents.' },
  { title: 'Interaction / test', text: 'A simple interaction or test for the child, where applicable.' },
  { title: 'Fee payment', text: 'Pay the admission fee at the school office.' },
  { title: 'Confirm admission', text: 'Your child is enrolled and ready to start.' },
]

export const DOCUMENTS_REQUIRED = [
  'Completed admission form',
  'Birth certificate (age proof)',
  'Transfer certificate from the previous school (for Class II and above)',
  'Report card / mark sheet of the last class attended',
  'Passport-size photographs of the student',
  'Passport-size photographs of parents / guardian',
  'Identity and address proof of parent / guardian',
]

export const FEE_STRUCTURE = {
  head: ['Fee head', 'Amount'],
  rows: [
    ['Registration fee', site.fees.registration],
    ['Admission fee (one time)', site.fees.admission],
    ['Annual / development charges', site.fees.annual],
    ['Tuition fee (monthly)', site.fees.tuition],
    ['Transport fee (if required)', site.fees.transport],
  ],
}

export const SCHOOL_RULES = [
  'Students must reach school on time and attend regularly',
  'The school uniform must be worn neatly every day',
  'Leave must be requested in writing by the parent or guardian',
  'Respect for teachers, staff and fellow students is expected',
  'Mobile phones are not allowed in school',
  'Students must take care of school property and keep the campus clean',
  'Parents must attend parent-teacher meetings and respond to school notices',
  'Fees must be paid on or before the due date',
]

export const WITHDRAWAL = [
  { title: 'Apply in writing', text: 'The parent or guardian submits a written application to the principal.' },
  { title: 'Clear all dues', text: 'Fees and any other dues are cleared at the school office.' },
  { title: 'Receive the certificate', text: 'The Transfer Certificate is issued after the formalities are complete.' },
]

export const ADMISSION_FAQS = [
  { q: 'When does admission start for the new session?', a: 'Admissions are open for the new session. Please contact the school office or send an enquiry for the latest dates and available seats.' },
  { q: 'Can my child join as a day scholar or as a hostel resident?', a: 'Both options are available. Residential admission is subject to the availability of hostel seats, so we suggest enquiring early.' },
  { q: 'Is an entrance test required?', a: 'Young children (Pre-Primary) are admitted after a simple interaction. For higher classes, an interaction or a basic test may be taken to understand the child’s level.' },
  { q: 'What documents are needed?', a: 'Please see the “Documents required” list on this page. The school office will confirm the exact list for your child’s class.' },
  { q: 'Is school transport available?', a: 'Yes, school bus facility is available on selected routes. Please contact the office for routes and charges.' },
  { q: 'How can I visit the school?', a: 'You are welcome to visit during office hours. Call us or send a WhatsApp message to fix a convenient time.' },
  { q: 'How will I know the fee details?', a: 'The fee structure is given on this page and is also available at the school office. Contact us for the complete, current fee details.' },
]

// Fields on the printable admission form (/admissions/form)
export const FORM_SECTIONS = {
  admission: [
    { title: 'Student details', fields: ["Student's full name", 'Date of birth', 'Gender', 'Class for admission', 'Previous school (if any)', 'Last class passed and result'] },
    { title: 'Parent / guardian details', fields: ["Father's name", "Father's occupation", "Mother's name", "Mother's occupation", 'Mobile number', 'Email address', 'Residential address'] },
    { title: 'Admission type', fields: ['Day school  /  Residential (hostel)  /  Transport required'] },
  ],
  hostel: [
    { title: 'Student details', fields: ["Student's full name", 'Date of birth', 'Gender', 'Class', 'Blood group', 'Medical conditions / allergies'] },
    { title: 'Parent / guardian details', fields: ["Father's name", "Mother's name", 'Mobile number', 'Email address', 'Permanent address'] },
    { title: 'Local guardian and emergency contact', fields: ['Local guardian name', 'Relationship', 'Mobile number', 'Address'] },
    { title: 'Hostel preferences', fields: ['Food preference / dietary needs', 'Special care required (if any)'] },
  ],
}
