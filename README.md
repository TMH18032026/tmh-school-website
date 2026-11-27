# T.M.H International School website

React + Vite + Tailwind CSS + React Router.

## Run on your computer

1. Install Node.js 18 or newer from https://nodejs.org
2. Open a terminal in this folder and run:

       npm install
       npm run dev

3. Open the link shown in the terminal (usually http://localhost:5173)

## Change school details (everything is in `.env`)

Open `.env`, edit the value, save, then stop the server (Ctrl+C) and run `npm run dev` again.

| What | .env key |
|---|---|
| Admission session (changes "Admissions are open for ...", news, event dates, age cut-off) | `VITE_ADMISSION_SESSION` e.g. `2028-29` |
| Director / Principal / Chairman / Manager name | `VITE_DIRECTOR_NAME`, `VITE_PRINCIPAL_NAME`, `VITE_CHAIRMAN_NAME`, `VITE_MANAGER_NAME` |
| Phone, WhatsApp, email, office hours | `VITE_PHONE`, `VITE_WHATSAPP_NUMBER`, `VITE_EMAIL`, `VITE_OFFICE_HOURS` |
| Instagram / Facebook / YouTube (empty = icon hidden) | `VITE_INSTAGRAM_URL`, `VITE_FACEBOOK_URL`, `VITE_YOUTUBE_URL` |
| School and hostel address + Google Maps links | `VITE_SCHOOL_ADDRESS`, `VITE_HOSTEL_ADDRESS`, `VITE_SCHOOL_MAP_LINK`, `VITE_HOSTEL_MAP_LINK`, `VITE_MAP_EMBED_URL` |
| School fees | `VITE_FEE_REGISTRATION`, `_ADMISSION`, `_ANNUAL`, `_TUITION`, `_TRANSPORT` |
| Hostel fees | `VITE_HOSTEL_FEE_ADMISSION`, `_DEPOSIT`, `_MONTHLY`, `_MESS` |
| Email that receives all enquiries | `VITE_QUERY_EMAIL` |

## Enquiry emails

Every form (home page, Contact, Admissions, Hostel, newsletter) sends its message to `VITE_QUERY_EMAIL`
using FormSubmit (free, no server needed, works with Gmail). To change the receiving email, change
`VITE_QUERY_EMAIL` and restart. The first message after any change makes FormSubmit email that inbox an
activation link: click it once. Pressing "Reply" in your inbox answers the parent directly.

## Images

All photos are set in one file: `src/config/images.js`. Replace any URL with your own link or with a file
from `public/` (for example `/gallery/annual-day.jpg`). The current photos are temporary samples.

## Change page content

Edit `src/data/schoolData.js` (faculty, facilities, gallery, disclosure documents).
Put PDFs in `public/documents/` and photos in `public/gallery/`.

## Build for hosting

       npm run build

Upload the `dist` folder. On the host, set every page URL to fall back to index.html
(needed for React Router; Netlify and Vercel need a rewrite rule for this).

## New sections (added from the website structure document)

Pages: Admissions (+ printable form), School Facilities, Hostel & Residency (+ printable form),
Beyond Academics, Student Corner, News & Events, Director/Principal messages, Management & Committee,
Download Centre, Grievance Redressal, Parent Portal / Fee Payment / Student Login (coming soon),
Privacy, Terms, Child Protection and Anti-Bullying policies.

Where to edit the content (all in `src/data/`):
- `hostelData.js`   hostel text, diet plan, routine, fees. Set `girlsOperational: true` when the girls' hostel starts.
- `admissionsData.js` eligibility, age, fees, documents, rules, FAQs
- `academicsData.js` academics, facilities, competitive programmes (set `offered: true` ONLY for programmes you run)
- `aboutData.js`    Director/Principal messages (DRAFT text, replace), management, committee
- `activitiesData.js` news, upcoming events, achievements, testimonials (empty = hidden)
- `policiesData.js` policy text (have management / a legal adviser review before publishing)
- `schoolData.js`   gallery, public disclosure and download-centre documents

Any value left as "—" is shown on the site as "To be updated".
Add `VITE_HOSTEL_ADDRESS` in `.env` for the hostel address.
