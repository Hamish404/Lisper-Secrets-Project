# Lisper - Random Secret Generator

This project uses Express.js and Axios to fetch and display a random secret from the Secrets API (https://secrets-api.appbrewery.com/random).  It provides a simple and visually appealing way to reveal a secret.

## Features

*   Fetches a random secret from the Secrets API.
*   Displays the secret and the associated username.
*   Styling with CSS, including a captivating card effect.
*   Responsive design for different screen sizes.

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Web application framework for Node.js.
*   **Axios:** HTTP client for making requests to external APIs.
*   **EJS (Embedded JavaScript):** Templating engine for generating HTML.
*   **CSS:** Styling for the user interface, including animations and font integration from Google Fonts.

## Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/Hamish404/Lisper-Secrets-Project.git](https://www.google.com/search?q=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    ```

2.  Navigate to the project directory:

    ```bash
    cd Lisper-Secrets-Project
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Start the server:

    ```bash
    node index.js
    ```

2.  Open your browser and go to `http://localhost:3000`.

3.  The application will fetch a random secret from the API and display it on the page.

## Project Structure

Lisper-Secrets-Project/
├── public/
│   └── styles/
│       └── main.css  <-- CSS Stylesheet
├── views/
│   └── index.ejs    <-- EJS Template
└── index.js         <-- Express.js app

## Code Explanation

*   The Express.js app sets up a route at `/` that fetches data from the Secrets API using Axios.
*   The API response (secret and username) is then passed to the `index.ejs` template for rendering.
*   The CSS in `public/styles/main.css` provides the visual styling, including the card effect and Google Font integration.

## API Documentation

The code interacts with the Secrets API. Refer to the official Secrets API documentation for more information: https://secrets-api.appbrewery.com

## Styling

The CSS styling includes:

*   A captivating card design with a background image and hover effect.
*   Use of Google Fonts for headings and text.
*   A responsive design approach.
