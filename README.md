Admin Dashboard for Social Media Application
Project Overview
This project is an admin dashboard designed for a social media application, built using React.js. The dashboard provides a platform for administrators to monitor user activity, manage posts, and view key performance indicators (KPIs). It includes essential features such as a login page, a home page displaying KPIs, a user listing page, and a post listing page, all of which are accessible via a sidebar navigation.

Features
Login Page: A simple login form with fields for email and password, allowing access to the admin dashboard.
Home Page: Displays key performance indicators including Total Users, Total Posts, Users Active in the Last 24 Hours, and Posts Published in the Last 24 Hours.
User Listing Page: Provides a list of users with options to edit or ban them, complete with pagination for easier navigation.
Post Listing Page: Displays a list of posts with options to delete or hide them, also featuring pagination.
Dummy Data: Utilizes mock datasets for users and posts to simulate real data.
State Management: Managed using React's built-in useState and useEffect hooks for handling state within the application.
Navigation: A sidebar navigation is available for seamless access to different sections of the dashboard.
Styling: Basic CSS styling is implemented, with the option to enhance the UI using libraries like Material-UI or Bootstrap.
Getting Started
Prerequisites
To run this project, ensure that you have the following installed on your system:

Node.js
npm (or yarn)
Installation
Clone the repository to your local machine.
Install the necessary dependencies using npm or yarn.
Start the development server to run the application.
Project Structure
The project is organized into components, pages, assets, and services. This structure allows for easy maintenance and scalability.

Dummy Data
The application uses mock data for users and posts to demonstrate functionality. These datasets can be easily replaced with real data from a backend service.

Authentication
A simple authentication mechanism is in place to simulate user login. This can be expanded or replaced with a more robust authentication system as needed.

Future Enhancements
Backend Integration: Replace dummy data with real-time data fetched from a backend service.
Form Validation: Implement form validation for better user input handling.
UI/UX Improvements: Enhance the visual appeal and user experience using advanced styling techniques or libraries.
Advanced State Management: Introduce Redux or Context API for more complex state management requirements.
Security: Implement stronger authentication and authorization mechanisms, such as JWT-based authentication.
