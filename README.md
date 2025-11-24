# 🇿🇦 SA Executive Directory

A modern, responsive web application built with **React** and **Tailwind CSS** that serves as a transparent directory of the current South African Cabinet Ministers (7th Administration).

This project focuses on **data integrity** and **national branding**, providing users with a clean, searchable list of the Executive, including key professional and political details.

-----

## ✨ Features

  * **Comprehensive Data:** Displays details for all **34 Cabinet Ministers** of the 7th Administration, including their specific portfolio, political party, and detailed educational qualifications.
  * **Real-time Search:** Instantly filters the directory by **Minister Name**, **Portfolio**, **Party**, or **Qualification** using efficient React state management.
  * **Unique Theming:** Features a custom color palette derived from the South African flag, utilizing **Olive Gold** (`#808000`), **Green** (`#007A33`), and **Blue** (`#3C6382`) for a professional and authoritative visual style.
  * **Responsive Design:** Fully optimized layout for seamless viewing across all devices (desktop, tablet, and mobile).
  * **Modular Architecture:** Structured for clarity and scalability using modern React standards with logical separation of concerns across multiple files.

-----

## 🛠 Technology Stack

  * **Frontend Framework:** React (Functional Components & Hooks: `useState`, `useMemo`)
  * **Styling:** Tailwind CSS (Utility-First)
  * **State Management:** Local Component State (`useState`)
  * **Data Structure:** JavaScript ES Modules (`.jsx`)

-----

## 📂 File Structure Overview

The project maintains a logical separation of duties, promoting clarity and ease of maintenance:

| File | Purpose | Key Content |
| :--- | :--- | :--- |
| **`App.jsx`** | **Main Application Logic** | Contains global state (`searchTerm`), the filtering logic (`useMemo`), sets up the custom SA color variables (CSS), and renders the header, search input, and grid of cards. |
| **`data.jsx`** | **Static Data Source** | Exports the `officialsData` array containing the verified details (ID, Name, Office, Party, Qualification, Description) for all 34 ministers. |
| **`cards.jsx`** | **Reusable Component** | Exports the `MinisterCard` component. This component receives a single minister's data as a prop and applies dynamic Tailwind styling, including party-specific colors. |

-----

## 🎨 South African Theme Palette

The application uses custom CSS variables (defined in `App.jsx`) to ensure brand consistency:

| Variable | Hex Code | Purpose in Design |
| :--- | :--- | :--- |
| `--sa-bg` | `#808000` | Main application background (Olive Gold) |
| `--sa-gold` | `#ffcb03` | Primary accent (Header text, Card top borders) |
| `--sa-green` | `#007A33` | Accent color (Portfolio text, Footer dividers) |
| `--sa-blue` | `#3C6382` | Text/Heading accents (Minister names) |

-----

## 🚀 Installation and Usage

To run this project locally, ensure you have Node.js and a package manager (npm or Yarn) installed.

1.  **Set up the project files:** Ensure the `App.jsx`, `cards.jsx`, and `data.jsx` files are in your project directory alongside a valid `package.json` setup (e.g., from a Vite project).
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the application:**
    ```bash
    npm run dev
    ```

The application will typically launch and be accessible via your local development server address.

-----

*Created by Osric Jacobs. Data reflects the current 7th Administration Cabinet (2024).*