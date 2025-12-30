# Bloom Link AI Agency Landing Page

A premium, high-converting, single-page landing page for **Bloom Link AI Agency**, specializing in Appointment Generation Systems for real estate professionals.

## 🚀 Site Overview & Prompt Summary

**Project Goal:** To create a modern, authority-building landing page that converts real estate agents into leads by offering a "Done-For-You" Appointment Generation System.

**Core Value Proposition:** We generate the leads via Meta/Instagram ads, and our proprietary AI Agent calls and books them into the user's calendar 24/7.

**Design Aesthetic:**
- **Primary Palette:** Professional Blue (#2563EB), Slate Grays, and clean white space.
- **Typography:** Inter (San-serif) for a modern, tech-focused feel.
- **Interactive Elements:** Animated sound waves for the AI demo, workflow visualizers in the Hero section, and a multi-step application form.
- **Tone:** Authoritative, innovative, and results-oriented.

---

## 🛠 Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS (Utility-first CSS)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Integration:** GoHighLevel (GHL) Webhook via `fetch` API

---

## 📦 Key Components

- **Navbar:** Sticky navigation with immediate CTA access.
- **Hero:** Features a high-impact workflow mockup showing the path from "Ad Click" to "Confirmed Appointment."
- **Solutions & Benefits:** Grids highlighting the 24/7 nature of AI and the elimination of manual follow-up.
- **Strategic Advertising:** An educational section explaining *why* strategic ads outperform traditional methods.
- **HearYourFutureAI:** A specialized section designed to build trust through audio-visual cues (Mic icon & Soundwave animations).
- **LeadForm:** A robust application form with:
  - Required fields and placeholder selection.
  - Standardized JSON payload for GHL CRM mapping (`first_name`, `email`, `lead_source`, etc.).
  - Automatic success state management.

---

## 🔗 CRM Integration (GoHighLevel)

The application form is connected to a GHL Webhook. 

- **Endpoint:** `https://services.leadconnectorhq.com/hooks/Y5zsNn2xY4yBhOcBzCel/webhook-trigger/490b0dd3-56fe-46b7-a0b0-08cd29f1dc1e`
- **Data Format:** JSON
- **Field Mapping:**
  - `full_name`: Combined first and last name.
  - `lead_source`: Captures how they heard about the agency.
  - `current_ad_spend`: Qualifies lead budget.
  - `implementation_timeline`: Gauges lead urgency.

---

## 🏃 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## 📝 License
Proprietary for Bloom Link AI Agency.