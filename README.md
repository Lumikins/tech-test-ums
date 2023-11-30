# User Management System - A React Tech Test

This is a UMS app created using react and vite, with [Material UI components](https://mui.com/material-ui/getting-started/) and Tailwind css for styling, and mocking the backend using [Mock Service Worker / MSW](https://mswjs.io/docs/).
The app is a dashboard with several sections, focused on the "users" section, allowing for CRUD operations.
The app is responsive for mobile view.

# Installation
## To run the app in a development environment :
- Make sure to clone or download the repository
- Open the folder in your IDE - Visual Studion Code / Sublime Text etc.
- Use the following commands in your IDE terminal to launch the app :
```
npm install
npx vite
```
- Open the development server in your browser to view the app (default: localhost:5173)

# The App Interface
Use the left side menu to navigate between the different sections of the app. Currently just the "users" tab contains any information. All other tabs have blank pages, or redirect to the home page.

# The Users Tab
This sections shows a table of all registered users, with different information about each user, such as name and email.
Each user has an "actions" row, allowing to perform CRUD operations on this user (all actions are mocked using MSW) :

- Clicking the :eye: icon will open a new page with detailed information of the user
- Clicking the :pencil2: icon will open a popup window with an option to update user details
- Clicking the :wastebasket: icon will delete the user from the database (currently no warning message implemented)
- The page also includes an option to add a new user to the database
- The table includes some built-in options, such as search and sorting

# Improvements and Additions
Here are some improvements and additions to be implemented in the app :

- Add a login page for administrators (authentication)
- Add other sections
- Modify the components
- Improve code
- Modify styling
- Add unit tests
