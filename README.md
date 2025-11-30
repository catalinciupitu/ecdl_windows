# ECDL Windows 11 Quiz

An interactive multiple-choice quiz application developed to test basic IT knowledge based on the ECDL Computer Essentials (Windows 11) manual.


## 🚀 Features

*   **Extensive Database:** Contains over 85 questions covering: Hardware, Software, Windows 11, Word, File Management, Networks, and Security.
*   **Dynamic Sessions:** 20 questions are randomly selected from the pool for every new game.
*   **Randomization:** Both questions and answer options are shuffled every time.
*   **Timer:** Users have a 10-minute limit to complete the quiz.
*   **Immediate Feedback:** Correct answers and explanations are shown immediately after selection.
*   **Scoring System:** A passing score of 80% (16/20 correct answers) is required.
*   **Modern UI:** Responsive and clean design built with Tailwind CSS.

## 🛠️ Tech Stack

*   [React](https://react.dev/) - JavaScript library for building user interfaces
*   [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
*   [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
*   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 💻 Installation & Local Development

To run this project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR-USERNAME/ecdl-quiz.git
    cd ecdl-quiz
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

## 📦 Deployment to GitHub Pages

To publish the app online using GitHub Pages:

1.  Open `vite.config.ts` and add your repository name to the `base` property:
    ```typescript
    export default defineConfig({
      plugins: [react()],
      base: '/repo-name/', // Example: '/ecdl-quiz/'
    })
    ```

2.  Enable **GitHub Actions** in your repository settings on GitHub (Settings -> Pages -> Source: GitHub Actions).

3.  Push your code to GitHub. The deployment workflow should automatically handle the build and publish process.

## 📝 Project Structure

*   `src/App.tsx` - Main component and game logic.
*   `src/constants.ts` - Question database.
*   `src/types.ts` - TypeScript interfaces and enums.
*   `index.html` - HTML entry point.

## 📄 License

This project is created for educational purposes.
