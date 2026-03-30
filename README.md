# Shortlink SaaS MVP

This is the Shortlink SaaS MVP project designed to provide a simple and efficient URL shortening service for users. The project consists of several key components, including user authentication, URL shortening, link analytics, and a dashboard for users to manage their links.

## Project Structure

```plaintext
shortlink-saas-mvp/
├── src/
│   ├── controllers/
│   │   ├── linkController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── linkModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── linkRoutes.js
│   │   └── userRoutes.js
│   ├── views/
│   │   ├── dashboard.ejs
│   │   └── index.ejs
│   ├── public/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── app.js
│   ├── config/
│   │   └── db.js
│   └── server.js
├── .env
├── .gitignore
└── package.json
```

## Features
- User Registration and Authentication
- URL Shortening
- Link Analytics (Clicks, Visits)
- User Dashboard
- Admin Panel

## Installation
1. Clone the repository.
2. Navigate into the directory: `cd shortlink-saas-mvp`
3. Install dependencies: `npm install`
4. Setup your environment variables in the `.env` file.
5. Start the application: `node src/server.js`

## Usage
- Visit the homepage to shorten a URL.
- Use the dashboard to manage your shortened links and view analytics.

## Contributing
Feel free to submit issues or pull requests for any suggestions or improvements.

## License
This project is licensed under the MIT License.