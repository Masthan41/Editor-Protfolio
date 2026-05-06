# M A Waheed Portfolio

A modern portfolio website for **M A Waheed**, a professional video editor and visual storyteller.  
Built with **React**, **Vite**, and **EmailJS**, the site is designed to showcase editing work, services, testimonials, and client contact details in a cinematic, responsive layout.

## Features

- Premium dark-themed portfolio interface
- Responsive layout for mobile, tablet, laptop, and desktop screens
- Featured work section with local video previews
- Sound controls for uploaded video previews
- Services, testimonials, and about sections
- Contact form powered by EmailJS

## Tech Stack

- React
- Vite
- CSS
- EmailJS

## Project Structure

```text
.
|-- assets/
|   |-- pf.jpeg
|   |-- main_pf.jpeg
|   |-- vid1.mp4
|   |-- vid2.mp4
|   |-- vid3.mp4
|   `-- vid4.mp4
|-- src/
|   |-- components/
|   |-- data/
|   |-- App.jsx
|   |-- main.jsx
|   `-- styles.css
|-- .env.example
|-- package.json
`-- README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create your environment file

Create a `.env` file in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## EmailJS Setup

This project uses EmailJS for the contact form.

You need:

- `Service ID` from `Email Services`
- `Template ID` from `Email Templates`
- `Public Key` from `Account`

The EmailJS template should support these variables:

- `user_name`
- `user_email`
- `message`
- `to_email`

Example template body:

```text
Name: {{user_name}}
Email: {{user_email}}
Message: {{message}}
To: {{to_email}}
```

## Deployment

This project can be deployed easily on platforms like:

- Vercel
- Netlify

Recommended build settings:

- Build command: `npm run build`
- Output directory: `dist`

Make sure to add the same EmailJS environment variables in your hosting dashboard before deploying.

## Notes

- The featured video previews use local `.mp4` files from the `images` folder.
- Large video files may affect loading speed on slower networks.
- For better performance, compressing the videos before deployment is recommended.

## License

This project is for portfolio use by **M A Waheed**.
