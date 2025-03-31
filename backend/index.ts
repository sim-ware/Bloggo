import express from 'express'
import db from './db'

// 
// Initialization //
const PORT = 3000
const app = express()
app.use(express.json())

// 
// Routes //
app.get('/posts', (_, res) => {
  const posts = db.prepare('SELECT * FROM posts').all()
  res.json(posts)
})

app.post('/posts', ({ body: { title, content } }, res) => {
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' })
  }
  const stmt = db.prepare('INSERT INTO posts (title, content) VALUES (?, ?)')
  const info = stmt.run(title, content)
  res.status(201).json({ id: info.lastInsertRowid, title, content })
})

// 
// Port //
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

export default app
