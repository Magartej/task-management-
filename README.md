# Task Management App

## Overview

Task Management App is a web application that allows users to manage their tasks efficiently. Users can sign up, log in, and securely manage their personal to-do lists. The app is built with React and Firebase, providing a seamless and responsive user experience.

## **Features**

- User authentication (Sign up, Login, Logout)
- Secure, user-specific task management
- Add, edit, and delete tasks
- Real-time updates with Firebase Firestore
- Protected routes for authenticated users
- Responsive and modern UI

## Tech Stack

- **Frontend:** React, React Router
- **Backend/Database:** Firebase Authentication & Firestore
- **Styling:** CSS

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-management-.git
   cd task-management-
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
src/
  components/        # React components (Dashboard, Login, Signup, etc.)
  contexts/          # React Context for authentication
  firebase/          # Firebase configuration
  App.js             # Main app component
  index.js           # Entry point
public/              # Static files
```

## Firebase Setup

This project uses Firebase for authentication and database. To use your own Firebase project:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Replace the config in `src/firebase/firebase.js` with your own Firebase credentials.

## License

This project is licensed under the MIT License.
