import { site } from '../config/siteConfig'

// Policy page text. These are general, plain-language drafts: please have the school management
// (and, for the privacy policy and terms, a legal adviser) review them before publishing.

export const POLICIES = {
  'child-protection': {
    title: 'Child Protection Policy',
    text: `${site.name} is committed to keeping every child safe, in school, in the hostel and on school transport.`,
    sections: [
      { h: 'Our commitment', p: ['Every child has the right to feel safe, respected and cared for. We do not tolerate any form of physical, emotional or verbal abuse, neglect or exploitation.'] },
      { h: 'Safe environment', list: ['CCTV monitoring of common areas', 'Controlled entry and exit and visitor records', 'Supervision of students during school hours, in the hostel and on buses', 'Separate washrooms for boys and girls'] },
      { h: 'Staff conduct', list: ['Staff are selected with care and verified before joining', 'Staff must treat every child with respect and dignity', 'Staff must never be alone with a child in a place that is hidden from others without a reason', 'Any concern about a staff member must be reported to the Principal immediately'] },
      { h: 'Reporting a concern', p: ['Any student, parent or staff member can report a child-safety concern to the Principal or through the Grievance Redressal page. All reports are taken seriously, handled confidentially and acted on promptly.'] },
      { h: 'Action', p: ['The school will protect the child first, inform parents, and take disciplinary or legal action as required by law.'] },
    ],
  },
  'anti-bullying': {
    title: 'Anti-Bullying Policy',
    text: 'Every student has the right to learn and live without fear. Bullying is not tolerated at our school or in our hostel.',
    sections: [
      { h: 'What is bullying?', p: ['Bullying is repeated unkind behaviour that hurts or frightens another person. It can be physical (hitting, pushing), verbal (name-calling, threats), social (leaving someone out, spreading rumours) or online.'] },
      { h: 'What we do to prevent it', list: ['Teach respect, kindness and empathy through assemblies and value education', 'Supervise classrooms, playgrounds, buses and the hostel', 'Encourage students to speak up without fear', 'Make clear to every student and parent that ragging and bullying are not allowed'] },
      { h: 'What students should do', list: ['Tell a teacher, the Principal, the warden or a trusted adult', 'Help the child who is being bullied, and do not join in', 'Remember: telling is not complaining, it is the right thing to do'] },
      { h: 'How we respond', list: ['Listen to the child and keep the matter confidential', 'Inquire fairly and speak with everyone involved', 'Support the child who was hurt and guide the child who bullied', 'Inform parents and, for serious or repeated cases, take strict disciplinary action'] },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    text: `How ${site.name} collects, uses and protects information from visitors to this website.`,
    sections: [
      { h: 'Information we collect', p: ['We collect only what you choose to give us through our forms: names, phone numbers, email addresses, the class a child is applying for, and any message you write. This applies to the quick enquiry, admission enquiry, hostel enquiry, contact, grievance and newsletter forms.'] },
      { h: 'How we use it', list: ['To reply to your enquiry and contact you about admissions or the hostel', 'To send school updates if you subscribe to the newsletter', 'To improve our services'] },
      { h: 'How it is sent', p: ['Form submissions are delivered to the school’s official email address through a third-party form service (FormSubmit). We do not sell or share your information with anyone for marketing.'] },
      { h: 'Children’s information', p: ['Details about students are used only for school admission and communication with parents. Please do not send sensitive documents through the website forms.'] },
      { h: 'Your choices', p: ['You can ask us to correct or delete the information you sent by contacting the school office. You can unsubscribe from the newsletter at any time by telling us.'] },
      { h: 'Contact', p: [`For any privacy question, write to ${site.email}.`] },
    ],
  },
  terms: {
    title: 'Terms and Conditions',
    text: 'Rules for using the website of this school.',
    sections: [
      { h: 'Use of the website', p: ['This website is provided to give information about the school and to help parents contact us. By using it you agree to these terms.'] },
      { h: 'Accuracy of information', p: ['We try to keep all information, including fees, dates and facilities, correct and up to date. For final and current details, please confirm with the school office.'] },
      { h: 'Content', p: ['The text, logo, photographs and design on this website belong to the school and may not be copied or used for other purposes without permission.'] },
      { h: 'Forms and enquiries', p: ['Submitting an enquiry does not guarantee admission or a hostel seat. Admission is subject to the school’s rules and the availability of seats.'] },
      { h: 'External links', p: ['This website may link to other websites. We are not responsible for their content.'] },
      { h: 'Changes', p: ['The school may change these terms and the website content at any time without notice.'] },
    ],
  },
}
