# Aquila Altair Panggabean — Developer & Product Portfolio (v2.0)

A modern, responsive, and editorial personal portfolio website built with **React, Vite, TypeScript, and Tailwind CSS**, adhering to the **Antislop Craftsmanship Standard** (high contrast, zero generic visual noise, verifiable accomplishments, accessible semantic HTML).

---

## 🌟 Key Highlights & Additions

- **Flagship Case Study — TiMu (Finalist National Entrepreneurship Adikara 2026):** Peer-to-peer escrow platform with a clean 4-step fund custody state-machine flow diagram, comprehensive problem-solution breakdown, and collaborator credits (Aquila Altair Panggabean, Berni Venus Mutri Azhara, Vincentius Farrel Hermawan).
- **Recent Experience Ledger — ITSF Championship (Nov 2026 – Present):** Staff of Public Relations covering social media campaign production, media partner relations, and Team Liaison Officer (LO) duties.
- **Competitions & Lab Research:** SuperPlus (2nd Place MotionHack 5.0), Vantage AI (Mobile Innovation Lab), EZPark (Arduino IoT), and PKM-KC (Faculty Level Applied IT Research).
- **Core Capabilities (No Fake Progress Bars):** Structured categorizations across Software & IoT Systems, Product & Business Strategy, and Leadership & Public Relations.
- **Interactive UI Mechanisms:** Hairline reading scroll progress bar, scroll-spy navigation, category filter tabs, keyword search bar, accessible case study inspector modal (`Esc` close + focus restoration), and instant copy email notification with feedback toast.

---

## 🛠️ Tech Stack & Design Tokens

- **Framework:** React 18 + TypeScript + Vite 5
- **Styling:** Tailwind CSS 3
- **Design Tokens:**
  - Background: `#0B0F17` (Deep Slate)
  - Surface: `#111827` (Card Surface) with `#1F2937` subtle borders
  - Text Primary: `#F8FAFC` (Clean Slate White)
  - Text Secondary: `#94A3B8` (Muted Slate)
  - Accents: `#10B981` (Emerald) & `#F59E0B` (Amber)
- **Typography:** Plus Jakarta Sans (Body & Headings) and JetBrains Mono (Badges, Metadata, Code Tags)
- **Icons:** Lucide React (with accessible ARIA roles & labels)

---

## 🚀 Getting Started Locally

```bash
# Navigate to the project directory
cd "C:\Users\altai\.gemini\antigravity\scratch\aquila-portfolio"

# Start the Vite development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 🚢 Deploying to GitHub Pages

1. **Initialize Git & Push to Repository:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Aquila Altair Panggabean portfolio v2.0"
   git branch -M main
   git remote add origin https://github.com/aquilapanggabean/<repository-name>.git
   git push -u origin main
   ```

2. **Automated GitHub Actions:**
   The repository includes `.github/workflows/deploy.yml`. When you push to `main`, GitHub Actions will automatically install dependencies, build the production bundle, and publish to GitHub Pages.

3. **In GitHub Settings:**
   Go to **Settings > Pages > Build and deployment > Source**, and select **GitHub Actions**.
