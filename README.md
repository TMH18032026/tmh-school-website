# T.M.H International School website

React + Vite + Tailwind CSS + React Router.

## Run on your computer

1. Install Node.js 18 or newer from https://nodejs.org
2. Open a terminal in this folder and run:

       npm install
       npm run dev

3. Open the link shown in the terminal (usually http://localhost:5173)

## Change school details

Open the `.env` file, edit the values (phone, email, address, Instagram, Facebook,
YouTube, WhatsApp, query email), save, then stop the server (Ctrl+C) and run `npm run dev` again.

Enquiry and newsletter messages are sent to VITE_QUERY_EMAIL using FormSubmit.
The first message triggers an activation email to that address: click the link once.

## Change page content

Edit `src/data/schoolData.js` (faculty, facilities, gallery, disclosure documents).
Put PDFs in `public/documents/` and photos in `public/gallery/`.

## Build for hosting

       npm run build

Upload the `dist` folder. On the host, set every page URL to fall back to index.html
(needed for React Router; Netlify and Vercel need a rewrite rule for this).
