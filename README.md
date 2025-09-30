# 🧠 Three-Level-Quiz-Application

A full-stack, three-level quiz application built with the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to test user knowledge across multiple difficulty settings. This project is designed to provide users with a dynamic quizzing experience across different complexity levels, and also structured as a single-page application (SPA) for the client, powered by a dedicated RESTful API on the server.

## ✨ Key Features -
- **Three Difficulty Levels:** Users can select between Easy, Medium, and Hard difficulty settings before starting the quiz.
- **Rules Page Navigation:** A dedicated entry point to review rules before proceeding to the difficulty selector.
- **RESTful API:** Clean separation between the front-end and back-end logic.
- **Quiz Submission & Scoring:** Handles submission of answers and calculates the final score.
- **Modular React Components:** Clean separation of concerns with dedicated components for rules, difficulty selection, and the main quiz interface.
- **Responsive Design:** A modern, mobile-friendly user interface built with React.

## 🛠️ Technology Stack -

### Client (FrontEnd)

- **React.js:** For building the user interface.
- **React Router:** For navigation between different application views (e.g., login, quiz, results).
- **Axios/Fetch:** For communicating with the back-end API.
- **∗Placeholder:** AddUILibrarye.g.,Bootstrap,TailwindCSS,MaterialUI*

### Server (BackEnd)

- **Node.js & Express.js:** The back-end runtime and web framework.
- **MongoDB:** The NoSQL database used for storing user data and quiz questions/scores.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB.
- **JSON Web Tokens (JWT):** For secure user authentication.

## 🚀 Installation and Setup -
This project requires two separate setups for the client (FrontEnd) and the server (BackEnd).

### 1. Prerequisites
Ensure you have the following installed on your system:

- Node.js (v14 or higher).
- npm (or yarn).
- MongoDB (Local instance or Atlas connection string).

### 2. Back-End Setup
The server runs on port 1001 (as suggested by your previous error log).

Navigate to the backend directory:
```Bash
  cd BackEnd
```
Install dependencies:
```Bash
  npm install
```
### 3. Configure Environment Variables:
Create a file named .env in the BackEnd directory and add your database connection string and port:

Code snippet.
```
  # .env file content
  PORT=1001
  MONGO_URI="mongodb+srv://<YourUsername>:<YourPassword>@<YourClusterName>..."
```
Seed the Database (Optional):
If your back-end includes a script to populate quiz questions, run it now.

### 4. Start the server:
```Bash
  npm start
```
The server should now be running at http://localhost:1001.

### 5. Front-End Setup
Navigate to the frontend directory:
```Bash
  cd ../FrontEnd
```
Install dependencies:
```Bash
  npm install
```
Start the React application:
```Bash
  npm run start
```
The client application should open in your browser, typically at http://localhost:5173 or http://localhost:3000.

## 🧭 Usage Flow -
- **Rules Page (/):** The application starts here, displaying the quiz rules.
- **Difficulty Selector (/difficulty):** Click the "Go to Difficulty Selection" button to navigate to this page.
- **Quiz Page (/quiz/:level):** Select a level (Easy, Medium, or Hard) to start the quiz for that specific level.
- **Submission:** On completion, the quiz data is sent to the back-end API at /api/quiz/submit for scoring.