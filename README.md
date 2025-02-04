# Candidate Search Application

A React-based application for searching and saving GitHub user profiles as potential candidates. This application allows you to:
- View GitHub user profiles (name, username, location, email, company, etc.).
- Save candidates to a list of potential hires.
- Remove candidates from the saved list.
- Navigate between the candidate search and saved candidates pages.

## Features
- **Candidate Search**: Fetch and display GitHub user profiles with details like name, username, location, email, and company.
- **Save Candidates**: Save potential candidates to a list for future review.
- **Remove Candidates**: Remove candidates from the saved list if they are no longer of interest.
- **Styling**: Clean and modern UI with responsive design.

## Technologies Used
- **React**
- **TypeScript**
- **Vite**
- **GitHub API**
- **React Router**
- **LocalStorage**

## Code Attribution
API Integration: The code for fetching GitHub user data is based on the GitHub REST API documentation. The API integration logic can be found in src/api/API.tsx.

React Router Setup: The navigation setup using React Router is inspired by the React Router documentation. The routing configuration is located in src/main.tsx.

LocalStorage Usage: The logic for saving and retrieving candidates using localStorage is implemented in src/pages/CandidateSearch.tsx and src/pages/SavedCandidates.tsx.

Styling: The CSS styles for the application are defined in src/index.css.
---
Project by Monty Gracey
---
Deployed site - https://montygraceycandidatesearch.netlify.app/
---
![Untitled design](https://github.com/user-attachments/assets/97b57b91-5db2-41d4-b177-6116be043d92)

![Screenshot_10](https://github.com/user-attachments/assets/cc6733a7-f6b0-4341-adca-f1f427e7190c)


