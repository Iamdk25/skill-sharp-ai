# SkillSharp AI - AI Mock Interview Application

## Overview

SkillSharp AI is an AI-powered mock interview platform designed to help users practice and prepare for interviews by generating AI-based interview questions. Built using cutting-edge technologies like Next.js, React.js, and the Google Gemini API, the platform aims to provide a seamless and engaging user experience.

With features such as speech-to-text conversion, easy authentication, and seamless data management, SkillSharp AI reduces the time needed to deploy and enhances the overall functionality of mock interviews.

## Features

- **AI-Generated Interview Questions**: Leverage Google Gemini API to generate intelligent interview questions based on the user's desired role.
- **Speech-to-Text Conversion**: Convert user responses from speech to text for analysis and feedback.
- **User Authentication**: Secure user access with Clerk-based social and email authentication.
- **Data Management**: Efficiently manage user data with PostgreSQL and Drizzle ORM.
- **Fast Deployment**: Reduced deployment time by 30% using Vercel.

## Tech Stack

- **Frontend**: Next.js, React.js
- **AI Integration**: Google Gemini API for generating questions
- **Authentication**: Clerk for social and email authentication
- **Database**: PostgreSQL, Drizzle ORM for managing user data
- **Deployment**: Vercel for fast and efficient deployment
- **Speech Recognition**: Speech-to-text functionality

## Project Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16.x or higher)
- PostgreSQL
- Vercel CLI (optional for deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/skillsharp-ai.git
   cd skillsharp-ai

   ```
Install dependencies:

``` bash
npm install
Set up environment variables:
```
Create a .env.local file in the project root with the following:

``` bash
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key
DATABASE_URL=postgresql://username:password@localhost:5432/yourdb
Run the PostgreSQL migration (if using Drizzle ORM):
```

``` bash
npm run migrate
Start the development server:
```

``` bash
npm run dev
Visit http://localhost:3000 to view the application.
```

Deployment
To deploy SkillSharp AI on Vercel:

Ensure your environment variables are configured in Vercel dashboard.

Deploy the project:

``` bash
vercel
Contribution
Feel free to fork this repository, create new branches for features or fixes, and submit pull requests. Contributions are welcome!
```

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For questions or feedback, feel free to reach out:

GitHub: https://github.com/Iamdk25
Email: dkarmariya@usf.edu

