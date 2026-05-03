# 💰 Finance Tracker - Backend

This repository contains the backend API for the **Finance Tracker** application. It is built using Node.js, Express, and MongoDB, providing a robust architecture for managing users, balances, and transactions.

---

## 🚀 Live API

🔗 **Project Live Link:** [https://github.com/ekra024/finance-project-frontend](https://github.com/ekra024/finance-project-frontend)


**Frontend Link:** [https://github.com/ekra024/finance-project-frontend](https://github.com/ekra024/finance-project-frontend)



---

## 🛠️ Technology Stack

- **Node.js & Express.js:** Server and API framework
- **MongoDB & Mongoose:** Database and ODM
- **Firebase Admin SDK:** For verifying Firebase authentication tokens
- **Vercel:** Deployment and hosting

## 🔑 Key Features

- **Secure Token Verification:** Middleware that verifies Firebase ID tokens for protected routes.
- **Transaction Validation:** Server-side logic to ensure valid withdrawals (prevents negative balances).
- **RESTful API:** Clean, standard endpoints for users and transactions.
- **MVC Architecture:** Separation of concerns using Models, Controllers, and Routes.

## 📂 Project Structure

- `/models` - Mongoose schemas (User, Transaction)
- `/controllers` - Business logic for API endpoints
- `/routes` - Express route definitions
- `/middleware` - Custom middleware (e.g., Auth verification)
- `/config` - Database connection and Firebase Admin setup

## 📡 API Endpoints

### User & Balance
- `POST /api/users` - Create or sync a user upon registration/login
- `GET /api/users/balance` - Get the current user's balance

### Transactions
- `POST /api/transactions/add` - Add income (deposit)
- `POST /api/transactions/withdraw` - Withdraw funds (expense)
- `GET /api/transactions` - Fetch user's transaction history

*(Note: All endpoints require a valid Firebase Auth token sent in the `Authorization` header as `Bearer <token>`)*

## ⚙️ Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root of the backend directory:
   ```env
   PORT=5000
   MONGO_URI="your_mongodb_connection_string"
   FIREBASE_PROJECT_ID="your_firebase_project_id"
   FIREBASE_PRIVATE_KEY="your_firebase_private_key"
   FIREBASE_CLIENT_EMAIL="your_firebase_client_email"
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   *(For development with auto-reload, use `npm run dev` if nodemon is configured).*

---
Designed and developed to securely power the Finance Tracker application.
