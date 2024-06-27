# Scrimba React Developer Specialization


## Developed Mini/Major Project Links
- [My Travel Journal] [https://667da8e33dc0c8430c59b86c--mtjp.netlify.app/] 

## Module One Overview

Welcome to the Scrimba React Developer Specialization! This README provides an overview of Module One, where we focused on building static websites using React 17 and 18. This module is designed to equip you with the foundational skills required to create static websites with the latest versions of React.

## Objectives

By the end of Module One, you will have learned:

- The basics of React, including components, props, and state
- How to set up a React project using Create React App
- Differences between React 17 and React 18
- Best practices for organizing and structuring your React application
- How to deploy a static React website

## Prerequisites

Before starting this module, you should have:

- Basic understanding of HTML, CSS, and JavaScript
- A code editor installed (e.g., VS Code)
- Node.js and npm installed on your machine

## Getting Started

### Setting Up Your React Project

1. **Install Create React App**:
    ```sh
    npx create-react-app my-static-website
    cd my-static-website
    ```

2. **Start the Development Server**:
    ```sh
    npm start
    ```

3. **Open your project in a code editor** and start building!

### Key Topics Covered

1. **Introduction to React**
    - Understanding the virtual DOM
    - Creating and rendering components
    - JSX syntax and expressions

2. **React Components**
    - Functional components
    - Class components
    - Props and state management

3. **React 17 vs React 18**
    - New features in React 18
    - Differences and improvements
    - How to upgrade your project to React 18

4. **Styling in React**
    - Inline styles
    - CSS Modules
    - Styled-components

5. **Project Structure**
    - Organizing your files and folders
    - Best practices for scalable applications

6. **Deployment**
    - Preparing your project for production
    - Deploying to static site hosts like GitHub Pages or Vercel

## Example Project Structure

Here's an example of a basic project structure:

```
my-static-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## Sample Code

### Basic Component Example

```jsx
// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header>
            <h1>Welcome to My Static Website</h1>
        </header>
    );
}

export default Header;
```

### Using the Component

```jsx
// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            {/* Other components */}
            <Footer />
        </div>
    );
}

export default App;
```

## Deployment

To deploy your React application, follow these steps:

1. **Build the Project**:
    ```sh
    npm run build
    ```

2. **Deploy to GitHub Pages**:
    - Install the GitHub Pages package:
      ```sh
      npm install gh-pages --save-dev
      ```
    - Add the following to your `package.json`:
      ```json
      "homepage": "https://<username>.github.io/<repository-name>",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
      ```
    - Deploy:
      ```sh
      npm run deploy
      ```

## Conclusion

Congratulations on completing Module One of the Scrimba React Developer Specialization! You have built a static website using React 17 and 18, learned about the key differences between these versions, and understood the best practices for organizing and deploying your React applications. Keep practicing and exploring more advanced topics as you continue your journey to becoming a React developer.

Happy coding!
