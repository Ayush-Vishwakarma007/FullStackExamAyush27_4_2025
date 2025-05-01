# Mini E-Commerce Full Stack Application

This is a full-stack e-commerce platform built with **Next.js** (frontend) and **Node.js/Express** (backend) with a **MongoDB** or **PostgreSQL** database.

## Tech Stack
- Frontend: Next.js (TypeScript)
- Backend: Node.js + Express
- Database: MongoDB or PostgreSQL
- Styling: TailwindCSS

## Installation Steps
1. Clone the repository:    
   ```bash
   git clone https://github.com/Ayush-Vishwakarma007/FullStackExamAyush27_4_2025.git
   cd mini-ecommerce
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

## Database Setup Instructions
1. Install and start MongoDB (or PostgreSQL) locally or use a cloud service like MongoDB Atlas.
2. Create a database named `ecommerce_db`.
3. Inside the `/server` directory, create a `.env` file with the following:
   ```bash
   DATABASE_URL=mongodb://localhost:27017/ecommerce_db
   PORT=5000
   ```
   (Adjust `DATABASE_URL` if using PostgreSQL.)

## How to Run the Server
1. Start the backend server:
   ```bash
   cd server
   npm run dev
   ```
   The backend will run at `http://localhost:5000`.

2. Start the frontend Next.js app:
   ```bash
   cd ..
   npm run dev
   ```
   The frontend will run at `http://localhost:3000`.

## Folder and File Explanation
- `/src/app/page.tsx`: Main page that fetches and displays product listings using a server component.
- `/src/components/ProductCard.tsx`: A reusable card component that displays each product’s details.
- `/src/services/productService.ts`: A service function that handles API calls to fetch products from the backend.
- `/server/controllers/productController.js`: Backend controller that handles logic for retrieving products.
- `/server/models/productModel.js`: Defines the database schema for products.
- `/server/routes/productRoutes.js`: Backend route definitions for products API (`/api/products`).
- `/server/server.js`: Main Express server file that ties together routes, database connection, and server settings.
- `/public`: Contains static assets like images.
- `/src/styles/globals.css`: Global CSS file styled with TailwindCSS.

## Features
- Product listing with dynamic API fetching
- TailwindCSS responsive design
- Server-side rendering using Next.js
- Proper error handling if products fail to load
- Easy to extend for cart, authentication, payments

## License
This project is open-source under the [MIT License](LICENSE).

    
