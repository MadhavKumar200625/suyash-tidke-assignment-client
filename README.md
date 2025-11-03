---

## **Frontend README — `suyash-tidke-assignment-frontend`**

```markdown
# Stock Watchlist Frontend

This is the **React frontend** for the Stock Watchlist app.  
It provides a simple, clean, and responsive interface to manage and view stock symbols.

The frontend communicates securely with the Node.js backend via REST API.

---

## Features

- **Add Stocks:**  
  Quickly add your favorite stock by entering a 1–5 letter uppercase symbol.

- **View Watchlist:**  
  Displays all stocks saved in your watchlist, retrieved from the backend.

- **Real-time UI Updates:**  
  Added stocks appear instantly after adding.

- **Error Handling:**  
  Displays meaningful alerts for invalid symbols or duplicates.

- **Responsive Design:**  
  Fully responsive for desktop and mobile devices.

---

## Tech Stack

| Layer | Technology |
|--------|-------------|
| Framework | React |
| Styling | Tailwind CSS |
| API Calls | Fetch API |
| State Management | React Hooks (`useState`, `useEffect`) |
| Deployment | Railway (Static Site) or Vercel |
| Version Control | Git + GitHub |

---

## Configuration

Create a `.env` file in the root of your React app:

```bash
REACT_APP_API_URL=suyash-tidke-assignment-backend.vercel.app
