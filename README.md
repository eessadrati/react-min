# react-min App with Vite

This project is a basic setup for a React application using Vite as the build tool, React-router-dom for routing and Material-UI library for styling components. Vite is a lightweight and fast build tool that enables fast development, hot module replacement, and efficient production builds.

## Installation

To install the project, follow these steps:

1. Clone the repository:
```bash
  git clone https://github.com/keynavas/react-min.git
```
2. Change into the project directory:
  ```bash
    cd react-min
  ```
3. Install dependencies:
  ```bash
    npm install
  ```
## Usage
* To start the development server, run:
  ```bash
    npm run dev
  ```
* To build the production version of the application, run:
  ```bash
    npm run build
  ```
  This will create a production build in the dist directory.
* To serve the production build locally, run:
  ```bash
    npm run serve
  ```
## Folder Structure
The project follows a basic folder structure:
```bash
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │    └── react.svg
│   ├── components/
│   │    ├── NavBar.jsx
│   │    └── NavBarLyout.jsx
│   ├── layout/
│   ├── pages/
│   │    ├── Home.jsx
│   │    ├── Login.jsx
│   │    └── Signup.jsx
│   ├── router/
│   │    └── Router.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Technologies Used
  * React (Javascript)
  * Vite
  * React Router Dom
  * Material-UI (MUI)
