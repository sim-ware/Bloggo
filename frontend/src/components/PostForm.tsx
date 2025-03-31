import React, { useState } from 'react'
import type { Post } from '../types'

interface Props {
  onPostCreated: (post: Post) => void
}

export default function PostForm({ onPostCreated }: Props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
    const post = await res.json()
    onPostCreated(post)
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Post title"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Post content"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button 
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create Post
      </button>
    </form>
  )
} 