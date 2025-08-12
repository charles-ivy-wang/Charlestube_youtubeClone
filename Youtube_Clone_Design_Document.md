# YouTube Clone – Design Document

## Overview
This YouTube Clone project was inspired by a [YouTube tutorial by GreatStack](https://www.youtube.com/watch?v=Zb1zVeXLUf8&list=PLjwm_8O3suyMMs7kfDD-p-yIhlmEgJkDj&index=4), but restructured and customized to deepen understanding of React fundamentals, API integration, and component-based application architecture. It leverages React features such as hooks, props, and React Router for dynamic rendering and navigation, while also practicing how to interface with REST APIs and render UI conditionally based on application state.

---

## Folder Structure
```
/assets               - Icons, thumbnails, and other static assets
/components           - Modular UI components: Feed, Navbar, Sidebar, etc.
/Page
  ├── Home/           - Home page rendering feed and sidebar
  └── Video/          - Watch page with video player and recommended videos
App.jsx               - Main route controller that passes props to Home and Video
main.jsx              - Entry point with BrowserRouter wrapper
index.css             - Global CSS styles
data.js               - External data config for categories and API keys
```

---

## Development Timeline and Steps

### 1. Initial UI Setup
- **Files Involved**: `Feed.jsx`, `Navbar.jsx`, `Sidebar.jsx`, `PlayVideo.jsx`, `Recommended.jsx`
- Started by building a static version of the main components:
  - `Navbar` (top navigation)
  - `Sidebar` (category selector)
  - `Feed` (grid of video thumbnails)
  - `PlayVideo` (YouTube-style video display)
  - `Recommended` (sidebar with related videos)
- Focused first on layout using Flexbox and basic CSS styling before implementing any logic or interactivity.

---

### 2. Component Mounting with React Router
- Routing logic is centralized in **App.jsx**, using `Routes` and `Route` from `react-router-dom`.
- Implemented two key paths:
  - `/` – renders `Home` with props passed in for layout control
  - `/video/:categoryId/:videoId` – renders `Video`, dynamically receiving category and video identifiers
- The `main.jsx` file wraps the app in `BrowserRouter`, enabling client-side routing.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### 3. API Integration and Data Handling
- Fetched trending and specific video data using **YouTube Data API v3**.
- Integrated the API using `fetch` and `async/await` inside custom functions.
- Stored fetched data using `useState`, allowing dynamic UI updates as data is loaded.

Example:
```js
const fetchData = async () => {
  const res = await fetch(YOUTUBE_API_URL);
  const data = await res.json();
  setVideos(data.items);
};
```

- For the video player, extracted `videoId` and `categoryId` from the URL using `useParams`, then embedded the video via a YouTube iframe.

```jsx
<iframe
  src={`https://www.youtube.com/embed/${videoId}`}
  frameBorder="0"
  allowFullScreen
></iframe>
```

---

### 4. Props and State-Driven UI
- The `sidebar` toggle is controlled at the top level (`App.jsx`) with `useState`.
- Passed as props to `Navbar` (to trigger toggle) and `Home` (to conditionally render the sidebar).
- Used dynamic class names to change CSS styling based on sidebar state.

```jsx
<div className={sidebar ? "sidebar active" : "sidebar"}>
```

- Data fetched from the API is mapped over in components like `Feed` and `Recommended` to display multiple video cards.

---

### 5. Layout and Styling
- Built using **custom CSS**, styled with:
  - `display: flex` and `grid` for layout
  - `hover` effects for interactivity
  - `media queries` for responsive design (in progress)
- Modularized CSS into component folders for maintainability.
- Focused on building a real-world styled interface, visually close to YouTube.

---

## Known Limitations
- Search bar is present in UI but lacks full search functionality.
- Subscribe, Like, Share buttons are not hooked to backend logic.
- Sidebar does not yet support mobile responsiveness.
- No saved user data or localStorage caching.
- No video history, playback state, or infinite scroll implementation.

---

## Tools & Libraries Used
- **React**
- **React Router DOM**
- **JavaScript (ES6+)**
- **YouTube Data API v3**
- **CSS (Flexbox, Grid, Transitions)**
- **useParams** for dynamic route parsing
- **fetch** and `async/await` for API communication

---

## Future Improvements
- Implement functional search and show real-time results.
- Add backend or localStorage for subscriptions and liked videos.
- Expand sidebar with user account or theme toggle options.
- Build a true Theater Mode or Picture-in-Picture support.
- Optimize for mobile responsiveness and performance scalability.
