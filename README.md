# 🚀 Professional Developer Portfolio

A premium, modern, and highly interactive personal portfolio website designed to showcase projects, experience, certificates, and skills. Built with cutting-edge web technologies including **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **GSAP**.

🔗 **Live Link:** [sk-akram.me](https://sk-akram.me)

---

## ✨ Features

- 🌌 **Aurora Background Effects:** Visually stunning ambient glowing backgrounds that dynamically react.
- 📜 **Smooth Scrolling:** Integrated with **Lenis Smooth Scroll** for a highly fluid and premium reading experience.
- ⚡ **Dynamic Animations:** Micro-animations, parallax effects, and transitions powered by **Framer Motion** and **GSAP**.
- 🛠️ **Fully Responsive:** Beautifully optimized across all devices, from mobile phones to high-resolution desktops.
- 🎭 **Interactive UI Components:**
  - Dynamic **Typewriter** titles.
  - Interactive **Project Showcase Cards**.
  - **Certificates** and **Experience** timeline displays.
  - A modern **Contact Form** with active links.
- 🌓 **Dark Mode Support:** Built-in theme management utilizing `next-themes`.
- 🗃️ **Zustand State Management:** Lightweight, scalable state tracking for app transitions and states.

---

## 🛠️ Tech Stack & Libraries

### Core
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

### Animations & Interactions
- **Framer Motion:** For scroll-triggered animations and layout transitions.
- **GSAP (GreenSock):** For advanced scroll-tied timeline animations.
- **Lenis:** For smooth momentum scrolling.

### State & Utilities
- **Zustand:** Global state management.
- **Lucide React:** Clean, customizable modern icons.
- **clsx & tailwind-merge:** Dynamic and conflict-free CSS class merging.

---

## 📂 Directory Structure

```text
src/
├── app/                  # Next.js App Router pages and global configurations
├── components/
│   ├── navigation/       # Navigation bars, scroll indicators, etc.
│   ├── portfolio/        # Portfolio sections (Hero, Projects, Experience, Skills, Contact)
│   ├── providers/        # Context providers (Theme, Lenis, etc.)
│   └── ui/               # Reusable UI primitives (Buttons, Cards, Badges)
├── lib/                  # Helper utilities and shared libraries
├── store/                # Zustand global store configuration
└── types/                # TypeScript interfaces and type definitions
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.x or higher recommended) and npm/yarn installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sk-Akram-Ahmed/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📄 License

This project is licensed under the MIT License. Feel free to customize and use it for your own portfolio!
