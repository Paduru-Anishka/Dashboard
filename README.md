Admin Dashboard for Social Media Application
Project Overview
This project is an admin dashboard built using React.js for a social media application. The dashboard provides administrators with the ability to monitor user activity, manage posts, and view key performance indicators (KPIs). The application includes a login page, a home page displaying KPIs, a user listing page, and a post listing page, all accessible via a sidebar navigation.

Features
Login Page: Simple login form with email and password fields.
Home Page: Displays KPIs such as Total Users, Total Posts, Users Active in the Last 24 Hours, and Posts Published in the Last 24 Hours.
User Listing Page: Displays a list of users with options to edit or ban them. Includes pagination.
Post Listing Page: Displays a list of posts with options to delete or hide them. Includes pagination.
Dummy Data: Uses dummy datasets for users and posts.
State Management: Utilizes React's useState and useEffect hooks for state management.
Navigation: Sidebar navigation for easy access to different sections of the dashboard.
Styling: Basic CSS styling is provided. You can enhance the UI using Material-UI, Bootstrap, or custom CSS.
Getting Started
Prerequisites
Make sure you have the following installed on your system:

Node.js (v14.x or later)
npm (v6.x or later) or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/social-media-admin-dashboard.git
cd social-media-admin-dashboard
Install dependencies:

bash
Copy code
npm install
Running the Application
Start the development server:

bash
Copy code
npm start
Open your web browser and navigate to http://localhost:3000 to view the admin dashboard.

Project Structure
bash
Copy code
/src
  /components         # Reusable React components (NavBar, KpiBox)
  /pages              # Page components (Home, UserListing, PostListing, Login)
  /assets
    /data             # Dummy data for users and posts
  /services           # Authentication service (authService.js)
  App.js              # Main application component
  index.js            # Entry point for the React app
  index.css           # Basic styling for the application
Available Scripts
In the project directory, you can run the following commands:

npm start: Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.
npm build: Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.
Dummy Data
The application uses dummy data for users and posts, which can be found in the src/assets/data directory:

users.js: Contains a list of dummy users.
posts.js: Contains a list of dummy posts.
Authentication
A simple authentication service (authService.js) is used to simulate login functionality. It stores an authentication flag in localStorage upon successful login. The login page allows access to the admin dashboard with any set of credentials.
