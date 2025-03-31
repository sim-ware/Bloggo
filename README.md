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
### To Run Tests
### To Run App

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