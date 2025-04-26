🚨 AI Safety Incident Dashboard 🚨
Welcome to the AI Safety Incident Dashboard! This is a web-based platform designed for managing and tracking AI safety incidents. With an intuitive interface, users can efficiently view, filter, and add incidents, while sorting them by severity and date.

Table of Contents:
Installation

Technologies Used

How to Run

Design Decisions

Challenges

Contact

Installation
To get started with the project locally, follow these simple steps:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/AnshThukral/ai-safety-dashboard.git
Navigate to the project directory:

bash
Copy
Edit
cd ai-safety-dashboard
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
View the application:
Open your browser and visit http://localhost:3000 to see the AI Safety Incident Dashboard in action.

Technologies Used
Frontend: React.js – A powerful JavaScript library for building user interfaces.

State Management: React's useState – Utilized for managing dynamic states like incidents, filters, and mode toggling.

Styling: Tailwind CSS – A utility-first CSS framework used to create responsive, customizable components with minimal effort.

Build Tool: Create React App (CRA) – Used to quickly set up and configure the project for efficient development.

How to Run
Before running the app, make sure you have Node.js and npm installed on your system.

Clone the repository and navigate to the project directory.

Run npm install to install all necessary dependencies.

Use npm start to spin up the development server.

Head over to http://localhost:3000 in your browser to interact with the app.

Design Decisions
User-Centered Design:
The dashboard is designed to prioritize ease of use and clarity. We focused on making the interface intuitive so users can easily manage AI safety incidents without a steep learning curve.

Efficient State Management:
We leveraged React's built-in useState hook for managing the state of incidents, filters, and sorting options. This ensures that the app remains responsive and performs well even with a larger number of incidents.

Tailwind CSS for Responsive Layout:
We utilized Tailwind CSS for its utility-first approach, which allowed us to quickly build responsive and clean layouts. With minimal custom CSS, the design is fully customizable, ensuring that the app works well across all screen sizes.

Clear Incident Severity Classification:
A major focus was to make the severity classification of each incident clear and easily distinguishable. The use of color-coded severity labels helps users quickly understand the urgency of each incident, ensuring that important issues stand out at a glance.


Challenges
Smooth Theme Switcher Implementation:
One of the main challenges was implementing a theme switcher that transitions seamlessly between night and day modes without affecting the app's performance. By utilizing Tailwind CSS's built-in dark mode support, we were able to achieve this effect efficiently.

State Management for Filters and Sorting:
Managing the state for filtering incidents by severity and sorting by date posed some challenges in maintaining performance and responsiveness. We ensured that the state was handled efficiently by keeping it local and reducing unnecessary re-renders.

User-Friendly UI for Incident Display:
Displaying incidents in a user-friendly format was essential. We designed the layout to include clear labels for severity and reported dates, allowing users to quickly grasp important details at a glance.

Contact
Created by: Ansh Thukral
Feel free to reach out if you have any questions, suggestions, or feedback!
