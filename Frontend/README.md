# Code Reviewer

A simple AI-powered code review tool that analyzes code snippets and provides feedback using Google's Generative AI.

## Features

- Interactive code editor with syntax highlighting
- AI-generated code reviews and suggestions
- Markdown-formatted review output
- Responsive web interface

## Tech Stack

- **Frontend**: React, Vite, PrismJS, React Markdown
- **Backend**: Node.js, Express, Google Generative AI

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google AI API key

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/code-reviewer.git
   cd code-reviewer
   ```

2. Install backend dependencies:
   ```bash
   cd Backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../Frontend
   npm install
   ```

4. Set up environment variables:
   - Create `.env` file in Backend directory
   - Add your Google AI API key: `GOOGLE_AI_API_KEY=your_api_key_here`

## Usage

1. Start the backend server:
   ```bash
   cd Backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd Frontend
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`
4. Enter code in the editor and click "Review" to get AI feedback

## Deployment

### Backend Deployment (e.g., Heroku)

1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Heroku CLI:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Frontend Deployment (e.g., Vercel)

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Deploy to Vercel:
   ```bash
   npx vercel
   ```

3. Set `VITE_API_URL` environment variable to your backend URL

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the ISC License.