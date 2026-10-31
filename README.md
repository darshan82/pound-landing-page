# Pound — Landing Page & Tester Sign-up

Pre-launch landing page for **Pound**, a platform that gamifies fitness for gamers ("Reach the Avatar State"). Visitors go through a step-by-step onboarding: complete community missions, create a personalised 3D avatar, claim a player tag, register, and verify their email with a one-time code to join the tester programme.

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/React_Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## Features

- **Multi-step onboarding flow** driven by a custom stepper
  1. Intro – "Forge your digital identity"
  2. Onboarding missions – verified through the Zealy community API
  3. **3D avatar creation** with Ready Player Me (`@readyplayerme/react-avatar-creator`)
  4. Full-body avatar preview (Ready Player Me render API) and unique player tag check
  5. Registration form with country selection
  6. **Email OTP verification**
  7. Success / error screens
- **Newsletter subscription** in the footer
- **Google Analytics** page views and events for each onboarding step
- Responsive layout with React Bootstrap
- Privacy policy and terms & conditions pages
- **HTML email templates** (OTP, onboarding, success) in [`email-templates/`](email-templates)

## Tech stack

| Area       | Tools                                                          |
| ---------- | -------------------------------------------------------------- |
| UI         | React 18, Vite, React Bootstrap, React Icons                   |
| Avatars    | Ready Player Me avatar creator + render API                    |
| Routing    | React Router 6                                                 |
| Data       | Axios (REST API)                                               |
| Analytics  | Google Analytics (react-ga)                                    |
| Hosting    | Vercel                                                         |

## Project structure

```
├── src/
│   ├── pages/
│   │   ├── Register.jsx            # Landing page + onboarding stepper
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsConditions.jsx
│   │   └── components/             # Stepper steps, Navbar, Footer, alerts
│   ├── config.js                   # API base URL
│   └── App.jsx                     # Routes + analytics setup
└── email-templates/                # Transactional email HTML templates
```

## Getting started

**Requirements:** Node.js 18+, Yarn

```bash
git clone https://github.com/darshan82/pound-landing-page.git
cd pound-landing-page
yarn install
cp .env.example .env    # optional: point VITE_API_URL at another backend
yarn dev                # http://localhost:5173
```

| Script         | Description                   |
| -------------- | ----------------------------- |
| `yarn dev`     | Start the dev server          |
| `yarn build`   | Production build into `dist/` |
| `yarn preview` | Preview the production build  |
| `yarn lint`    | Run ESLint                    |

## Author

**Darshan Lal** — Full-Stack Developer
[Portfolio](https://darshan-portfolio-one.vercel.app/) · [GitHub](https://github.com/darshan82)
