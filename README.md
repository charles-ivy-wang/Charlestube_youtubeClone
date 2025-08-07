# YouTube Clone
This is a YouTube clone project built to practice and strengthen core React concepts such as data fetching, React Router, dynamic UI updates using state and props, and component-based architecture. The project was completed as a way to deepen understanding of API-driven applications, complex layout styling, and interactive user interface design in React. A detailed design document is coming soon!

## 🚀 Features
- YouTube-style homepage with dynamic video data fetched from the YouTube Data API
- Video watch page with embedded player and detailed video metadata
- Navigation across components using `React Router` and dynamic URLs
- Use of `props` to pass data between components efficiently
- Subtle and complex CSS stylings for buttons, cards, sidebars, and interactions
- Conditional styling based on state variables (e.g., changing `div` class names)
- Sidebar with static and dynamic elements
- Search input styled and connected to layout (functionality coming soon)
- Responsive layout for desktop usage

## 🧠 Technologies Used
- **React** (Hooks, Props, State)
- **React Router DOM** for multi-page routing
- **YouTube Data API v3** for fetching trending videos and video details
- **JavaScript** for business logic and API integration
- **Custom CSS** for layout, hover effects, transitions, and responsive design
- **Dynamic classNames** for conditional rendering

## 🔍 Key Differences from the Original YouTube Tutorial
- **Router Integration**: Implemented `Link` and `useParams` to navigate between homepage and watch page
- **Props Utilization**: Passed down video details, statistics, and UI control across multiple component layers
- **Conditional Styling**: UI changes dynamically based on state — such as active side menu states or UI themes
- **Custom CSS**: All styles are written and customized manually for a better grasp of layout control
- **UI-only Elements**: Coded UI for Like, Dislike, Share, Save, Subscribe — styling and structure complete without API functionality

## 📁 Project Structure (Simplified)
```
src/
├── components/       # Video card, sidebar, play video page, etc.
├── assets/           # Static files like icons or images
├── config/           # API key and endpoint config
├── App.jsx           # Main application layout and routes
├── main.jsx          # React entry point
├── index.css         # Global styles
```

## 📽️ Reference
This project is inspired by a [YouTube tutorial by GreatStack](https://www.youtube.com/watch?v=Zb1zVeXLUf8&list=PLjwm_8O3suyMMs7kfDD-p-yIhlmEgJkDj&index=4), and was adapted to implement more realistic features and deepen understanding of how real-world React apps are built.

## 💡 Potential Improvements
- Search Bar Functionality: Currently styled and set up — needs logic to perform actual video searches via API
- Subscription List: Implement backend or local state to manage subscriptions and display them in sidebar
- Theater Mode: Allow users to toggle between standard and theater view for the video player
- Functionality for Action Buttons: Implement backend interaction for Like, Share, Save, and Subscribe
- Pagination / Infinite Scroll: For smoother loading of more videos
