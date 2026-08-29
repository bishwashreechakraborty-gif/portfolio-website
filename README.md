# Bishwashree Chakraborty - Personal Portfolio

A premium, cinematic personal portfolio website built with React, Vite, Tailwind CSS (v4), and Framer Motion. 

This portfolio is designed to showcase projects, skills, experience, and certifications in a modern, interactive format with smooth scrolling, beautiful animated SVG wave transitions, and a responsive glassmorphism UI.

## 🚀 Features
- **Cinematic Hero Section:** Floating cutout profile image, pulsating badges, and glowing animations.
- **Smooth Animations:** Powered by `framer-motion` for scroll reveals and interactive hover states.
- **Dynamic Wave Transitions:** Seamless SVG wave borders separating sections.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewing.
- **Projects & Experience:** Display GitHub repositories and professional internships beautifully.
- **Custom Theme:** A bespoke "Cinematic Red & Dark" theme designed to stand out to recruiters and peers.
- **Automated Resume Generation:** Includes a custom Python script (`generate_resume.py`) to automatically generate a professional PDF resume using `fpdf2`.
- **LaTeX Source Code:** Includes a highly professional, ATS-optimized LaTeX resume (`resume.tex`).

## 🛠️ Tech Stack & Tools
- **Frontend:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Automation/Scripts:** Python (`fpdf2`, `Pillow`, `numpy`) for PDF generation and image processing.
- **Documents:** LaTeX for ATS-friendly resume formatting.

## 📄 Resume Files
- **`public/resume.pdf`**: The active resume available for download on the site (generated via Python).
- **`generate_resume.py`**: A Python script to easily update and regenerate the PDF resume programmatically.
- **`resume.tex`**: The raw LaTeX source code for an industry-standard, ATS-optimized version of the resume (compile via Overleaf).
- **`make_transparent.py`**: A custom Python utility script used to extract white signatures from colored backgrounds for the navbar logo.

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bishwashreechakraborty-gif/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/`

4. **Regenerate Resume (Optional):**
   ```bash
   pip install fpdf2
   python generate_resume.py
   ```

## 🌐 Deployment (Vercel)

This project is pre-configured for seamless deployment on [Vercel](https://vercel.com).

1. Push your code to a GitHub repository.
2. Go to Vercel and create a new project.
3. Import your GitHub repository.
4. Vercel will automatically detect the **Vite** framework. 
5. Leave the default settings and click **Deploy**.
   - Note: The included `vercel.json` ensures that Single Page Application (SPA) routing works correctly.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
