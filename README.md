# 🤖 SkillSharp AI – AI Mock Interview Application

An AI-powered mock interview platform designed to help users **practice and prepare for interviews** by generating real-time, intelligent interview questions and analyzing their responses.  
Built with **Next.js**, **React.js**, and the **Google Gemini API**, SkillSharp AI provides a seamless, engaging, and data-driven mock interview experience — reducing deployment time by 30% and enhancing interview preparation efficiency.

---

## 🧠 Features

- 💬 **AI-Generated Interview Questions** – Uses **Google Gemini API** to dynamically generate role-specific interview questions.  
- 🎙 **Speech-to-Text Conversion** – Converts spoken answers into text for AI-based analysis and feedback.  
- 🔐 **Secure Authentication** – Clerk-based social and email login system.  
- 📊 **Data Management** – Store and manage interview sessions with **PostgreSQL** and **Drizzle ORM**.  
- ⚡ **Fast Deployment** – Hosted on **Vercel**, reducing deployment time by 30%.  

---

## 🛱 Tech Stack

| Layer            | Technologies |
|------------------|--------------|
| **Frontend**     | Next.js, React.js |
| **AI Integration** | Google Gemini API |
| **Authentication** | Clerk (Social & Email Auth) |
| **Database**     | PostgreSQL, Drizzle ORM |
| **Deployment**   | Vercel |
| **Speech Recognition** | Speech-to-Text |

---

## 🗂 Folder Structure
```plaintext
/skillsharp-ai
│
├── /components         # Reusable UI components
├── /pages              # Next.js pages (routes)
├── /lib                # API integrations & utilities
├── /styles             # CSS/Tailwind styles
├── /public             # Static assets
├── .env.local          # Environment variables
├── package.json
└── README.md
```
## 🚀 Getting Started

**1️⃣ Clone the Repository**
```bash
git clone https://github.com/Iamdk25/skillsharp-ai.git
cd skillsharp-ai
```
**2️⃣ Install Dependencies**
```bash
npm install
```
**3️⃣ Configure Environment Variables
Create a .env.local file in the root folder:**
```bash
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key
DATABASE_URL=postgresql://username:password@localhost:5432/yourdb
```
**4️⃣ Run PostgreSQL Migration (if using Drizzle ORM)**
```bash
npm run migrate
```
**5️⃣ Start the Development Server**
```bashZ
npm run dev
```
Visit http://localhost:3000 to access the app.

## ☁ Deployment on Vercel
   1.	Ensure environment variables are configured in the Vercel Dashboard.
	2.	Deploy:
```bash
vercel
```

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss your ideas.

⸻

## 📜 License

This project is licensed under the MIT License – see the LICENSE file for details.

## 👨‍💻 Author

**Divyarajsinh Karmariya**  
💼 Computer Science Student @ University of South Florida  
🔗 [Portfolio](https://iamdk25.github.io/3d_personal_portfolio/) • 🧠 [GitHub](https://github.com/Iamdk25) • 💼 [LinkedIn](https://www.linkedin.com/in/dkarmariya/)

[![GitHub stars](https://img.shields.io/github/stars/Iamdk25/skill-sharp-ai?style=social)](https://github.com/Iamdk25/skill-sharp-ai/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Iamdk25/skill-sharp-ai?style=social)](https://github.com/Iamdk25/skill-sharp-ai/network/members)
[![GitHub last commit](https://img.shields.io/github/last-commit/Iamdk25/skill-sharp-ai)](https://github.com/Iamdk25/skill-sharp-ai/commits/main)
![GitHub top language](https://img.shields.io/github/languages/top/Iamdk25/skill-sharp-ai)
![License](https://img.shields.io/github/license/Iamdk25/skill-sharp-ai)
