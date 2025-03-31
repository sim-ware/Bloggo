# Bloggo

A simple Blog Framework using TypeScript, Express & React. 

Unit & Integration Tests by Vitest.

## BackEnd
### Dependencies
```
npm init -y
npm install express
npm install -D typescript ts-node-dev vitest @types/express @vitest/ui
```

## Usage
### FrontEnd
---
#### To Run Tests
#### To Run Dev
### BackEnd
---
#### To Run Tests
#### To Run Dev

If aiming for **zero third-party dependencies**, you can use **SQLite via the built-in `node:child_process` module** and call the `sqlite3` CLI directly, **but** that's:
- Less portable (depends on having `sqlite3` installed on the machine)
- Slower and messier to work with programmatically
- Not ideal for production or complex queries

Here's why **better-sqlite3** leads in order of popularity and quality, and has become industry standard:


###### ✅ 1. [`better-sqlite3`](https://github.com/WiseLibs/better-sqlite3) (most recommended)
- **Synchronous**, fast, stable
- Widely used in Electron apps and small servers
- Actively maintained
- No async/await required — good for small apps
- **Zero config**
- ✅ Used by: Vite, Electron apps, open source tools  
- 🚀 **Recommended for simplicity and performance**
```ts
import Database from 'better-sqlite3'
const db = new Database('blog.db')
```

## Deployment

This project can be easily deployed on Render.com. Here's how to deploy both the frontend and backend:

### Backend Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following:
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment Variables:
     - `NODE_ENV=production`
     - `FRONTEND_URL=https://your-frontend-url.onrender.com`

### Frontend Deployment

1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Set the following:
   - Root Directory: `frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Environment Variables:
     - `VITE_API_URL=https://your-backend-url.onrender.com`

### Important Notes

- Make sure to update the `VITE_API_URL` in the frontend deployment to point to your backend URL
- Make sure to update the `FRONTEND_URL` in the backend deployment to point to your frontend URL
- The backend uses SQLite, which is suitable for development but consider using a production database like PostgreSQL for production
- Both services will automatically redeploy when you push to your main branch